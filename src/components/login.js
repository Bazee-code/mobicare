import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

let proxy = `https://cors-anywhere.herokuapp.com/`;
let url = `${proxy}https://us-central1-mobicare-d50ee.cloudfunctions.net/api` 

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

class Login extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email : "",
			password : "",
			errors : {},
			loading : true
		};
	}

	handleChange = (e)=>{
		this.setState({
			[e.target.name] : e.target.value
		});
	};

	handleSubmit = (e) =>{
		e.preventDefault();

		const userData = {
			email : this.state.email,
			password : this.state.password
		};

		axios.post(url+"/login",userData)
		.then((res)=>{
			console.log(res.data);

			// get user token in local storage
			localStorage.setItem(`FBIdToken`,`Bearer ${res.data.token}`);

			this.setState({
				loading : false
			})
			// redirect user to home page
			this.props.history.push("/");
			window.location.reload();
		})
		.catch((e)=>{
			console.log(e);

		})
	};

	render() {
		const {email,password} = this.state;
		return (
			<div>
				<div className="row">
				<div className="col-sm-3 col-md-4"></div>
				<div className="col-sm-6 col-md-4 ">
				<P className="text-center">mobi<b>Care</b></P>
				<Div className="card">
					<div className="card-body">
						<form>
						<label htmlFor="email">email</label>
						<input className="form-control" value={email} onChange={this.handleChange} 
						type="email" id="email" name="email" />
						<label htmlFor="password">password</label>
						<input className="form-control" value={password} onChange={this.handleChange} 
						type="password" id="password" name="password" />
						<div className="text-center mt-3">
							<Button className="btn btn-md" onClick={this.handleSubmit}>login</Button>
						</div>
					</form>
					</div>
				</Div>
				<p className="text-center mt-2"><small>Don't have an account yet ? signup <Link to="/signup">here</Link></small></p>
				</div>
				<div className="col-sm-3 col-md-4"></div>
			</div>
			</div>
		)
	}
}

export default Login;