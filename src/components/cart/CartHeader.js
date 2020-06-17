import React from 'react';

const CartHeader = ()=>{
	return (
		<div className="d-none d-lg-block">
			<div className="row text-center mt-4">
				<div className="col-lg-2">PRODUCT</div>
				<div className="col-lg-2">NAME OF PRODUCT</div>
				<div className="col-lg-2">PRICE</div>
				<div className="col-lg-2">QUANTITY</div>
				<div className="col-lg-2">REMOVE</div>
				<div className="col-lg-2">TOTAL</div>
			</div>
		</div>
	)
};

export default CartHeader;