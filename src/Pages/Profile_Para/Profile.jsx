import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { FaRegEye } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Profile.css"
function Profile(){
    useEffect(()=>{
        AOS.init({
            duration:2000
        });
    },[]);
    const handleViewPDF = () => {
        // Specify the path to the PDF file in the public folder
        const pdfFilePath = process.env.PUBLIC_URL + '/Resume/singhcoder694.pdf';
    
        // Open the PDF in a new browser window/tab
        window.open(pdfFilePath);
    };
    return (
        <div>
            <div className="profile_details">
                <p className="greet" data-aos="fade-right">Hello, It's Me</p>
                <p className="name" data-aos="zoom-in">Vivek Singh</p>
                <p className="work" id="typewriter" data-aos="fade-right">And I'm a <span className="work_">{' '}
                <Typewriter
                    words={['Web Developer', 'Web Designer']}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    cursorColor="aqua"
                    typeSpeed={60}
                    deleteSpeed={60}
                    delaySpeed={1500}
                /></span>
                </p>
                <div className="brief_about" data-aos="zoom-out">
                    <p>Pursuing my Btech from IIT Delhi. I leverage my passion for coding to create innovative solutions, constantly learning and evolving in the dynamic world of technology.</p>
                </div>
                <div className="profile_links" data-aos="fade-left">
                    <a href="https://github.com/singhcoder694" target="_blank" className="icon_"><FaGithubSquare /></a>
                    <a href="https://www.linkedin.com/in/vivek-singh-0b344124b/" className="icon_" target="_blank"><FaLinkedin /></a>
                </div>
                <div className="main_buttons">
                    <div className="button_cv">
                        <a href="#" onClick={handleViewPDF}>Resume&nbsp;&nbsp;<FaRegEye /></a>
                    </div>
                    <div className="button_cv2">
                        <Link to="/contact" className="contact"><GoMail />&nbsp;&nbsp;Contact</Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Profile;