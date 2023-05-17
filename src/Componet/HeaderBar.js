import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const HeaderBar = (props) => {
  let navigate = useNavigate()
  return (
    <>
      <div className='shadow'>
        <ul className='main-ul'>
          <li className='text-center py-2'><Button className="arrow" startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)}>back</Button> <h3 className='mx-auto'>{props.label}</h3></li>
        </ul>
      </div>
    </>
  )
}

export default HeaderBar
