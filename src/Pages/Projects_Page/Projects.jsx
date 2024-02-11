import React, { useEffect } from "react"
import Navbar from "../../Components/Navbar";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Projects.css"
import { Link } from "react-router-dom";
function Projects() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    const projects = [
        {
            name: "Matrices Calc",
            code_url: "https://github.com/singhcoder694/Matrix-Virtual_Lab",
            website_url: "https://matrix-calculator-frontend.onrender.com",
            img: "Images/Projects/matrix.png",
            website: true,
        },
        {
            name: "Codeforce API",
            code_url: "https://github.com/singhcoder694/CodeforcesAPI",
            website_url: "https://codeforce-api-5v9d.onrender.com",
            img: "Images/Projects/codeforces.png",
            website: true,
        },
        {
            name: "Literacy App",
            code_url: "https://github.com/singhcoder694/LiteracyApp",
            website_url: "https://literacy-app.vercel.app",
            img: "Images/Projects/literacy.png",
            website: true,
        },
        {
            name: "Ecommerce Web",
            code_url: "https://github.com/singhcoder694/Ecommerce_WebApp",
            website_url: "https://e-commercefinal.netlify.app",
            img: "Images/Projects/ecommerce.png",
            website: true,
        },
        {
            name: "Pet Tinder",
            code_url: "https://github.com/singhcoder694/Pet_Tinder",
            website_url: "https://tindog694.netlify.app/",
            img: "Images/Projects/tindog.png",
            website: true,
        }
    ]
    return (
        <div style={{ backgroundColor: "#20232F" }}>
            <Navbar />
            <div className="proj_heading" data-aos="fade-right">
                <p> <span style={{ "color": "white" }}>Featured</span> Projects</p>
            </div>
            <div className="proj_content" >
                {projects.map((project, index) => (
                    <div className="proj_card" key={index} data-aos="fade-out">
                        <img src={process.env.PUBLIC_URL + project.img} />
                        <div className="proj_card_above">
                            <p className="proj_name">{project.name}</p>
                            {/* <p className="about_proj">App to get Information from Codforces using it's API.</p> */}
                            <div className="about_proj">
                                {project.website?<Link to={project.website_url} className="link" target="_blank"><FaExternalLinkAlt title="Website" /></Link>:null}
                                <Link to={project.code_url} className="code" target="_blank"><FaFileCode title="Code" /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Projects;