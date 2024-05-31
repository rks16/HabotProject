import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Rectangle from './components/Rectangle'
import Places from './components/Places'
import Video from './components/Video'
import Verify from './components/Verify'
import Works from './components/Works'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
    <Rectangle></Rectangle>
    <Places></Places>
    <Video></Video>
    <Verify></Verify>
    <Works></Works>
    <Footer></Footer>
      
    </>
  )
}

export default App
