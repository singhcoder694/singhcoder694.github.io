import React, {useEffect} from "react"
import "./Image.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Photo(){
    useEffect(()=>{
        AOS.init({
            duration:2000
        });
    },[]);
    return (
        <div>
            <div className="my_image" data-aos="zoom-out">
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    
                <defs>                         
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            
                    <stop id="stop1" stopColor="rgba(0, 249.961, 255, 1)" offset="0%"></stop>                            
                    <stop id="stop2" stop-color="rgba(31, 180.815, 251, 1)" offset="100%"></stop>                        
                </linearGradient>                    
                </defs> 
                <mask id="mask1" mask-type="alpha">
                <path fill="url(#sw-gradient)" d="M23.3,-25.4C31.1,-21.2,39,-14.7,41.3,-6.6C43.6,1.6,40.3,11.5,34.1,17.2C27.8,22.8,18.6,24.2,10.3,26.4C2.1,28.6,-5.2,31.4,-10.2,29.2C-15.2,26.9,-17.9,19.4,-22,12.6C-26.1,5.8,-31.5,-0.4,-33,-8.2C-34.5,-16.1,-32,-25.6,-25.9,-30.2C-19.7,-34.7,-9.8,-34.1,-1.1,-32.9C7.7,-31.6,15.5,-29.6,23.3,-25.4Z" width="100%" height="100%" transform="translate(40 40)" strokeWidth="0" style={{transition: "all 0.3s ease 0s"}}></path> 
                </mask> 
                <g mask="url(#mask1)">             
                <path fill="url(#sw-gradient)" d="M23.3,-25.4C31.1,-21.2,39,-14.7,41.3,-6.6C43.6,1.6,40.3,11.5,34.1,17.2C27.8,22.8,18.6,24.2,10.3,26.4C2.1,28.6,-5.2,31.4,-10.2,29.2C-15.2,26.9,-17.9,19.4,-22,12.6C-26.1,5.8,-31.5,-0.4,-33,-8.2C-34.5,-16.1,-32,-25.6,-25.9,-30.2C-19.7,-34.7,-9.8,-34.1,-1.1,-32.9C7.7,-31.6,15.5,-29.6,23.3,-25.4Z" width="100%" height="100%" transform="translate(40 40)" stroke-width="0" style={{transition: "all 0.3s ease 0s"}}></path>   
                <image data-aos="fade-up-right" x='19' y='9'  href={process.env.PUBLIC_URL+ "images/my_photo.png"} preserveAspectRatio="xMaxYMax slice"></image>
                </g>           
                </svg>
                
            </div>
            </div>
    )
}
export default Photo;