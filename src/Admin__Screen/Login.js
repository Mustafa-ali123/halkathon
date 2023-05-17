import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import { loginUser } from '../Config/FirebaseMethod';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, set, ref, onValue, push } from "firebase/database";
// import Navbar from './Navbar';
import app from '../Config/FirebaseConfig';


export default function LogIn() {

    const database = getDatabase(app);
    const [obj, setobj] = useState([])
    const [fbdata, setfbdata] = useState([])
    const navigate = useNavigate();

    const log = () => {

        loginUser(obj).then((e) => {
            console.log(e)
            let dataref = ref(database, `users/${e}`)            
            onValue(dataref, (data) => {            
                 if (data.exists(data.val)) {
               if(data.val().type === "Transporter"){
                 navigate(`/addcar`)
               }else{
                navigate("/booking")
               }                                                             
                } else {
                    alert("data not found")
                }
            })
        }).catch((err) => alert(err))
    }
    return (

        <>
            <div className='container mt-5'>
                <div className=' row  '>
                    <div className='col-lg-12 md-12 col-sm-12 mt-5 '>
                        <div className='login py-5 px-5 mx-auto'>
                            <h1 className='text-center fw-bolder mt-2'>Log In</h1>
                            <h4 className="my-3">Email :</h4>
                            <input onChange={e => setobj({ ...obj, email: e.target.value })} type=" Email,number " placeholder=" Email or Phone Number" /><br />
                            <h4 className="my-3">Password :</h4>
                            <input onChange={e => setobj({ ...obj, password: e.target.value })} type="password" placeholder="  Pasword" required="required" className="mb-3" /><br />
                            <button className="btn  btn-primary my-2 " onClick={log}>Log in</button>
                            <br />                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}