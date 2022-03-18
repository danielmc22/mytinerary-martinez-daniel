import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actionsCreators/userActions';
import './styleSign.css'

function FacebookSignIn(props) {

  const responseFacebook = async (res) => {
      
     
    console.log(res)
    const logedUser = {
      email: res.email,
      password: res.id,
      from: "facebook",
      
    }
    await props.signInUser(logedUser)
  }

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton=" Sign In with Facebook"
      appId="1182833065808899"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  );
}
const mapDispatchToProps = {
  signInUser: userActions.signInUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignIn);