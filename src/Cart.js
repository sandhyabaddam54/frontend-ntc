import React from 'react'
import { useContext } from 'react'
import { userContextSignUp } from './App';
export default function Cart() {
  const {cart, setCart} = useContext(userContextSignUp);
  console.log("cratdet: ","is: "+cart);
  return (
    <div>
      <h3>Product Name: {cart.name}</h3>
      <h3>Product Price: {cart.price}</h3>
      <h3>Product Quantity: {cart.quantity}</h3>

    </div>
  )
}
