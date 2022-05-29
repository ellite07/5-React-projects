import React, { useState } from 'react';
import './style.css';
import Menu from "./menuApi.js"   //data in form of Array of Object
import MenuCard from "./MenuCard"  // component in  Jsx.element(HTML)


const Restaurent = () => {
    const [menuData, setMenuData] = useState(Menu);
    // console.log(menuData)  
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item'>Breakfast</button>
            <button className='btn-group__item'>Lunch</button>
            <button className='btn-group__item'>Evening</button>
            <button className='btn-group__item'>Dinner</button>
            <button className='btn-group__item'>All</button>
        </div>
    </nav>


    {/* passing ata from one(Parent) to another (Children) Componenet */}
    {/* You can give any name here sendData */}
    <MenuCard sendData={menuData}/>
    </>
  )
}

export default Restaurent