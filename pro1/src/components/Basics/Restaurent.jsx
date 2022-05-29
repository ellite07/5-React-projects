import React, { useState } from 'react'
import './style.css';
import Menu from "./menuApi.js"

const Restaurent = () => {
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData)  
    const myCss = {color:"brown "}
  return (
    <>
    <div className='card-container'>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle' style={myCss}>1</span>
                <span className='card-author  subtle' style={{color:"red "}}>Break Fast</span>
                <h2 className='card-title'>Maggie</h2>
                <span className='card-describe subtle'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quod ea a recusandae nesciunt, enim harum suscipit omnis facilis est.
                </span>
                <div className='card-read'> Read Me </div>
            </div>
            {/* <img src={image} alt="images" className='card-media'/> */}
            <span className='card-tag subtle'>Order Now</span>
        </div>
    </div>
    </>
  )
}

export default Restaurent