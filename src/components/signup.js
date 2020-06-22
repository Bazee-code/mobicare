import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios'; 

let proxy = `https://cors-anywhere.herokuapp.com/`;
let url = `${proxy}https://us-central1-mobicare-d50ee.cloudfunctions.net/api`;

const Button = styled.button`
	background : #420420;
	border : 2px solid #ffff00;
	color : #fff;

	&:hover{
		background : #ffff00;
		color : #000;
		border : 2px solid #420420;
	}
`
const Div = styled.div `
	border : 2px solid #420420;
	margin-top : 40px;
`
const P = styled.p`
	font-size : 25px;
	margin-top : 40px;
`

class Signup extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email : "",
			password : "",
			confirmPassword : "",
			handle : "",
			loading : true,
			errors : {}
		};
	};

	handleChange = (e) =>{
		this.setState({
			[e.target.name] : e.target.value
		})
	};

	handleSubmit = (e) =>{
		e.preventDefault();

		const newUser = {
			email : this.state.email,
			password : this.state.password,
			confirmPassword : this.state.confirmPassword,
			handle : this.state.handle
		};

		axios.post(url+"/signup",newUser)
		.then((res)=>{
			console.log(res.data);
			// save our token inside local storage
			localStorage.setItem(`FBIdToken`,`Bearer ${res.data.token}`);
			
			this.setState({
				loading : false
			});
			// redirect user to login page
			this.props.history.push("/login");
		})
		.catch((e)=>{
			console.log(e);
			// this.setState({
			// 	loading : false,
			// 	errors : e.response.data
			// })
		})
	};

	render() {
		
		const {email,password,confirmPassword,handle} = this.state;
		return (
			<div>
				<div className="row">
				<div className="col-sm-3 col-md-4"></div>
				<div className="col-sm-6 col-md-4 ">
				<P className="text-center">mobi<b>Care</b></P>
				<Div className="card">
					<div className="card-body">
						<form>
						<label htmlFor="text">handle</label>
						<input className="form-control" onChange={this.handleChange} type="handle" id="handle" name="handle" 
							value={handle}/>
						<label htmlFor="email">email</label>
						<input className="form-control" onChange={this.handleChange} type="email" id="email" name="email" value={email}/>
						<label htmlFor="password">password</label>
						<input className="form-control" onChange={this.handleChange} type="password" id="password" name="password" value={password} />
						<label htmlFor="password">confirm password</label>
						<input className="form-control" onChange={this.handleChange} type="password" id="confirmPassword" 
						value={confirmPassword} name="confirmPassword" />
						<div className="text-center mt-3">
							<Button className="btn btn-md" type="submit" onClick={this.handleSubmit}>signup</Button>
						</div>
					</form>
					</div>
				</Div>
				<p className="text-center mt-2"><small>Already have an account ? login <Link to="/login">here</Link></small></p>
				</div>
				<div className="col-sm-3 col-md-4"></div>
			</div>
			</div>
		)
	}
}

export default Signup;