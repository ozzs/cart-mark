import React from 'react'
import GroceryForm from './Components/CreateList/GroceryForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShoppingList from './Components/ShoppingList/ShoppingList'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GroceryForm />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
      </Routes>
    </Router>
    </>
  )
}

export default App