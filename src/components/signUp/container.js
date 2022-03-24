import React from "react";
 import SignUp from "./signup";
import SignIn from "./signin"; 
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import userActions from '../../redux/actionsCreators/userActions';
import Snackbar from "../Snackbar"
import "../../styles/container.css"


function Container(props) {
	
	function SignOut() {
		props.SignOutUser(props.user.email)
		console.log(props.user)
	}
	
	return (
	<>
		{props.user ? <><h3 className="txtContainer">User connected: {props.user.fullName.toUpperCase()} from  {props.user.from[0]}  </h3>
			<div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
				<button onClick={SignOut} className="btn btn-primary btn-block" style={{ maxWidth: 400 }}> Sign Out  </button>
			</div>
		</>
			: <h2 className="txtContainer">Not user connected</h2>}
		<div className="containerCaja">
			<article className="card-body mx-auto" > {/* style={{ maxWidth: 400 }} */}
				<h4 className="card-title mt-3 text-center">User Account</h4>
				<p className="text-center">Get started with your free account</p>
				<p className="divider-text">
					<span className="bg-light">OR</span>
				</p>
				 {/* <BrowserRouter>
					<Routes>
						{!props.user &&<Route path="/" element={<SignIn />} />}
						{!props.user &&<Route path="/signup" element={<SignUp />} />}
					</Routes>
				</BrowserRouter>  */}
			</article>
		</div>
		<Snackbar /> 
	</>
)

}
const mapStateToProps = (state) => {
	return {
		user: state.userReducer.user, 
	}
}
const mapDispatchToProps = {
	SignOutUser: userActions.SignOutUser,

}

export default connect(mapStateToProps, mapDispatchToProps)(Container) 