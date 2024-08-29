import React , { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import { Link, useNavigate } from "react-router-dom";


function SignIn() {
  const navigate = useNavigate()
    let [formdata,setformdata] = useState({email:"",password:""})
    const handleChange = async (e) => {
        const { name, value } = e.target
        let data = { ...formdata, [name]: value }
        setformdata(data)
        //api
 }
 const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formdata);
    const response = await fetch("http://localhost:8800/SignIn/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
    const jsonResponse = await response.json()
    console.log(jsonResponse)
    window.alert(jsonResponse["message"])
    if(jsonResponse["message"]=="user login successsfully"){
      localStorage.setItem("userdata",JSON.stringify(jsonResponse["data"]))
      navigate('/')
    }

  }
    return(

      <>
         <Navbar/>
         <SinglePageHeader one={{title:"SignIn"}}/>
         <div class ="container" style={{marginTop:"20px"}}>
            <h1>SignIn Form</h1>
               <form onSubmit={handleSubmit}>
                  
                  <input
                    type="email"
                    name="email"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Email"
                    value ={formdata["email"]}
                    onChange={(e)=>handleChange(e)}
                  />
                  <input
                    type="password"
                    name="password"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Password"
                    value ={formdata["password"]}
                    onChange={(e)=>handleChange(e)}
                  />
                  {/* <textarea
                    className="w-100 form-control border-0 mb-4"
                    rows={5}
                    name="message"
                    
                    placeholder="Your Message"
                    defaultValue={""}
                  /> */}
                  <button
                    className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                    type="submit"
                  >
                    Submit
                  </button>
                  </form>
                  <span>
                    already have an account?
                    <Link to ="/Signup">
                    Signup</Link>
                  </span>
            </div>
       <Footer/>
      </>
    )
  }
  
  export default SignIn;