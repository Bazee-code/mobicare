import React ,{useContext} from 'react';
import {ProductsContext} from '../context/context';

const CartTotals = ()=>{
	const value = useContext(ProductsContext)
	console.log(value);
	const {cartTax,cartSubTotal,cartTotal} = value;
	return (
			<div className="row text-center mt-4">
				<div className="col-lg-2"></div>
				<div className="col-lg-2"></div>
				<div className="col-lg-2"></div>
				<div className="col-lg-2"></div>
				<div className="col-lg-2"></div>
				<div className="col-lg-2">
					<div className="card">
						<div className="card-body bg-warning text-dark">
							<p>SUBTOTAL : Ksh {cartSubTotal} </p>
							<p>TAX : Ksh {cartTax} </p>
							<p><b>TOTAL : Ksh {cartTotal}</b></p>
						</div>
					</div>
				</div>
			</div>
	)
};

export default CartTotals;