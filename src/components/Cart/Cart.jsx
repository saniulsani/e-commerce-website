import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    console.log(props);
    const {cart} =props;
    
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h4 className='product-name'>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shopping Charge:</p>
            <p>Tax:</p>
            <h3>Grand Total:</h3>
        </div>
    );
};

export default Cart;