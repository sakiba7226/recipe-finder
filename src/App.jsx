import React from 'react'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import RecipeDetails from './pages/RecipeDetails'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/recipe/:id" element={<RecipeDetails />} />

      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default App