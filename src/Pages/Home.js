//import react and useEffect
import React from 'react'
//import components for home page
import NavigationBar from '../components/Home/NavigationBar'
import Banner from '../components/Home/Banner'
import Footer from '../components/Home/Footer'
//import images
import HeroImages from '../images/photo-1618588488736-c9419743dd12.avif'
import { width } from '@mui/system'

export default function Home() {
  
  return (
    <>
        <NavigationBar/>
        <Banner />
        <Footer/>
    </>
  )
}