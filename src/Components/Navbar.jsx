import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Navbar.css"
function Navbar(){
    const [clicked, setClick]=useState(false);
    function func(){
        setClick(!clicked);
    }
    useEffect(()=>{
        AOS.init({
            duration:2000
        });
    },[]);
    return (
        <div className="portfolio_navbar">
            <div className="nav_heading" data-aos="fade-right">
                <Link to="/" style={{margin:"0"}}><p className="nav_name">singh<span className="nav_code">coder694</span></p></Link>
            </div>
            <div className="nav_content" data-aos="fade-left">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/skill"><li>Skills</li></Link>
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
            <div className="visible_small_nav">
                <div className="nav_small" onClick={func} data-aos="zoom-in-left">
                    <div className="bars"><FaBars style={{"color":"aqua", "fontSize":"1.5rem"}}/></div>
                </div>
                <div className={clicked ? "nav_small_content show": "hide"}>
                    <RxCross1 className="cross" onClick={func}/>
                    <Link to="/"><p className="first_p">Home</p></Link>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/skill"><p>Skills</p></Link>
                    <Link to="/projects"><p>Projects</p></Link>
                    <Link to="/contact"><p>Contact</p></Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;