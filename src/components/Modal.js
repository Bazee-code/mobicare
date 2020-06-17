import React from 'react';
import {ProductsContext} from './context/context';
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';

class Modal extends React.Component {
	static contextType = ProductsContext;
	render() {
		let value = this.context;
		// console.log(value);
		const {detailProduct :{title,img,price}} = value;
	
		return (
			<div className="modal fade" id="productModal">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content text-center">
			      <div className="modal-header">
			        <h5 className="modal-title" id="exampleModalLabel">Item added to cart</h5>
			      </div>
			      <div className="modal-body ">
			    		<img src={img} className="img-fluid"/>
			    		<p>{title}</p>
			    		<p><b>Ksh {price}</b></p>
			    		<button className="btn btn-md mr-2 btn-warning text-white" data-dismiss="modal"><FaArrowAltCircleLeft /> continue shopping</button>
			      </div>
			    </div>
			  </div>
			</div>
			)
	}
}

export default Modal;