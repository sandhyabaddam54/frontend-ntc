import React, { useEffect, useState } from 'react'
import "./Cart.css";
import { useContext } from 'react'
import { userContextSignUp } from './App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Cart() {
  const navigate = useNavigate();
  const {cart, setCart, products} = useContext(userContextSignUp);
  console.log("cratdet: ","is: "+products[0].price);
  const[orderVal, setOrderVal] = useState(0);

  useEffect(() => {
    setOrderVal((prev) => 
      products.reduce((total, value) => {
        return total + value.price * (cart[value._id] ?? 0);
      },0)
    );
  })
const url = "http://localhost:8080/orders";
 const handleMinus = (id, qty) => {
  setCart((prev) => ({...prev, [id]: qty - 1}))
  }
  const handlePlus = (id, qty) => {
    setCart((prev) => ({...prev, [id]: qty + 1 }))
  }
  const handleDelete = (id) => {
    setCart((prev) => ({...prev, [id]: 0}))
  }
  const handleSubmit = () => {
    // if()
      const submitorders = axios.post(url, {
        items : cart,
        total : orderVal
      })
      // if(submitorders.status == 200){
        console.log("orders added..", " "+submitorders.data);
        // alert("order added successfully. ")
      // }else {
      //   alert("oops, please try again.")
      // }
      navigate("/orders");
  }
  return (
    // <div>
    //   <h3>Product Name: {cart.name}</h3>
    //   <h3>Product Price: {cart.price}</h3>
    //   <h3>Product Quantity: {cart.quantity}</h3>
    // </div>

    <>
    <h2>Your Cart:</h2>
    <table>
      <thead>
      <tr>
        <td>Name</td>
        <td>Quantity</td>
        <td>Price</td>
        <td>Total</td>
      </tr>
      </thead>
      <tbody>
      {
        products && 
        products.map((value, index) => {
          return (
            cart[value._id] > 0 && (
              
              <tr>

                <td>{value.name}</td>{" "}
                <td>
                  <button onClick={() => handleMinus(value._id, cart[value._id])}> - </button>
                  {cart[value._id]}
                  <button onClick={() => handlePlus(value._id, cart[value._id])}> + </button>
                </td>
                <td>${value.price}</td>
                <td>${cart[value._id] * value.price}</td>
                <td>
                  <button onClick={() => handleDelete(value._id)}>Delete</button>
                </td>
              </tr>
            )
          );
        })
      }
      <tr>
        <td colSpan="3">Grand Total</td>
        <td>${orderVal}</td>
      </tr>
      </tbody>
    </table><br></br>
    <div><button onClick={handleSubmit}>Submit Order</button></div>
    </>
  );
}
