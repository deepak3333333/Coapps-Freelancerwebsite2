import React from 'react'
import './Categories.css'

import { menu_list } from '../../assets/assets'

const Categories = () => {
  return (
    <div className='explore-categories' id ='explre-categories'>
        <h1>Get Work  Done in Different Categories</h1>
        <p className='explore-categories-text'>Select the categories , that you wanna to choose</p>
        <div className="explore-categories-list">
            {menu_list.map((item,index)=>{
              return (
                <div  key={index}className='explore-menu-list-item'>
                  <img src={item.menu_image} alt="" />
                  <p>{item.menu_name}</p>
                  
                   
                  </div>
              )

            })}
           


        </div>
        <hr/>

      
    </div>
  )
}

export default Categories
