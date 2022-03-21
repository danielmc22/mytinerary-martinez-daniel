const User = require('../models/users')
const bcryptjs = require('bcryptjs')
const crypto = require('crypto')        //NPM CRYPTO
const nodemailer = require('nodemailer') //NPM NODEMAILER   -  PARA ENVIAR EMAILS DESDE NODE
const jwt = require('jsonwebtoken')



const sendEmail = async (email, uniqueString) => { //FUNCION ENCARGADA DE ENVIAR EL EMAIL

    const transporter = nodemailer.createTransport({ //DEFINIMOS EL TRASPORTE UTILIZANDO NODEMAILER
        host: 'smtp.gmail.com',         //DEFINIMOS LO PARAMETROS NECESARIOS
        port: 465,
        secure: true,
        auth: {
            user: "verify.email.itinerary@gmail.com",    //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE
            pass: "verify12345678"                          //COREO ELECTRONICO, CONFIGURAR CUAENTAS PARA PERMIR EL USO DE APPS
        }                                               //CONFIGURACIONES DE GMAIL
    })

    // EN ESTA SECCION LOS PARAMETROS DEL MAIL 
    let sender = "verify.email.itinerary@gmail.com"  
    let mailOptions = { 
        from: sender,    //DE QUIEN
        to: email,       //A QUIEN
        subject: "User verification at Mytinerary ", //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
        html: `
        <div >
        <h3 style="color:green">Press <a href=http://localhost:4000/api/verify/${uniqueString}>here</a> to confirm and verify your email. Thanks </h3>
        </div>
        `
    
    };
    await transporter.sendMail(mailOptions, function (error, response) { //SE REALIZA EL ENVIO
        if (error) { console.log(error) }
        else {
            console.log("Mensaje enviado")

        }
    })
};


const usersControllers = {

    verifyEmail: async (req, res) => {

        const { uniqueString } = req.params; //EXTRAE EL EL STRING UNICO DEL LINK

        const user = await User.findOne({ uniqueString: uniqueString })
        console.log(user) //BUSCA AL USUARIO CORRESPONDIENTE AL LINK
        if (user) {
            user.emailVerificado = true //COLOCA EL CAMPO emailVerified en true
            await user.save()
            res.redirect("http://localhost:3000/") //REDIRECCIONA AL USUARIO A UNA RUTA DEFINIDA
            //return  res.json({success:true, response:"Su email se ha verificado correctamente"})
        }
        else { res.json({ success: false, response: "Your email has not been verified" }) }
    },


    signUpUsers:async (req,res)=>{
        console.log(req.body)
        let {fullName, email, password, from, country, urlImage, uniqueString, emailVerificado  } = req.body.userData
      const test = req.body.test

        try {
    
            const usuarioExiste = await User.findOne({ email }) //BUSCAR SI EL USUARIO YA EXISTE EN DB
            
            if (usuarioExiste) {
                console.log(usuarioExiste.from.indexOf(from))
                if (usuarioExiste.from.indexOf(from) === 0) {
                    console.log("resultado de if " +(usuarioExiste.from.indexOf(from) === 0 )) //INDEXOF = 0 EL VALOR EXISTE EN EL INDICE EQ A TRUE -1 NO EXITE EQ A FALSE
                    res.json({ success: false,
                               from:"signup", 
                               message: "You have already made your registration by this way, now you can do SignIn" })
                } else {
                    const contraseñaHasheada = bcryptjs.hashSync(password, 10)
                     
                    usuarioExiste.from.push(from)
                    usuarioExiste.password.push(contraseñaHasheada) 
                    if(from === "form-Signup"){ 
                        //PORSTERIORMENTE AGREGAREMOS LA VERIFICACION DE EMAIL
                        usuarioExiste.uniqueString = crypto.randomBytes(15).toString('hex')
                        await usuarioExiste.save()
                        await sendEmail(email, usuarioExiste.uniqueString) //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO
                    res.json({
                        success: true, 
                        from:"signup", 
                        message: " We sent you an email to verify it, please check your inbox to complete registration and add it to your login methods.  "
                    }) 
                    
                    }else{
                    
                    usuarioExiste.save()
                    
                    res.json({ success: true,
                               from:"signup", 
                               message: "We add "+from+ " to your ways to do SignIn" })
                }
            }
            } else {
                //SI EL USUARIO NO ESXITE
               
                const contraseñaHasheada = bcryptjs.hashSync(password, 10) //LO CREA Y ENCRIPTA LA CONTRASEÑA
                console.log(contraseñaHasheada)
                // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
                const nuevoUsuario = await new User({
                    fullName,
                    email,
                    urlImage,
                    password:[contraseñaHasheada],
                    uniqueString:crypto.randomBytes(15).toString('hex'),
                    emailVerificado:false,
                    from:[from],
                
                })
              
                //SE LO ASIGNA AL USUARIO NUEVO
                if (from !== "form-Signup") { //SI LA PETICION PROVIENE DE CUENTA GOOGLE
                    await nuevoUsuario.save()
                    res.json({
                        success: true, 
                        from:"signup",
                        message: "Congratulations! a new user has been created by" +from
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
    
                } else {
                    //PASAR EMAIL VERIFICADO A FALSE
                    //ENVIARLE EL E MAIL PARA VERIFICAR
                    await nuevoUsuario.save()
                    await sendEmail(email, nuevoUsuario.uniqueString) //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO
    
                    res.json({
                        success: true, 
                        from:"siggup",
                        message: "We sent you an email to verify it, please check your inbox to complete the SingUp. "
                    }) // AGREGAMOS MENSAJE DE VERIFICACION
                } 
            }
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: " Something went wrong, try later. " }) //CAPTURA EL ERROR
        }
    },
    signInUser: async (req, res) => {

        const { email, password,  from, urlImage  } = req.body.logedUser
        try {
            const usuarioExiste = await User.findOne({ email })

            if (!usuarioExiste) {// PRIMERO VERIFICA QUE EL USUARIO EXISTA
                res.json({ success: false, message: "Your user has not been registred, please SingUp." })

            } else {
                if (from !== "form-Signin") { 
                    
                    let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                    
                    if (contraseñaCoincide.length >0) { 
                       
                        const userData = {
                                        id:usuarioExiste._id,
                                        fullName: usuarioExiste.fullName,
                                        email: usuarioExiste.email,
                                        urlImage: usuarioExiste.urlImage,
                                        from:usuarioExiste.from
                                        }
                        await usuarioExiste.save()

                        const token = jwt.sign({...userData}, process.env.SECRET_KEY,{expiresIn:  60* 60*24 })
                        

                        res.json({ success: true,  
                                   from:from,
                                   response: {token,userData }, 
                                   message:"Wellcome  "+userData.fullName,
                                 })

                    } else {
                        res.json({ success: false, 
                            from: from, 
                            message:"You have not registered with "+from+" if you want to get into with this way you must realize the Sign Up with " +from
                          })
                    }
                } else { 
                    if(usuarioExiste.emailVerificado){
                        
                        let contraseñaCoincide =  usuarioExiste.password.filter(pass =>bcryptjs.compareSync(password, pass))
                        console.log(contraseñaCoincide)
                        console.log("resultado de busqueda de contrasela: " +(contraseñaCoincide.length >0))
                        if(contraseñaCoincide.length >0){
                            
                        const userData = {
                            id: usuarioExiste._id,
                            fullName: usuarioExiste.fullName, 
                            email: usuarioExiste.email,
                            urlImage: usuarioExiste.urlImage,
                            from:usuarioExiste.from
                            }
                            const token = jwt.sign({...userData}, process.env.SECRET_KEY, {expiresIn:  60* 60*24 })
                        res.json({ success: true, 
                            from: from, 
                            response: {token, userData }, 
                            message:"Wellcome again! "+userData.fullName,
                          })
                        }else{
                            res.json({ success: false, 
                                from: from,  
                                message:"User or password don't match",
                              })
                        }
                    }else{
                        res.json({ success: false, 
                            from: from, 
                            message:" You dont have verified your email, please check your inbox to complete your sign up"
                          }) 
                    }

                } //SI NO ESTA VERIFICADO
            }

        } catch (error) {
            console.log(error);
            res.json({ success: false, message: "Something went wrong, try in some minutes" })
        }
    },
    signOutUser: async (req, res) => {
       
        const email = req.body.closeuser
        const user = await User.findOne({ email })
        await user.save()
        res.json(console.log('Your session has been closed ' + email))
    },

    verificarToken: (req, res) => {
        console.log(req.user)
        if (!req.err) {
            res.json({
                success: true,
                response: { id: req.user.id, fullName: req.user.fullName, country: req.user.country, urlImage: req.user.urlImage, email: req.user.email, from: "token" },
                message: "Welcome back " + req.user.fullName
            })
        } else {
            res.json({
                success: false,
                message: "Please retry signIn"
            })
        }
    },



}
module.exports = usersControllers









