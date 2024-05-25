import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import emailjs from "@emailjs/browser"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Contact.css"
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [subject, setSubject] = useState("");
    const [msg, setMsg] = useState("");
    const data = {
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_TEMPLATE_ID,
        user_id: process.env.REACT_APP_USER_ID,
        template_params: {
            from_name: name,
            from_email: email,
            to_name: 'Vivek',
            message: subject,
        }
    };
    const send = (e) => {
        console.log(data.service_id)
        e.preventDefault();
        if (name==="" || email==="" || subject==="" || msg===""){
            return toast.error('All fields are required!!!')
        }
        else{
            const id=toast.loading('Sending Message...')
            emailjs.send(data.service_id, data.template_id, data.template_params, data.user_id)
                .then((result) => {
                    console.log(result.text);
                    toast.dismiss(id);
                    toast.success("Message sent successfully, will reply ASAP!!")
                    setName("");
                    setMail("");
                    setSubject("");
                    setMsg("");
                }, (error) => {
                    console.log(error.text);
                    toast.dismiss(id);
                    toast.error("Leave email using Gmail, server seems down!!")
                });
            }
    }
    return (
        <div style={{ backgroundColor: "#20232F" }}>
            <Navbar />
            <Toaster position='top-right' />
            <div className="contact_form" style={{ padding: "20px" }} data-aos="zoom-out">
                <div className="getintouch">
                    <h2>Get In Touch</h2>
                </div>
                <div className="details">
                    <div className="message">
                        <div className="name_email">
                            <input className="inputcss" type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                            <input className="inputcss" type="email" placeholder="Email" value={email} onChange={(e) => setMail(e.target.value)} required />
                        </div>
                        <div className="others">
                            <input className="inputcss" type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                            <textarea className="textareacss" type="text" rows={4} placeholder="Message..." value={msg} onChange={(e) => setMsg(e.target.value)} required></textarea>
                            <button type="submit" onClick={send}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
