import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../Screens/homeScreen";
import AboutScreen from "../Screens/aboutScreen";
import ContactScreen from "../Screens/contactScreen";
import SettingScreen from "../Screens/settingScreen";

function Stack(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={HomeScreen}/>
                    <Route path="/about" Component={AboutScreen}/>
                    <Route path="/contact" Component={ContactScreen}/>
                    <Route path="/setting" Component={SettingScreen}/>
                </Routes>
            </BrowserRouter>
    )
}
export default Stack;