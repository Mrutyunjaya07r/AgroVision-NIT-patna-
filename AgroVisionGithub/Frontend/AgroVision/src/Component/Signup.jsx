import React,{useState} from 'react'
import { useNavigate } from 'react-router';

function Signup() {
    let navigate=useNavigate();
    let [name,setName]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [username,setUsername]=useState("");
    let [lon,setLon]=useState("");
    let [lat,setLat]=useState("");
    let [address,setAddress]=useState("")
    let [district,setDistrict]=useState("")

    let setDetails=async()=>{
        let result=await fetch("http://localhost:8080/signup",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                password:password,
                username:username,
                lon:lon,
                lat:lat,
                address:address,
                district:district
            })
        })
        result=await result.json();
        alert(`${name} Registered successfully`);
        navigate('/signin')
        console.log(result);
    }

  return (
    <div>
        <div className="container">
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" value={name} onChange={(e)=>{setName(e.target.value)}} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail2" value={email} onChange={(e)=>{setEmail(e.target.value)}} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">UserName</label>
    <input type="text" className="form-control" id="exampleInputEmail3" value={username} onChange={(e)=>{setUsername(e.target.value)}} aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword4" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Latitude</label>
    <input type="text" className="form-control" value={lat} onChange={(e)=>{setLat(e.target.value)}} id="exampleInputEmail5" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Longitude</label>
    <input type="text" className="form-control" value={lon} onChange={(e)=>{setLon(e.target.value)}} id="exampleInputEmail6" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
    <input type="text" className="form-control"  value={address} onChange={(e)=>{setAddress(e.target.value)}} id="exampleInputEmail7" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">District</label>
    <input type="text" className="form-control"  value={district} onChange={(e)=>{setDistrict(e.target.value)}} id="exampleInputEmail8" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={setDetails}>Submit</button>
        </div>
    </div>
  )
}

export default Signup