import React from 'react';
import {AiFillDelete} from 'react-icons/ai';
import {FiMinusCircle,FiPlusCircle} from 'react-icons/fi';
import {FaCircle} from 'react-icons/fa';
import styled from 'styled-components';

// local
import {ProductsContext} from '../context/context';

const Button = styled.button`
	background-color : #420420;
	color : #fff;

	&:hover{
		background-color : #f0ad4e;
		color : #420420;
	}
`

class CartItems extends React.Component {
	static contextType = ProductsContext;
	render() {
		const {item:{img,title,price,id,count,total}} = this.props;
		// console.log(id);
		const value = this.context;
		console.log(value);
		const {removeFromCart,increment,decrement} = value;

		return (
			<div className="row text-center mt-3 mx-auto">
			<div className="col-lg-2">
				<img src={img} className="img-fluid" />
			</div>
			<div className="col-lg-2 mt-3"><p className="text-muted">{title}</p></div>
			<div className="col-lg-2 mt-3"><p className="text-muted">Ksh {price}</p></div>
			<div className="col-lg-2">
				<Button className="btn btn-sm m-3" onClick={()=>{decrement(id)}}><FiMinusCircle /></Button>
				<Button className="btn btn-sm m-3">{count}</Button>
				<Button className="btn btn-sm m-3" onClick={()=>{increment(id)}}><FiPlusCircle /></Button>
			</div>
			<div className="col-lg-2 mt-3">
			<Button className="btn btn-sm" onClick={()=>{removeFromCart(id)}}>
				<AiFillDelete />
			</Button>
			</div>
			<div className="col-lg-2 mt-3"><b>Ksh {total}</b></div>
		</div>
		)
	}
}

export default CartItems;