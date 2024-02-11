import React, { useState } from 'react'
import Navbar from '../../Components/Navbar';
import Photo from '../Profile_Pic/Image.jsx';
import "./About.css"
function About() {
    const [show, setShow]=useState([true,false,false]);
    const handleClick1=()=>{
        setShow([true,false,false]);
    }
    const handleClick2=()=>{
        setShow([false,true,false]);
    }
    const handleClick3=()=>{
        setShow([false,false,true]);
    }
    const style1={
        color:"aqua",
        textDecoration:"underline"
    }
    const style2={
        color:"white"
    }
  return (
    <div>
        <Navbar />
        <div className="profile_section">
            <Photo />
            <div className='about_section'>
                <p id='name'>About Me</p>
                <p className='about_start'>Passionate student and developer, channeling boundless dedication into creating cutting-edge solutions. Eager to tackle challenges and transform ideas into impactful innovations.</p>
                <div className='qualifications'>
                    <p onClick={handleClick1} style={show[0]?style1:style2}>Education</p>
                    <p onClick={handleClick2} style={show[1]?style1:style2}>Achievements</p>
                    <p onClick={handleClick3} style={show[2]?style1:style2}>PORs</p>
                </div>
                {show[0] && <div className='education'>
                    <ul>
                        <li className='time_line'>2022-2026</li>
                        <li>Btech in Civil Engineering from <strong style={{color:"azure"}}>IIT Delhi</strong> - <i style={{color:"aqua"}}>7.52</i> GPA(Current)</li>
                        <li className='time_line'>2020-2021</li>
                        <li>Senior Secondary Education - CBSE Board - <i style={{color:"aqua"}}>91.4</i>%</li>
                        <li className='time_line'>2018-2019</li>
                        <li>Secondary Education - CBSE Board - <i style={{color:"aqua"}}>95.0</i>%</li>
                    </ul>
                </div>}
                {show[1] && <div className='achievements'>
                    <ul>
                        <li className='time_line'>2023</li>
                        <li><i style={{color:"aqua"}}>1st Rank</i> in CodePeak'23 in <strong>Open Source</strong> Comp by IITG and IITP.</li>
                        <li className='time_line'>2022</li>
                        <li><i style={{color:"aqua"}}>AIR 2596</i> in JEE Mains 2022 among 1.1 million students.</li>
                        <li className='time_line'>2022</li>
                        <li><i style={{color:"aqua"}}>AIR 4482</i> in JEE Mains 2022 among 0.15 million students.</li>
                    </ul>
                </div>}
               {show[2] && <div className='pors'>
                    <ul>
                        <li className='time_line'>2023-2024</li>
                        <li><strong style={{color:"azure"}}>Technical Team Executive</strong> of <i style={{color:"aqua"}}>Placement Cell</i> at <strong style={{color:"azure"}}>IIT Delhi.</strong></li>
                        <li className='time_line'>2023-2024</li>
                        <li><strong style={{color:"azure"}}>Hostel Representaive</strong> for <i style={{color:"aqua"}}>Hindi Samitti</i> Club of IITD.</li>
                        <li className='time_line'>2023</li>
                        <li><strong style={{color:"azure"}}>Activity Head</strong> of <i style={{color:"aqua"}}>Rendezvous</i>, Asia's largest college fest.</li>
                    </ul>
                </div>}
            </div>
            
        </div>
    </div>
  )
}

export default About;
