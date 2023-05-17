import React from 'react'
import {useState} from 'react'
import { Outlet } from 'react-router-dom'
export const Navbar = ({val}) => {
let [inpt,setinpt]=useState('')
// console.log(inpt)
val(inpt)
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Cars Booking</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#"></a>
        </li>      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-3 px-5 " onChange={e=>setinpt(e.target.value)} type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </div>
</nav>
<Outlet/>
    </>
  )
}
