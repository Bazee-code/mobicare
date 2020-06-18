import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
	color : #420420;
`
const CartHeader = ()=>{
	return (
		<div className="d-none d-lg-block">
			<Div className="row text-center mt-4">
				<div className="col-lg-2">PRODUCT</div>
				<div className="col-lg-2">NAME OF PRODUCT</div>
				<div className="col-lg-2">PRICE</div>
				<div className="col-lg-2">QUANTITY</div>
				<div className="col-lg-2">REMOVE</div>
				<div className="col-lg-2">TOTAL</div>
			</Div>
		</div>
	)
};

export default CartHeader;