import React, { useContext } from 'react'
import './CategoriesDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { category_list } from '../../assets/assets'
import CategoriesItem from '../CategoriesItem/CategoriesItem'

const CategoriesDisplay = (categories) => {

    const { Categories_list } = useContext(StoreContext)

    return (
        <div>
            <div className="categories-display" id="categories-display">
                <h1> Top categories near to you::::</h1>
                <div className="categories-display-list">
                    {category_list.map((item, index) => {
                        if(item.category==="All" || item.category===item.category){
                            return <CategoriesItem key={item} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} empname={item.empname}/>

                        }
                           



})}

                </div>



            </div>

        </div>
    )
}

export default CategoriesDisplay
