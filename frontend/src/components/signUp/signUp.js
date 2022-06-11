import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actionsCreators/userActions';
import { Link as LinkRouter } from 'react-router-dom';
import Snack from '../Snackbar'
import "../../styles/signUp.css"
import FacebookSignUp from "./facebookSignUp" 
import { useState } from "react";
import ImgCallTo from "../../img/Call_to_action.png"

function SignUp(props) {

    const [selectPaises, setSelectPaises] = useState("unselected");

    function select(event) {
        console.log(event.target.value);
        setSelectPaises(event.target.value);
      }

      console.log(props)


    const handleSubmit = (event) => {
        event.preventDefault()
        const userData = {                                  //Todo Esto viaja a userActions
            fullName: event.target[0].value,
            email: event.target[1].value,                       
            password: event.target[2].value,
            urlImage: event.target[3].value,
            country: event.target[4].value,
            from: "form-Signup",
        }
        props.signUpUser(userData)

        console.log(event)

    }

    return (

<div className='mainContainerSignUp'>

    <div className='containerSignUp' > 
        <div className='d-flex flex-column justify-content-center align-items-center' >

            <div>

                  </div>
                  {selectPaises !== "Choose" ? (
                <section>       
        
                <Snack/>
                <h1 className='mb-1 mt-3 text-center '> Create a new User </h1>
                <h2 className='mb-3 mt-2 text-center '> Using Facebook </h2>

                <FacebookSignUp className='d-flex  justify-self-center align-self-center' country={selectPaises}/> 

                <h2 className='mb-2 mt-3 text-center '>Or with our Form</h2>

                <form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit}>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            
                        </div>
                        <input name="Name" className="form-control mb-3" placeholder="Full Name" type="text" />
                    </div>
                    
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                           
                        </div>
                        <input name="email" className="form-control mb-3" placeholder="Email address" type="email" />
                    </div>
                
                    
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            
                        </div>
                        <input name='password' className="form-control mb-3" placeholder="password" type="password" />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            
                        </div>
                           <input name="urlImage" className="form-control mb-3" placeholder="url Image" type="text" />
                        </div>
        
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary btn-block mt-1 mb-4"> Create Account  </button>
                    </div>
                    <div className="text-center mt-3 txtLast ">Do you have an existing account? 
                    <LinkRouter to="/signIn"> Sign In </LinkRouter> </div>
                </form>
                </section>    
                ) : (
                    <h3>Select your country to proceed with the SignUp</h3>
                  )}
                </div>
        </div>


        <div className='divCallTo'>
            <img src={ImgCallTo} className="imgCallTo"/>
            <h3> Hey Traveler!</h3>
            <h4> Already have an account ?</h4>
            <LinkRouter to="/signIn" className="linkLogin"> LOGIN HERE </LinkRouter>
        </div>

    </div>
    )

}

const mapDispatchToProps = {
    signUpUser: userActions.signUpUser,

}
const mapStateToProps = (state) => {       //aca traigo los datos que necesito que estan en mi storage
    return {
        message: state.userReducer.message,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp);











