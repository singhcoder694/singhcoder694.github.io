import React from "react"
import Navbar from "../Components/Navbar";
import Profile from "../Pages/Profile_Para/Profile";
import Photo from "../Pages/Profile_Pic/Image";
import "./App.css"
function App(){
    return (
        <div className="main_class">
            <Navbar/>
            <div className="profile_section">
                <Profile />
                <Photo />
            </div>
        </div>
        
    )
}
export default App;