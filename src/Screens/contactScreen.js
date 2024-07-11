
import React, { useContext } from "react";
import NavBar from "../Components/NavBar/navBar";
import { ProfileWrapper } from "../Navigations/stack";

const ContactScreen=()=>{
    const profileInfo = useContext(ProfileWrapper)
    console.log(profileInfo)

    const changeName=()=>{
        profileInfo.changeName("Naresh")
    }
    return(
        <>
        <NavBar/>
        <h2>Welcome this is contact screen {profileInfo.profileInfo.name}</h2>
        <button onClick={changeName}>Change Name</button>
        </>
    )
}
export default ContactScreen;