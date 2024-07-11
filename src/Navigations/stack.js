import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/homeScreen";
import AboutScreen from "../Screens/aboutScreen";
import ContactScreen from "../Screens/contactScreen";
import SettingScreen from "../Screens/settingScreen";
import InvalidScreen from "../Screens/invalidScreen";
import DynamicPage from "../Screens/dynamicPage";

export const ProfileWrapper=createContext();

function Stack(){
    const [profileInfo,setProfileInfo]=useState({
        name:"Raju"
    })

    const changeName=(name)=>{
        setProfileInfo({...profileInfo,name:name})
    }
    return(
        <ProfileWrapper.Provider value={{
            profileInfo,
            changeName,
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={HomeScreen}/>
                    <Route path="/about" Component={AboutScreen}/>
                    <Route path="/contact" Component={ContactScreen}/>
                    <Route path="/setting" Component={SettingScreen}/>
                    <Route path="*" Component={InvalidScreen}/>

                    <Route path="/:location/:restaurentId/info" Component={DynamicPage}/>
                </Routes>
            </BrowserRouter>

        </ProfileWrapper.Provider>
            
    )
}
export default Stack;