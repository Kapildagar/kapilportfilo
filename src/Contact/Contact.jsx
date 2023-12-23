
import linkedin from "../assets/linkedin.png"
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import location from '../assets/location.png'
import email from '../assets/mail.png'
import { Link } from "react-router-dom"
const Contact = () => {
    return (
        <>
            <div className="flex flex-col sm:flex sm:flex-row sm:justify-around sm:items-start items-center my-10">
                <div className="flex flex-col py-5">
                <h1 className="text-white text-3xl w-fit my-5 mx-auto">Contact To Me</h1>
                <div className="flex flex-col sm:flex mx-auto w-fit my-3">
                    <div className="flex justify-start items-center gap-5 my-3 "><img className="w-6" src={location} /><h2 className="text-[#808dad68] text-[18px]"> Planet Earth 🌎</h2></div>
                    <div className="flex justify-start items-center gap-5 my-3 "><img className="w-6" src={email} /><h2 className="text-[#808dad68] text-[18px]">dagarkapil187@gmail.com</h2></div>
                    <div className="flex gap-5 items-center justify-start">
                        <a href="https://github.com/Kapildagar" className="hover:[#02C56D]"><img className="w-5 hover:[#02C56D]" src={github} /></a>
                        <Link to="https://www.linkedin.com/in/kapil-dagar-0596b1252"><img className="w-5" src={linkedin} /></Link>
                        <a href=""><img className="w-5" src={twitter} /></a>
                    </div>
                </div>
                </div>
                <div className="py-5">
                    <h1 className="text-[#02C56D] text-3xl my-5">--Contact me</h1>
                    <div className="flex flex-col gap-5">
                       <input type="text" placeholder="Your Full Name" className="w-72 h-10 rounded-md bg-[#808dad68]  px-3 text-white"></input>
                       <input type="text" placeholder="Enter Email" className="w-72 h-10 rounded-md bg-[#808dad68] px-3 text-white"></input>
                       <textarea cols="5" rows="5" className="rounded-md px-2 pt-3 bg-[#808dad68] text-white" placeholder="Your Message"  />
                       <button type="submit" className="bg-blue-500 hover:bg-blue-600 h-10 rounded-md text-white text-center ">Send Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact