import React from 'react';
import {FaArrowAltCircleLeft,FaCartPlus} from 'react-icons/fa';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// local
import {ProductsContext} from './context/context';

const Button = styled.button`
	background-color :#420420;
	color : #fff;

	&:hover{
		color : yellow;
	}
`
class ProductDetails extends React.Component {
	static contextType = ProductsContext;
	render() {
		let value = this.context;
		console.log(value);
		const {detailProduct:{img,title,info,price,inCart,id},addToCart} = value;
		return (
			<div className="row mx-auto">
				<div className="col-md-2"></div>
				<div className="col-md-3 mt-5 text-center">
					<img src={img} className="img-fluid" alt="product"/>
				</div>
				<div className="col-md-5 mt-5 text-center">
					<p><b><u>{title}</u></b></p>
					<p className="text-muted">{info}</p>
					<p><b>Price : Ksh{price}</b></p>
					<div className="mt-5">
						<Link to="/">
							<Button className="btn btn-md mr-3"><FaArrowAltCircleLeft /> go back</Button>
						</Link>
						<Link to="/cart">	
							<Button className="btn btn-md ml-3" disabled={inCart ? true : false} onClick={()=>addToCart(id)}>
								{inCart === true ? <small>added to cart</small> : <small><FaCartPlus /> add to cart</small>}
							</Button>
						</Link>
					</div>
				</div>
				<div className="col-md-2"></div>
			</div>
		)
	}
}

export default ProductDetails;