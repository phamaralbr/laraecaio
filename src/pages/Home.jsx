import React, {useState} from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import MainBanner from '../components/MainBanner/MainBanner'
import Couple from '../components/Couple/Couple'
import Gifts from '../components/Gifts/Gifts'

// https://preview.themeforest.net/item/feelings-wedding-wedding-planner-next-js-template/full_screen_preview/43569960

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <MainBanner/>
      <br style={{marginBottom: '10%'}}/>
      {/* <Couple/> */}
      <Gifts/>
    </>
  )
}

export default Home