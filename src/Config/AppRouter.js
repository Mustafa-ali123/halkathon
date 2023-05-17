import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CarData from '../UserScreen/CarData'
import { Detail } from '../UserScreen/Detail'
import AddCars from '../Admin__Screen/AddCars'
import SignUp from '../Admin__Screen/SignUp'
import Login from '../Admin__Screen/Login'
import Booking from '../UserScreen/Booking'
const AppRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/addcar' element={<AddCars/> } />        
          <Route path="/*" element={<CarData/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path='/signup' element={<SignUp/> } />
          <Route path='/login' element={<Login/> } />                    
          <Route path='/booking' element={<Booking/> } />                    
        </Routes>
      </Router>
    </>
  )
}

export default AppRouter
