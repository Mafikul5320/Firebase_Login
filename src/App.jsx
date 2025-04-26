import { Outlet } from 'react-router'
import './App.css'
import Navber from './Components/Navber'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Navber></Navber>
      <div className='my-60'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
