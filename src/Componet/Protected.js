import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import app from "../Config/FirebaseConfig";
import {useEffect} from 'react'

const auth = getAuth(app);
const Protected = (props) => {
    let {Componet}=props
    let navigate =useNavigate()
    
    useEffect(()=>{
   onAuthStateChanged(auth,(user)=>{
        if(user){
            return  <Componet/>
        }else{
            navigate("/")
        }
    })
    },[]) 
 
    return  <Componet/>
}
       

export default Protected
