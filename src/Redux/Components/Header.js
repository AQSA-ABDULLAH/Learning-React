import React from 'react'
import cart from './Images/cart.png';
function Header(props) {
    console.warn(props.data)
    return (
        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <div className='add-to-cart'>
                    <img src={cart} />
                </div>
            </div>
        </div>
    )
}

export default Header