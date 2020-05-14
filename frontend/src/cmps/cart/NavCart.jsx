import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartModal from './CartModal.jsx';

export default class NavCart extends Component {

    renderQuantity() {
        return this.props.bag.reduce((acc, item) => acc + item.quantity, 0)
    }

    render() {
        const { bag, deleteItem, changeQuantity } = this.props;
        return (

            <div className='link-container'>
                <div className='nav-cart'>
                    <Link to="/checkout"> <i className="fas fa-shopping-cart"></i></Link>
                    <span className='cart-quantity'> {this.renderQuantity()} </span>
                    <CartModal bag={bag} deleteItem={deleteItem} changeQuantity={changeQuantity} />
                </div>
            </div >

        )
    }
}
