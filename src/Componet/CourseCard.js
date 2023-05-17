import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = (props) => {
  let{img,data,title,title1,title2,text,keys,button,path,fees}=props
 let navgate=useNavigate()
const call = (data) => {
  console.log(path)
navgate("/detail",{
  state:data
})
}

  return (
    <>    
      <div className="card border-4 mx-auto">
      <img src={img}  />   
      <div className="card-body">        
        <h5 className="card-title"> Name : {title}</h5>
        <h5 className="card-title"> Model Year : {title1}</h5>
        {/* <h5 className="card-title">VIN : {title2}</h5> */}
        <h5 className="card-text">Time Duration :  {text}</h5>
        <h5 className="card-text">Price : {fees}</h5>
        <button onClick={()=>call(data)} className="btn btn-primary">{button}</button>
    
    </div>
    </div>
    
    </>
  )
}

export default CourseCard
