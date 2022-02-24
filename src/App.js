import React from 'react'
import GroceryForm from './Components/GroceryForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShoppingList from './Components/ShoppingList'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<GroceryForm />} />
        <Route path="/shoppinglist" element={<ShoppingList />} />
      </Routes>
    </Router>
    </>
  )
}

export default App