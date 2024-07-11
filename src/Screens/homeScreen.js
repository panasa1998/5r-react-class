import React, { useContext } from "react";
import NavBar from "../Components/NavBar/navBar";
import { ProfileWrapper } from "../Navigations/stack";

const HomeScreen=()=>{
    const sharedData =  useContext(ProfileWrapper);
    return(
        <>
        <NavBar/>
        <h2>Welcome this is home screen {sharedData.profileInfo.name}</h2>
        </>
    )
}
export default HomeScreen;