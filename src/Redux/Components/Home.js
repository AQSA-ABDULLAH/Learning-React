import React from 'react'
import apple from './Images/apple.jpg';
import cart from './Images/cart.png';
export default function Home(props) {
    console.log("home", props);
    return (
        <div>
            <div className='add-to-cart'>
                <img src={cart} />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={apple} />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={() =>
                        props.addToCartHandler({price:1000, name: 'i phone 11'})
                    } >Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
