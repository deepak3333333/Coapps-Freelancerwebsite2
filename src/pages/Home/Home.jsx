import React from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import Categories from '../../components/Categories/Categories'
import CategoriesDisplay from '../../components/CategoriesDisplay/CategoriesDisplay'

const Home = () => {
  return (
    <div>
      <Header/>
      <Categories/>
      <CategoriesDisplay Category={Categories}/>

      
    </div>
  )
}

export default Home;
