import CourseCard from "../Componet/CourseCard";
import { Navbar } from "../Componet/Navbar"
import { Get } from "../Config/ApiBase/ApiMethods"
import app from "../Config/FirebaseConfig";

import { getDatabase, set, ref, remove, onValue, push } from "firebase/database";
import{useState,useEffect}from 'react'

function CarData() {
  let [inpt,setinpt]=useState('')
  const database = getDatabase(app);
  const [cars, setCars] = useState([]);
  const [fbdata, setfbdata] = useState([]);
console.log(inpt)

let getdata=()=>{
  let dataref =ref(database,"CarsList")
  onValue(dataref,(data)=>{
    setfbdata(Object.values(data.val()))
    console.log(fbdata)
  })
  }
  useEffect(()=>{
  getdata()
  },[])

  return (
    <div>
      <Navbar val={(e)=>setinpt(e)} />
        <div className='container pt-5 cources'>
        <div className='row'>
      {fbdata.filter((x,i)=>{
       if(inpt==""){
        return x

       }
       else{
        if(x.modelName.toLowerCase().includes(inpt.toLowerCase())){
       return x
        }
       }
      }) .map((x,i) => (
        <div key={i} className='col-lg-3 md-3 col-sm-12 mb-3'>
        <CourseCard title={x.carName} 
        title1={x.modelName}
         fees={x.price}
         data={x}
         img={x.imgUrl}
        button="Booking Now"/>
        </div>
      ))}
        </div>
        </div>
    </div>
  );
}

export default CarData