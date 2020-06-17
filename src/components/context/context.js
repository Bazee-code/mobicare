import React from 'react';

// local
import {storeProducts,detailProduct} from './data.js';

// create our context
const ProductsContext = React.createContext();

class ProductsProvider extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			products : storeProducts,
			detailProduct : detailProduct,
			cart : [],
			cartSubTotal : 0,
			cartTotal : 0,
			cartTax : 0,
			cartCount : 0
		};
	};

	componentDidMount(){
		this.setProducts();	
	};

	// we want to pass our products as references to our array
	setProducts = ()=>{
		let tempProducts = [];

		storeProducts.forEach(item=>{
			let singleItem = {...item};
			tempProducts = [...tempProducts,singleItem];
		})

		this.setState(()=>{
			return {products : tempProducts}
		})
	};

	// we now create a func that will differentiate our products
	getItem =(id)=>{
		const product = this.state.products.find(item=>item.id === id);
		return product;
	};

	// function to make the product details page dynamic
	handleDetail=(id)=>{	
		const product = this.getItem(id);

		this.setState({
			detailProduct : product			
		});
	};

	// CART METHODS
	addToCart =(id)=>{
		// we will work with the indexes of our products since indexes allow us to change properties
		// of our products such as amount in the cart

		// we find the product we've chosen using id,find its index in the products array
		const product = this.getItem(id);
		// console.log(product);
		let tempProducts = [...this.state.products];
		let index = tempProducts.indexOf(product);
		// console.log(index);
		let item = tempProducts[index];
		// console.log(item);

		item.inCart = true;
		item.count = 1;
		item.total = item.price;

		this.setState(()=>{
			return {
				products : tempProducts,
				cart  : [...this.state.cart,item]
			}
		},()=>{
			this.addTotals();
			// this.addCount();
		});

	};
		
	 // delete from cart btn
	 removeFromCart = (id) =>{
		 	let tempProducts = [...this.state.products];
		 	let product = this.getItem(id);
		 	let tempCart = [...this.state.cart];
		 	tempCart = tempCart.filter(item=>item.id !== id);

		 	let index = tempProducts.indexOf(product);
		 	console.log(index);
		 	let removedItem = tempProducts[index];

		 	// return the original properties
		 	removedItem.inCart = false;
		 	removedItem.count = 0;
		 	removedItem.price = 0;

		 	this.setState(()=>{
		 		return { cart : [...tempCart] ,
		 						products : [...tempProducts]}
		 	},()=>{
		 		this.addTotals();
		 		// this.addCount();
		 	})

	 	};

	 	// increment method
	increment = (id)=>{
		let tempCart = [...this.state.cart];
		let cartItem = tempCart.find(item=>item.id === id);

		let index = tempCart.indexOf(cartItem);
		let item = tempCart[index];

		item.count += 1;
		item.total = item.price * item.count;

		this.setState(()=>{
			return {cart : [...tempCart]};
		},()=>{
			this.addTotals();
			// this.cartCount();
		}) 

	};

	decrement =(id)=>{
		let tempCart = [...this.state.cart];
		let cartItem = tempCart.find(item=>item.id === id);

		let index = tempCart.indexOf(cartItem);
		let item = tempCart[index];

		if(item.count > 0){
			item.count -= 1;
			item.total = item.price * item.count;
		};

		this.setState(()=>{
				return {cart : [...tempCart]}
				},()=>{
					this.addTotals();
				});

	};

	addTotals = () =>{
		let subTotal = 0;
		let taxRate = 0.5;
		let tempCart = [...this.state.cart];
		tempCart.map(item=>subTotal += item.total); 

		let taxedSubTotal = subTotal * taxRate;
		let tax = parseFloat(taxedSubTotal.toFixed(2));
	
		let total = subTotal + taxedSubTotal;

		this.setState({
			cartTotal : total,
			cartTax : taxedSubTotal,
			cartSubTotal : subTotal
		});  
	};

	clearCart =()=>{
		this.setState({
			cart : []
		},()=>{
			this.addTotals();
		})
	};

	// addCount = ()=>{
	// 	let tempCount = 0;
	// 	let tempCart = [...this.state.cart];
	// 	tempCart.map(item=>tempCount += item.count);

	// 	this.setState({
	// 		cartCount : tempCount
	// 	})
	// };

	render() {
	
		return (
			<ProductsContext.Provider value={{
				...this.state,
				handleDetail : this.handleDetail,
				addToCart : this.addToCart,
				removeFromCart : this.removeFromCart,
				increment : this.increment,
				decrement : this.decrement,
				addTotals : this.addTotals,
				clearCart : this.clearCart,
				addCount : this.addCount
			}}>
				{this.props.children}
			</ProductsContext.Provider>
		)
	}
}

// consumer
const ProductsConsumer = ProductsContext.Consumer;

export  {ProductsProvider,ProductsConsumer,ProductsContext};