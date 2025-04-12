import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './Component/Signin'
import Signup from './Component/Signup'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Weather from './Component/Weather'
import Soildata from './Component/Soildata'
import Mandi from './Component/Mandi'
import Diseases from './Component/Diseases'
import DeactDiseases from './Component/DeactDiseases'
import GovernmentSchemes from './Component/Govementscheme'
import News from './Component/News'

function App() {
  return (
    <>
        <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/weather' element={<Weather/>}/>
    <Route path='/soil' element={<Soildata/>}/>
    <Route path='/mandi' element={<Mandi/>}/>
    <Route path='/deasese' element={<Diseases/>}/>
    <Route path='/deactdiseases' element={<DeactDiseases/>}/>
    <Route path='/govschema' element={<GovernmentSchemes/>}/>
    <Route path='/news' element={<News/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
