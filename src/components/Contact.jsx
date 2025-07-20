import { useState,useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import {ToastContainer, toast} from'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'
import { fadeIn } from '../framerMotion/variants';

export default function Contact(){
    const form=useRef();
    const [isSent,setIsSent]=useState(false);

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs
        .sendForm(
            "service_9cg5fbm",
            "template_lla5ciw",
            form.current,
            "Rmu5EAEkv12CbN2-x",
        ).then(()=>{
            setIsSent(true);
            form.current.reset();
            toast.success("Message sent successfully!",{
                position:"top-right",
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick: true,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
            });
        },
    (error)=>{
        toast.error("Error Sending Message.",error);
        toast.error("Failed to send Message. Please Try Again.",{
                position:"top-right",
                autoClose:3000,
                hideProgressBar:false,
                closeOnClick: true,
                pauseOnHover:true,
                draggable:true,
                theme:'dark'
            });

    })
    }

    return(
        <section id="contact" className="flex flex-col items-center justify-center px-[12vw] md:px-[7vw] lg:px-[7vw] ">
            <hr className="border-t border-white w-full mb-25" />
            <ToastContainer/>
            <div className='text-center mb-16'>
                <motion.h2 variants={fadeIn('up',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once:true,amount:0}}className='text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4'>Contact</motion.h2>
                <motion.p variants={fadeIn('up',0.4)}
          initial='hidden'
          whileInView='show'
          viewport={{once:true,amount:0}}className='text-gray-400 mt-4 text-lg font-semibold '>I'd love to hear from you-reach out for any opportunities or question!</motion.p>    
            </div>

            <motion.div variants={fadeIn('up',0.4)}
          initial='hidden'
          whileInView='show'
          viewport={{once:true,amount:0.5}}className="mt-8 w-full max-w-md bg-gray-800/20 backdrop-blur-md p-6 rounded-lg shadow-2xl border border-gray-700 shadow-[0_0_20px_1px_rgba(168,85,247,0.5)]">
                <h3 className="text-xl font-semibold text-white text-center ">
                    Connect With Me
                </h3>

                <form ref={form} onSubmit={sendEmail} className="mt-4 flex flex-col space-y-4">
                    <input type="email" name="user_email" placeholder="Your Email" required 
                    className="w-full p-3 rounded-md bg-gray-800/20 text-white border border-gray-600 focus:outline-none focus:border-white/60"/>
                    <input type="text" name="user_name" placeholder="Your Name" required 
                    className="w-full p-3 rounded-md bg-gray-800/20 text-white border border-gray-600 focus:outline-none focus:border-white/60"/>
                    <input type="text" name="subject" placeholder="Subject" required 
                    className="w-full p-3 rounded-md bg-gray-800/20 text-white border border-gray-600 focus:outline-none focus:border-white/60"/>
                    <textarea name="message" placeholder="Message" rows={4}
                    className="w-full p-3 rounded-md bg-gray-800/20 text-white border border-gray-600 focus:outline-none focus:border-white/60"></textarea>

                    <button type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-lg text-white font-semibold rounded-md hover:opacity-90 transition flex items-center justify-center cursor-pointer ">
                        Send&nbsp;&nbsp;<FaPaperPlane/>
                    </button>
                </form>
            </motion.div>


        </section>
    );
}