import React,{useContext} from 'react';
import {AiFillDelete} from 'react-icons/ai';

// local
import {ProductsContext} from '../context/context';

const ClearCart = ()=>{
	const value = useContext(ProductsContext);
	const {clearCart} = value;
	return (
		<div className="row">
			<div className="col-md-4"></div>
			<div className="col-md-4 text-center mt-3">
				<button className="btn btn-md btn-danger text-white" 
				onClick={()=>{clearCart()}}><AiFillDelete /> CLEAR CART</button>
			</div>
			<div className="col-md-4"></div>
		</div>
	)
};

export default ClearCart;