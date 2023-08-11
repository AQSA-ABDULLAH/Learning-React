import React from 'react'
import apple from './Images/apple.jpg';
export default function Home() {
  return (
    <div>
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
                    <button>Add To Cart</button>
                </div>
            </div>
    </div>
  )
}
