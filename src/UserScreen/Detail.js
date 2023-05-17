import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import{useState,useEffect}from 'react'
import { postfbdata } from '../Config/FirebaseMethod'
import app from "../Config/FirebaseConfig";
import { getDatabase, set, ref, onValue, push } from "firebase/database";


const database = getDatabase(app);

export const Detail = () => {
let [data,setdata]=useState([])
let navigate=useNavigate()
    let location = useLocation()
    useEffect(()=>{
        setdata(location.state)
    })
    const sendData=(e)=>{
navigate('/signup')
     }
    return (
        <>
            <div className='center'>        
                        <h1 className=' py-4 text-center'>{data.carName}</h1>
                        <img className='detailimg' src={data.imgUrl}/>
                        <h3 className='py-1' >Name Of Car : {data.carName}</h3>
                        <h3 className='py-1'>Model Of Year : {data.modelName}</h3>                        
                        <h3 className='py-1'> Availability : {data.workday}</h3>
                        <h3 className='py-1'> Timming : {data.timming}</h3>
                        <h3 className='py-1'> Prices : {data.price}</h3>
                        <button onClick={e=>sendData(data)} className='btn btn-primary'>Book Now</button>
            </div>
        </>
    )
}
