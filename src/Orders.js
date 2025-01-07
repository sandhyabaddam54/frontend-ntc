import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Orders() {
  const url = "http://localhost:8080/getOrders";
  const [orders, setOrders] = useState();
  const [cart, setCart] = useState(); 
  useEffect(() => {
    showOrders();
  },[])
  const showOrders = async () => {
    const response = await axios.get(url)
          setOrders(response.data);
          console.log("getorders:","are: "+response.data);
          setCart(response.data.items)
  }

  const handlePlus = (id, qty) => {
    setCart((prev) => ({...prev, [id]: qty + 1 }))
  }
  const handleMinus = (id, qty) => {
    setCart((prev) => ({...prev, [id]: qty - 1}))
    }
  return (
    <div>
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
        orders && 
        orders.map((value, index) => {
          return (
            value._id > 0 && (
              
              <tr>

                <td>{value.name}</td>{" "}
                <td>
                  <button onClick={() => handleMinus(value._id, cart[value._id])}> - </button>
                  {value._id}
                  <button onClick={() => handlePlus(value._id, cart[value._id])}> + </button>
                </td>
                <td>${value.total}</td>
                <td>${value._id * value.price}</td>
                
              </tr>
            )
          );
        })
      }
      <tr>
        <td colSpan="3">Grand Total</td>
        {/* <td>${orders.total}</td> */}
      </tr>
      </tbody>
    </table><br></br>
    </div>
  )
}
