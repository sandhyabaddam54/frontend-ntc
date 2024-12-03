import React from 'react'
import "./Main.css"

export default function Main() {
  const products = [ 
    { name: "Product 1", price: 20},
    { name: "Product 2", price: 30},
    { name: "Product 3", price: 40}
  ]
  return (
    <div className='row'>
      {
        products.map((value, index) => (
          <div key={index} className='box'>
            <h3>{value.name}</h3>
            <h4> ${value.price}</h4>
            <button>Add to Cart</button>
            </div>
        ))
    }
    </div>
  )
}
