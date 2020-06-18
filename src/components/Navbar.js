import React,{useContext} from 'react';
import {Link} from 'react-router-dom'; 
import {AiOutlineShoppingCart} from 'react-icons/ai';
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
const Navbar = ()=>{
	const value = useContext(ProductsContext);
	console.log(value);
	const {cartCount} = value;
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
					<ul className="navbar-nav mx-auto">
						<Link to="/" className="nav-link nav-item text-warning"><FaHome /></Link>
					</ul>
					<ul className="navbar-nav ml-auto">
						<Link to="/cart" className="nav-link nav-item mr-5 text-warning">
								<AiOutlineShoppingCart /><Sup>{cartCount}</Sup>
						</Link>
					</ul>
				</div>
			</Nav>
			</React.Fragment>
	)
};

export default Navbar;