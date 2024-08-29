import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import SinglePageHeader from "../Components/SinglePageHeader";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
function Profile() {
  let [userdata, setuserdata] = useState(
    JSON.parse(localStorage.getItem("userdata"))||{})
    const navigate = useNavigate()
    const handleLogout=()=>{
        localStorage.removeItem('userdata')
        navigate('/')
    }
  return (
    <>
      <Navbar />
      <SinglePageHeader one={{ title: "User" }} />
      <h1>Name:{userdata["name"]}</h1>
      <h1> Email:{userdata["email"]}</h1>
      <h1>Phone:{userdata["Phone"]}</h1>
      <button
        type="submit"
        className="btn btn-primary border-2 border-secondary rounded-pill text-white h-100"
        style={{ top: 0, right: "25%" }}
        onClick={handleLogout}
      >
        Logout
      </button>
      <Footer />
    </>
  );
}

export default Profile;
