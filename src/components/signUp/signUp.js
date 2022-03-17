import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actionsCreators/userActions';
import { Link as LinkRouter } from 'react-router-dom';
import Snack from '../Snackbar'
/* import FacebookSignUp from "./facebooksignup" */
import {useState } from "react";

function SignUp(props) {
const paises =["Choose", "Argentina", "Brasil", "Bolivia", "Chile", "Colombia", "Ecuador", "Mexico", "Paraguay", "Peru", "Venezuela" ]

    console.log(props)

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
            country: selectPaises,
            from: "form-Signup",
        }
        props.signUpUser(userData)

    }

    return (

        <>
        <div className='d-flex flex-column justify-content-center align-items-center' >
            <div>
                  <h2 className="mt-3 text-center"> Select your country </h2>
            </div>
            <div>
                <select
                    className="form-select form-select-sm"
                    aria-label=".form-select-sm example"
                    onChange={select}
                  >
                    {paises.map((country) => (
                      <option key={country}>{country}</option>
                    ))}
                  </select>
                  </div>
                  {selectPaises !== "Choose" ? (
                <section>       
        
                <Snack/>
                <h1 className='mb-5 mt-5'>Create a new User</h1>
                <h2 className='mb-5'>Using Facebook</h2>

                {/* <FacebookSignUp country={selectPaises}/> */}

                <h2>Or with our Form</h2>

                <form onSubmit={handleSubmit}>
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
                    <label>Select Your country</label>
                    <select className="form-select mb-3" aria-label="Default select example">
                       
                        {paises.map(pais =>
                        <option key={pais} value={pais}>{pais}</option>
                        )}
                    </select>
        
                    <div className="form-group d-flex justify-content-center align-items-center">
                        <button type="submit" className="btn btn-primary btn-block mt-3"> Create Account  </button>
                    </div>
                    <div className="text-center mt-3">Do you have an existing account? <LinkRouter to="/signin">SignIn</LinkRouter> </div>
                </form>
                </section>    
                ) : (
                    <h3>Select your country to proceed with the SignUp</h3>
                  )}
                </div>
                </> 
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











