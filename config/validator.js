const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        fullName: joi.string().max(30).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'fullName / Your fullName must have at less 3 characters',
            'string.max':"fullName / your fullName must not exceed 20 characters"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email':'Wrong format email, please verify it'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min':'your password must have minimum 8 characters, and at least a number',
            'string.pattern':"Your password must be alphanumeric and contain a number"
        }),
        urlImage: joi.string(),
        country: joi.string().required(),
        from:joi.string()
    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})
       
    if (validation.error) {             //si hay un error segun lo establecido en la validacion -> nos aparece e detalle que es el mensaje que establecimos 
        
        return res.json({success: false, from:"validator", message:validation.error.details, test: validation})
                                                                            // ditails es el mensaje que se estableció en cada elemento a validar
    }
    
    next()
    
}

module.exports = validator    //De aqui pasa a routes y llega a la ruta de signup para validar antes de