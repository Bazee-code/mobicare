import React,{useContext} from 'react';
import {Link} from 'react-router-dom'; 
import {AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai';
import {FaHome} from 'react-icons/fa';
import styled,{keyframes} from 'styled-components';
import {bounce} from 'react-animations';

// local
import {ProductsContext} from './context/context';

const Nav = styled.nav`
	background-color : #420420;
	font-size : 25px;

	&hover:{
		background-color : #ffff00;
	}
`
const Sup = styled.sup`
	color : #000;
	background : #ffff00;
	border-radius : 10px 10px 10px 10px;
	animation : 3s ${keyframes`${bounce}`} infinite;
`
const B = styled.b`
	color : #ffff00;
`
const config = {
	color : "#fff"
};

const Navbar = ({authenticated,handleLogout})=>{
	const value = useContext(ProductsContext);
	// console.log(value);
	const {cartCount,handleChange,userInput} = value;
	// const {authenticated} = authenticated;
	console.log(authenticated);

	return (
		<React.Fragment>
			<Nav className="navbar navbar-expand-md py-2 navbar-dark ">
				{/*logo*/}
				<Link to ="/" className="navbar-brand"><span className="text-warning">mobi</span><B>Care</B></Link>

				{/*collapsible btn*/}
				<button className="navbar-toggler" data-toggle="collapse" data-target="#navBarNav">
					<span className="navbar-toggler-icon"></span>
				</button>

				{/*links*/}
				<div className="collapse navbar-collapse" id="navBarNav">

					{authenticated === true ? (
						<React.Fragment>
							<ul className="navbar-nav mx-auto">
								<form className="form-inline ml-5">
								<input type="text" className="form-control form-control-md" name="product" placeholder="search product" id="product" value={userInput}
								onChange = {handleChange} />
								<button type="submit" className="btn btn-lg" data-toggle="tooltip" data-placement="right" title = "click to search" ><AiOutlineSearch {...config} /></button>
							</form>
								<Link to="/" className="nav-link nav-item text-warning"><FaHome /></Link>
							</ul>
							<ul className="navbar-nav ml-auto">
								<Link to="/cart" className="nav-link nav-item mr-5 text-warning">
										<AiOutlineShoppingCart /><Sup>{cartCount}</Sup>
								</Link>
								<Link to="/login" className="nav-link nav-item" onClick={handleLogout}>logout</Link>
							</ul>
						</React.Fragment>
						) : (
						<React.Fragment>
							<ul className="navbar-nav mx-auto">
								<form className="form-inline ml-5">
								<input type="text" className="form-control form-control-md" name="product" placeholder="search product" id="product" value={userInput}
								onChange = {handleChange} />
								<button type="submit" className="btn btn-lg" data-toggle="tooltip" data-placement="right" title = "click to search" ><AiOutlineSearch {...config} /></button>
							</form>
						</ul>
						<ul className="navbar-nav ml-auto">
							<Link to="/cart" className="nav-link nav-item mr-5 text-warning">
									<AiOutlineShoppingCart /><Sup>{cartCount}</Sup>
							</Link>
							<Link to="/login" className=" nav-link nav-item text-warning">login</Link>
							<Link to="/signup" className=" nav-link nav-item text-warning">signup</Link>
						</ul>
					</React.Fragment>
						) }
						
				</div>
			</Nav>
			</React.Fragment>
	)
};

export default Navbar;