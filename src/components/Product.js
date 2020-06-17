import React,{useContext} from 'react';
import {FaCartPlus} from 'react-icons/fa';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

// local
import {ProductsContext} from './context/context';
import Modal from './Modal';

const Div = styled.div`
	position : relative;
	border-color : #420420;
	overflow : hidden;

	&:hover button{
		transform : translate(0,0);
	}
`
const Img = styled.img`
	&:hover{
		transform :scale(1.2);
		transition : 0.8s linear;
	}
`
const Button = styled.button`
	position : absolute;
	right : 0;
	bottom: 0;
	transform : translate(100%,100%);
	transition : 0.5s ease-in;
`
const Product =({product})=>{
	const context = useContext(ProductsContext);
	const {handleDetail,addToCart} = context;
	// console.log(product);
	const {id,title,img,price,inCart} = product;
	let cartBtn = inCart === true ? <small>added to cart</small> : (<FaCartPlus />) ;
	return (
		<React.Fragment>
			<Div className="card text-center m-2 products-section" data-toggle="tooltip"
				data-placement="right" title="click for more">
				<div className="card-body" onClick={()=>{handleDetail(id)}}>
					<Link to="/details" className="text-dark">
						<Img src={img} className="img-fluid"/>
						<p>{title}</p>
						<p><b>Ksh{price}</b></p>
					</Link>	
					<div>
					<Button className="btn btn-sm btn-warning text-white" data-toggle="modal" 
					data-target="#productModal" onClick={()=>{addToCart(id)}}
					disabled={inCart ? true : false}>
						{cartBtn}
					</Button>
					<Modal />
					</div>
				</div>
			</Div>
		</React.Fragment>
	)
};

export default Product;