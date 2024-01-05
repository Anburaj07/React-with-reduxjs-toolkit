import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import AddProduct from './AddProduct'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/add' element={<AddProduct/>} />
        <Route path='/edit/:id' element={<AddProduct/>} />
    </Routes>
  )
}

export default AllRoutes