import React from 'react';

// local
import {ProductsConsumer} from './context/context';
import Product from './Product';

class Products extends React.Component {
	render() {
		return (
			<div className="row">
				<ProductsConsumer>
					{(value)=>{
						const {products} = value;
						// console.log(products);
						return (
							products.length !== 0 ? (
							products.map((product)=>
								<div className="col-sm-4 col-md-3" key={product.id}>
									<Product product={product}/>
								</div>
								)
							) :(<p>Loading...</p>)
						)
					}}
				</ProductsConsumer>
			</div>
		)
	}
}

export default Products;