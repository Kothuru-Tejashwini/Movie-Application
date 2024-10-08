import React from 'react'
import Trendingmovies from './components/Trendingmovies'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Particularmovie from './components/Particularmovie'
import "./components/Style.css"
import Errorpage from './components/Errorpage'

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Trendingmovies/>}/>
        <Route path='/partmovie' element={<Particularmovie/>}/>
        <Route path='*'element={<Errorpage></Errorpage>}/>
      </Routes>
      </BrowserRouter>
  )
}
export default App