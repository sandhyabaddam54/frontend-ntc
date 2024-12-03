import React from 'react'

export default function Temp(props) {
    // const values = props.name
//     if (props.name == "John"){
//   return (<h1>John</h1>)
//     }else {
//         return(<h1>Cathy</h1>)
//     }

    return((props.name === "John") ? (<h1>John</h1>) : (<h1>Cathy</h1>))       //ternary operator
}
