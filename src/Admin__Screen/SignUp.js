import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { postfbdata, signUpUser } from "../Config/FirebaseMethod"
import {useState}from'react'

export default function SignIn() {
    const [obj, setobj] = useState([])
    let navigate=useNavigate()
    const postdata = (e) => {
        e.preventDefault()
        signUpUser(obj).then(res=>{
          
            postfbdata(obj ,'signUser')
            .then((res)=>  navigate('/login'))
            .catch((e)=>console.log(e)) 
        }).catch(e=>alert(e))
       
    }
    return (
        <>
            <br />
            <br />
            <br />
            <h1 className='text-center fw-bolder mt-4'>Sign Up</h1>
            <div className='container sign   '>
                <div className=' row '>
                    <div className='col-lg-12 md-12 col-sm-12 mt-4'>
                        <div className='side mx-auto '>
                            <form className='py-5 px-4 '>

                                <div className="mb-3">
                                    <h4>User Name :</h4>
                                    <input  onChange={e => setobj({ ...obj,username : e.target.value })} type="text" placeholder='User Name ' className=" form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <h4>Email address :</h4>
                                    <input onChange={e => setobj({ ...obj,email : e.target.value })} type="email" className="form-control" placeholder=' Email Address' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <h4>Password :</h4>
                                    <input onChange={e => setobj({ ...obj,password : e.target.value })} type="password" placeholder='Password ' className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3">
                                    <h4>Contact  :</h4>
                                    <input onChange={e => setobj({ ...obj,contact : e.target.value })} type="number" className="form-control" placeholder='Contact Number' id="exampleInputPassword1" />
                                </div>
                                <div className=" my-3 ">
                                    <select onChange={e => setobj({ ...obj, type: e.target.value })}>
                                        <option>Transporter </option>
                                        <option>User</option>
                                    </select>
                                </div>
                                   <Link className="text-center" to='/login'>You have Account</Link>
                                   <br/>
                                   <br/>
                                <button onClick={postdata}  type="submit" className="btn btn1 px-5  btn-primary">Submit</button>
                      
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}