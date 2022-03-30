import './styleSign.css'
import React from 'react'
import { connect } from 'react-redux';
import userActions from '../../redux/actionsCreators/userActions';
import { Link as LinkRouter } from 'react-router-dom';
import Container from "./container";
import Snack from '../Snackbar'
import "../../styles/signIn.css"
import FacebookSignIn from "./facebookSignIn" 
import ImgCallTo from "../../img/Call_to_action.png"

function SignIn(props) {

	const handleSubmit = (event) => {
		event.preventDefault()
		console.log(event.target)
		const logedUser = {
			email: event.target[0].value,
			password: event.target[1].value,
			from: "form-Signin"
		}
		props.signInUser(logedUser)
	}

return (
<div className='mainContainerSignIn'>
	<div className='d-flex flex-column justify-content-center align-items-center containerSignIn' > 

		<Snack/>
		<Container/>
		<FacebookSignIn/> 

		<h4 className='mb-3'>Or SignIn using our form</h4>

		<form onSubmit={handleSubmit}>
			<div className="form-group input-group">
				<div className="input-group-prepend">
					<span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
				</div>
				<input name="email" className="form-control" placeholder="Email address" type="email" />
			</div>
			<div className="form-group input-group">
				<div className="input-group-prepend">
					<span className="input-group-text"> <i className="fa fa-lock"></i> </span>
				</div>
				<input name='password' className="form-control" placeholder="Create password" type="password" />
			</div>

			<div className="form-group">
				<button type="submit" className="btn btn-primary btn-block"> Sign In  </button>
			</div>
			<div className="text-center txtDontHave">Dont Have an account? <LinkRouter to="/signUp">SignUp</LinkRouter> </div>
		</form>
	 </div> 

		<div className='divCallTo'>
			<img src={ImgCallTo} className="imgCallTo"/>
			<h3> Hey Traveler!</h3>
			<h4> Don't you have an account yet?</h4>
		<LinkRouter to="/signUp" className="linkLogin"> SIGN UP </LinkRouter>
	</div>

</div>


	)

}

const mapDispatchToProps = {
	signInUser: userActions.signInUser,

}
const mapStateToProps = (state)=>{
	return {
		userReducer: state.userReducer.user,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);