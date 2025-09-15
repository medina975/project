import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import Rare from './pages/Rare'
import MainLayout from './layouts/MainLayout'
import Details from './pages/Details'
import { rareContext } from './context/DataContext'
import Category from './pages/Category'
import Search from './pages/Search'
import ShadeFinder from './pages/ShadeFinder'
import ProductShade from './pages/ProductShade'
import RareImpact from './pages/RareImpact'
import RegisterOrAcc from './pages/RegisterOrAcc'
import CreateAcc from './pages/CreateAcc'
import { Toaster } from 'react-hot-toast'
import Account from './pages/Account'
import Error from './pages/Error'

function App() {
  // const rareData = useContext()
  const {sliderData,data, error, loader} = useContext(rareContext)

  return(
    <>
      <Toaster position="top-right" />
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Rare/>}/>
        <Route path='/products/category/:category/:type?' element={<Category/>}/>
        <Route path='/products/details/:name' element={<Details/>}/>
        <Route path='/products/search' element={<Search/>}/>
        <Route path='/products/shadefinder' element={<ShadeFinder/>}/>
        <Route path='/products/shadefinder/:shade' element={<ProductShade/>}/>
        <Route path='/products/impact' element={<RareImpact/>}/>
        <Route path='/registeroracc' element={<RegisterOrAcc/>}/>
        <Route path='/createacc' element={<CreateAcc/>}/>
        <Route path='/account' element={<Account/>}/>
        

        

      </Route>
        <Route path='*' element={<Error/>}/>

    </Routes>
    </>
  )
}

export default App
