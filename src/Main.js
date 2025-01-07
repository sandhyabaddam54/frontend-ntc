import React, { useEffect, useState, useContext, createContext } from 'react'
import "./Main.css"
import axios from 'axios';
import { userContextSignUp } from './App';
import { useNavigate } from 'react-router-dom';

export const userContextMain = createContext();
export default function Main() {
  const navigate = useNavigate();
  const {result, cart, setCart, products, setProducts} = useContext(userContextSignUp);
  // const [products, setProducts] = useState([]);
  const [nameres, setNameRes] = useState();
  const [priceres, setPriceRes] = useState();
  // const {cart, setCart} = useContext(userContextSignUp);
  // const {selectedProduct, setSelectedProduct} = useContext(userContextSignUp);
     const [quantity, setQuantity] = useState(1);
  const url = "https://backend-ntc.onrender.com/";
  const showProducts = async () => {
      const response = await axios.get(url) 
      // console.log("resp: "," "+response.data[0].name+" "+response.data[0].price);
      setProducts(response.data);
  }
  useEffect(() => {
      showProducts();
  },[])
console.log("getname: ","is: "+result);
  // const products = [ 
  //   { name: "Product 1", price: 20},
  //   { name: "Product 2", price: 30},
  //   { name: "Product 3", price: 40}
  // ]
  // const handleAddCart = (proName,proPrice) => {
    const handleAddCart = (id, proQuantity) => {

    // setNameRes(proName)
    // setPriceRes(proPrice)


    // if(id){
    // setCart({id: id, name: proName, price: proPrice, quantity: quantity})
    // setCart({id: id, name: proName, price: proPrice, quantity: quantity})

    // }else{
    //   alert("there is no product with that id")
    // }


    setCart((prev) => ({...prev, [id]: proQuantity}))    //spread operator
    console.log("products.,","" +"coming.."+ cart);
    setQuantity(1);

    // setCart(proPrice)
    // navigate("/Cart");
  }
  return (
    <div className='row'>
      <div className='name-container'>
      <h3>{result}</h3>
      {/*<h3>{quantity}</h3>*/}
      </div>
      <div className='products-container'>
    
      {
        products && products.map((value, index) => (
          // <userContextMain.Provider value={{nameres, priceres}} >
            
          <div key={index} className='box'>
            <h3>{value.name}</h3>
            <h4> ${value.price}</h4>
            <div className='quanity-container'>
            <select defaultValue="" onChange={(e) => setQuantity(e.target.value)}>
              {/* <option value="" disabled>Select Quantity</option> */}
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        </div>
            {/* <button onClick={() => handleAddCart(value.name, value.price)}>Add to Cart</button> */}
            {/* <button onClick={() => handleAddCart(value._id, value.name, value.price)}>Add to Cart</button> */}
            <button onClick={() => handleAddCart(value._id, quantity)}>Add to Cart</button>

            </div>
            // </userContextMain.Provider>
        ))
    }
    </div>
    </div>
  );
}
