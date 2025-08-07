import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  )
}