import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import PageNotFound from './pages/404.jsx'
import ShowSomething from './pages/ShowSomething.jsx'

export default function App() {
  return (
  <Routes>

<Route path="/" element={<Home bg_color={'red'}>
<span>Joshua</span>


</Home>}/> 
<Route path="/about" element={<About>About</About>}/> 
<Route path="/about/:id/:username" element={<ShowSomething></ShowSomething>}></Route>
<Route path="/*" element={<PageNotFound/>}></Route>
  </Routes>
  )
}
