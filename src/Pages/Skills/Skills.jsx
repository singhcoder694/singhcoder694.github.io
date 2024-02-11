import React, { useEffect, useState } from "react";
import "./Skills.css";
import Navbar from "../../Components/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Skills() {
  const skills = [
    {
      img_url: "react.jpg",
      name: "ReactJS",
      percentage: 85,
    },
    {
      img_url: "Postgre.jpg",
      name: "PostgreSQL",
      percentage: 75,
    },
    {
      img_url: "Java.jpg",
      name: "Java",
      percentage: 90,
    },
    {
      img_url: "Express.jpg",
      name: "Express",
      percentage: 85,
    },
    {
      img_url: "JS.jpg",
      name: "Javascript",
      percentage: 90,
    },
    {
      img_url: "Git.jpg",
      name: "Git",
      percentage: 90,
    },
    {
      img_url: "Cpp.jpg",
      name: "C++",
      percentage: 90,
    },
    {
      img_url: "Python.jpg",
      name: "Python",
      percentage: 75,
    },
    {
      img_url: "HTML.jpg",
      name: "HTML",
      percentage: 95,
    },
    {
      img_url: "CSS.jpg",
      name: "CSS3",
      percentage: 85,
    },
    {
      img_url: "Node.jpg",
      name: "NodeJS",
      percentage: 80,
    },
  ];
  useEffect(()=>{
    AOS.init({
        duration:2000
    });
},[]);
  const [animate, setAnimate] = useState(false);
  const calculateColor = (width) => {
    // Adjust the color logic based on your preferences
    const minHue = 60; // Adjusted minimum hue
    const maxHue = 120; // Adjusted maximum hue
    const hue = minHue + (width / 100) * (maxHue - minHue); // Adjusted to use width instead of a fixed percentage
    const gradient = ` hsl(${hue}, 80%, 50%)`;
    return gradient;
  };
  const myStyle = {
    position: "absolute",
    height: "10px",
    opacity:"0",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    transform: "translateY(20px)",
    transition: "width 2s ease-in-out",
  };
  const myStyle2 = {
    position: "relative",
    height: "10px",
    opacity:"1",
    borderTopRightRadius: "10px",
    borderBottomRightRadius: "10px",
    transform: "translateY(20px)",
    transition: "all 2s ease-in-out",
    animation: "percentage 2s ease-in-out forwards",
  };
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="proj_heading" data-aos="fade-right">
        <p>
          {" "}
          <span style={{ color: "white" }}>My</span> Skills
        </p>
      </div>
      <div className="skill_div">
        {skills.map((skill,index) => {
            return(
            <div className="skill_box" key={index} data-aos="fade-up-left" >
                <div className="skill_img">
                    <img src={require("../../../public/Images/" + skill.img_url)} alt={skill.name+"_logo"} />
                </div>
                <div className="skill_name">
                    <div className="skill_bar"></div>
                        <div
                            className="skill_bar_above"
                            style={{
                        ...(animate ? myStyle2 : myStyle),
                        width: `${skill.percentage}%`, // Set dynamic width based on percentage
                        background: calculateColor(skill.percentage), // Set dynamic background color
                    }}
                        ></div>
                        <div className="skill_percentage">
                            <p>{skill.name}</p>
                            <p style={{color:"black"}}>{skill.percentage}%</p>
                        </div>
                </div>
            </div>
            );
        })}
        <div className="skill_box" id="last_box" data-aos="fade-up-left">
                <div className="last_img">
                    <p>More to be added....</p>
                </div>
          </div>
      </div>
    </div>
  );
}

export default Skills;
