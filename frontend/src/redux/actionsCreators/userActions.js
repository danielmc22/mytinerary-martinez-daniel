import axios from 'axios';

const userActions = {

    signUpUser: (userData) => {             //Aqui llega la info recolectada en el formu de signUp
                                            // y ahora sale para las routes... (routes de signUp) - luego va al controller
        return async (dispatch, getState) => {

            const res = await axios.post('http://localhost:4000/api/auth/signUp', { userData })
            console.log(res)
            dispatch({type: 'message', 
                       payload: {view: true,
                                 message: res.data.message,
                                 success: res.data.success}});
        }
    },

    signInUser: (logedUser) => {

        return async (dispatch, getState) => {
            
            const user = await axios.post('http://localhost:4000/api/auth/signIn', { logedUser })
            if(user.data.success){
                 localStorage.setItem('token',user.data.response.token) 
            dispatch({type: 'user', payload: user.data.response.userData});
            
            }
            dispatch({type: 'message',
            payload: {view: true,
                      message: user.data.message,
                      success: user.data.success}});
        } 
    },
    SignOutUser :(closeuser)=>{
        return async (dispatch, getState) => {
        const user = axios.post('http://localhost:4000/api/auth/signOut',{closeuser})
         localStorage.removeItem('token') 
        dispatch({type: 'user', payload: null});
    } 
},

    VerificarToken: (token) => {                    //llega el token 

     return async (dispatch, getState) => {
         console.log(token)
         const user = await axios.get('http://localhost:4000/api/auth/signInToken', {
             headers: {                               // Se pasa el dato 'Authorization bajo el metodo bearer + token 
                 'Authorization': 'Bearer ' + token
             }
         })
         console.log(user)
         
         if (user.data.success) {
             dispatch({ type: 'user', payload: user.data.response });
             dispatch({
                 type: 'message',
                 payload: {
                     view: true,
                     message: user.data.message,
                     success: user.data.success
                 }
             });
         } else {
             localStorage.removeItem('token')
         }
     }
    }
}

export default userActions;