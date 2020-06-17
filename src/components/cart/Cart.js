import React from 'react';

// local
import {ProductsContext} from '../context/context';
import CartItems from './CartItems';
import CartEmpty from './CartEmpty';
import ClearCart from './ClearCart';
import CartTotals from './CartTotals';
import CartHeader from './CartHeader';

class Cart extends React.Component {
	static contextType = ProductsContext;
	render() {
		const value = this.context;
		const {cart} = value;
		// console.log(cart);

		const cartItemsMarkup = cart.length !== 0 ? (
			cart.map(item=>{
				return (
					<React.Fragment key={item.id}>
						<CartItems item={item} />
					</React.Fragment>
					)
			})
			) : (
			<CartEmpty />
			) ;
		const cartHeaderMarkup = cart.length !== 0 ? (<CartHeader />) : (null);
		const clearCartMarkup = cart.length !==0 ? (<ClearCart />) : (null);
		const cartTotalsMarkup = cart.length !== 0 ? (<CartTotals />) : (null);
		return (
			<div>
				{cartHeaderMarkup}
				{cartItemsMarkup}
				{clearCartMarkup}
				{cartTotalsMarkup}
			</div>
		)
	}
}

export default Cart;