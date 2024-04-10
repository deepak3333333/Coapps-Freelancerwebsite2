import React from 'react'
import './CategoriesItem.css'
import { assets } from '../../assets/assets'


const CategoriesItem = ({id,name,price,description,image,empname}) => {
  return (
    <div className='categories-item'>
        
        
       
            <img className='categories-item-image' src={image} alt="" />


        
        <div className="categories-item-info">
        <h1>{empname}</h1>
            <div className="categories-item-name-rating">
                
                <p>{name}</p>
                <img src={assets.rating_starts}alt="" />
            </div>
            <p className="categories-item-desc">{description}</p>
            <p className="categories-item-price">Rs{price}</p>
        </div>


      
    </div>
  )
}

export default CategoriesItem
