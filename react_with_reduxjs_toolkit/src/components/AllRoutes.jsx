import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'
import Products from './Products'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/add' element={<AddProduct/>} />
        <Route path='/edit/:id' element={<AddProduct/>} />
    </Routes>
  )
}

export default AllRoutes