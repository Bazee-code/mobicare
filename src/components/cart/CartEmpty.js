import React from 'react';
import {Link} from 'react-router-dom';
import {FaArrowAltCircleLeft} from 'react-icons/fa';
import styled from 'styled-components';

const P = styled.p`
	font-size : 30px
`

const CartEmpty = () =>{
	return (
		<div className="row">
			<div className="col-md-3"></div>
			<div className="col-md-6 text-center mt-5">
				<P><b>YOUR CART IS EMPTY !!</b></P>
				<button className ="btn btn-md mt-5 btn-warning">
					<Link to="/" className="text-white"><FaArrowAltCircleLeft /> choose a product</Link>
				</button>
			</div>
			<div className="col-md-3"></div>
		</div>
	)
};

export default CartEmpty;