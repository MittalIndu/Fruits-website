import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SinglePageHeader from "../Components/SinglePageHeader";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Signup() {
    let [formdata,setformdata] = useState({name:"",email:"",Phone:"",password:"",confirmpassword:""})
     const navigate = useNavigate();

    const handleChange = async (e) => {
        const { name, value } = e.target
        let data = { ...formdata, [name]: value }
        setformdata(data)
        //api
 }
 const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formdata);
    const response = await fetch("http://localhost:8800/Signup/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
    const jsonResponse = await response.json()
    console.log(jsonResponse);
    window.alert(jsonResponse["message"])
    if(jsonResponse["message"]=="user signup successfully"){
    navigate("/signIn")
    }
  }
    return(
            
      <>
         <Navbar/>
         <SinglePageHeader one={{title:"Signup"}}/>
         <div class ="container" style={{marginTop:"20px"}}>
            <h1>SignUp Form</h1>
               <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Your Name"
                    value ={formdata["name"]}
                      onChange={(e)=>handleChange(e)}
                    
                  />
                  <input
                    type="email"
                    name="email"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Email"
                    value ={formdata["email"]}
                    onChange={(e)=>handleChange(e)}
                  />
                  <input
                    type="number"
                    name="Phone"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Phone no."
                    value ={formdata["Phone"]}
                      onChange={(e)=>handleChange(e)}
                   
                  />
                   <input
                    type="password"
                    name="password"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your Password"
                    value ={formdata["passowrd"]}
                    onChange={(e)=>handleChange(e)}
                   
                  />
                  <input
                    type="password"
                    name="confirmpassword"
                    className="w-100 form-control border-0 py-3 mb-4"
                    placeholder="Enter Your confirm  Password"
                    value ={formdata["confirmpassword"]}
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
                    <Link to ="/SignIn">
                    SignIn</Link>
                  </span>
            </div>
            
            
       <Footer/>
      </>
    )
  }
  
  export default Signup;