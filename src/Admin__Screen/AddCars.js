import React from 'react'
import Input from '../Componet/Input'
import { useLocation, useNavigate } from 'react-router-dom';
import Buttons from '../Componet/Buttons'
import { editData, postfbdata, signUpUser } from '../Config/FirebaseMethod'
import { useState ,useEffect} from 'react'
import app from "../Config/FirebaseConfig";
import HeaderBar from '../Componet/HeaderBar';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {getDownloadURL, getStorage, listAll, ref, uploadBytes} from "firebase/storage";
import {v4} from 'uuid'

const storage = getStorage (app)
 
const AddCars = () => {

  const [obj, setobj] = useState([])
  const [downloadUrl, setdownloadUrl] = useState([])
  const [url, seturl] = useState(null)
  // const [fbdata, setfbdata] = useState([])
  // let navigate= useNavigate()
 //let location = useLocation()
  const submit = (e) => {
    e.preventDefault(e)     
    console.log(obj)
    // signUpUser(obj).then(() => alert("Done")).catch(() => console.log("err"))
    postfbdata(obj, "CarsList" ).then((data) => {
    }).catch((e) => alert(e))  
  }
  const saveImage = (e)=>{
    e.preventDefault(e) 
    if(url==null)return    
    let imageref = ref(storage,`images/${url.name + v4()}`)
    uploadBytes(imageref,url).then((res)=>console.log(res)).catch((e)=>alert(e))

  }
  const geturl = (e)=>{    
    let imageref = ref(storage,'images/')
    listAll(imageref).then(res=>res.items.forEach((item)=>{
      getDownloadURL(item).then((res)=>{
        setdownloadUrl(prev=>[res])
        setobj({imgUrl:downloadUrl})  
      })
    }))
  }
  useEffect(()=>{
    geturl()
  },[])
  return (
    <>
    <HeaderBar label="Add Cars for Booking" className="pt-3 " />
    <div className="form-div mx-auto mt-5" >      
      <form>      
        <div className="mb-3">
          <h3>Name Of Car:</h3>
          <Input val={obj.Iname} change={e => setobj({ ...obj, carName: e.target.value })} type="Name of Car" />
        </div>
        <div className="mb-3">
          <h3>Model of Car:</h3>
          <Input val={obj.shortname} change={e => setobj({ ...obj, modelName: e.target.value })} type="Name of Model" />
        </div>
        <div className="mb-3">
          <h3> Price Of Booking :</h3>
          <Input val={obj.Nocamp} change={e => setobj({ ...obj, price: e.target.value })} type="Price of Booking" />

        </div>
        <div className="mb-3">
          <h3>Name Of Driver :</h3>
          <Input val={obj.Detail} change={e => setobj({ ...obj, driverName: e.target.value })} type="Name of Driver" />
        </div>
        <div className="mb-3">
          <h3>Star Rating</h3>
          <Input val={obj.Location} change={e => setobj({ ...obj, rate: e.target.value })} type="Star Rating" />

        </div>
        <div className="mb-3">
          <h3>Available Days: </h3>
          <Input val={obj.address} change={e => setobj({ ...obj, workday: e.target.value })} type="Available Day" />
        </div>
        <div className="mb-3">
          <h3>Timming :</h3>
          <Input val={obj.contact} change={e => setobj({ ...obj,timming: e.target.value })} type="Timming" />
        </div> 
        <div className="mb-3">
          <h3> Cars Features</h3>
              <FormGroup>
                 <FormControlLabel value="AC" onChange={e => setobj({ ...obj, AC: e.target.checked })} required control={<Checkbox />} label="AC" />            
                 <FormControlLabel required control={<Checkbox />} label="GPS" onChange={e => setobj({ ...obj, GPS: e.target.checked })}/>
                 <FormControlLabel required control={<Checkbox />} label="USB port" onChange={e => setobj({ ...obj, usbPort: e.target.checked })}/>
                 <FormControlLabel required control={<Checkbox />} label="Bluetoot" onChange={e => setobj({ ...obj, Bluetooth: e.target.checked })}/>
               </FormGroup>
        </div>  
        <div className="mb-3">
          <h3>Upload the car Picture :</h3>
          <input type="file" onChange={e =>seturl(e.target.files[0]) } />
          <button className="btn  btn-primary" onClick={saveImage} >Save the file</button>
        </div> 
        <div className="d-flex justify-content-center" >
          <Buttons click={submit} classes="btn mb-5 mt-2  btn-priary" label='Submit' />         
        </div>

      </form>
      {
        downloadUrl.map((x)=> <img src={x}/>
         
        )
      }
    </div>
    </>
  )
}

export default AddCars