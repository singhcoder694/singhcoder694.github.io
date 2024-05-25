import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Navbar.css"
function Navbar() {
    const location = useLocation();
    const currentUrl = location.pathname;
    const [nav, setNav] = useState([true, false, false, false, false])
    const [clicked, setClick] = useState(false);
    function func() {
        setClick(!clicked);
    }
    useEffect(() => {
        if (currentUrl === "/") {
            setNav([true, false, false, false, false])
        }
        else if (currentUrl === "/about") {
            console.log("ksdlf")
            setNav([false, true, false, false, false])
        }
        else if (currentUrl === "/skill") {
            setNav([false, false, true, false, false])
        }
        else if (currentUrl === "/projects") {
            setNav([false, false, false, true, false])
        }
        else if (currentUrl === "/contact") {
            setNav([false, false, false, false, true])
        }
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <div className="portfolio_navbar">
            <div className="nav_heading" data-aos="fade-right">
                <Link to="/" style={{ margin: "0" }}><p className="nav_name">singh<span className="nav_code">coder694</span></p></Link>
            </div>
            <div className="nav_content" data-aos="fade-left">
                <ul>
                    <Link to="/"><li style={nav[0] ? { color: "aqua" } : null}>Home</li></Link>
                    <Link to="/about"><li style={nav[1] ? { color: "aqua" } : null}>About</li></Link>
                    <Link to="/skill"><li style={nav[2] ? { color: "aqua" } : null}>Skills</li></Link>
                    <Link to="/projects"><li style={nav[3] ? { color: "aqua" } : null}>Projects</li></Link>
                    <Link to="/contact"><li style={nav[4] ? { color: "aqua" } : null}>Contact</li></Link>
                </ul>
            </div>
            <div className="visible_small_nav">
                <div className="nav_small" onClick={func} data-aos="zoom-in-left">
                    <div className="bars"><FaBars style={{ "color": "aqua", "fontSize": "1.5rem" }} /></div>
                </div>
                <div className={clicked ? "nav_small_content show" : "hide"}>
                    <RxCross1 className="cross" onClick={func} />
                    <Link to="/"><p className="first_p" style={nav[0] ? { color: "aqua" } : null}>Home</p></Link>
                    <Link to="/about"><p style={nav[1] ? { color: "aqua" } : null}>About</p></Link>
                    <Link to="/skill"><p style={nav[2] ? { color: "aqua" } : null}>Skills</p></Link>
                    <Link to="/projects"><p style={nav[3] ? { color: "aqua" } : null}>Projects</p></Link>
                    <Link to="/contact"><p style={nav[4] ? { color: "aqua" } : null}>Contact</p></Link>
                </div>
            </div>
        </div>
    )
}
export default Navbar;