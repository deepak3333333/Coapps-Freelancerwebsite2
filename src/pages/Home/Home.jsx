import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Categories from '../../components/Categories/Categories'
import CategoriesDisplay from '../../components/CategoriesDisplay/CategoriesDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  return (
    <div>
      <Header/>
      <Categories/>
      <CategoriesDisplay Category={Categories}/>
      <AppDownload/>

      
    </div>
  )
}

export default Home;
