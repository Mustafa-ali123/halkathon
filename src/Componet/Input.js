import { TextField } from '@mui/material'
import React from 'react'
const Input = (props) => {
    let{change,type ,val,classe}=props
  return (
    <>
      <TextField value={val} onChange={change} label={type} className={`control ${classe}`} />
    </>
  )
}

export default Input
