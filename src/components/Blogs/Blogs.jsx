import { AiFillTag } from "react-icons/ai";
import { BsCalendar2 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Blogs = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div className="max-w-7xl mx-auto" >
            <div data-aos="zoom-in-down"   className="my-10 text-center  ">
                <div className="flex justify-center">
                    <img className="" src={'https://i.ibb.co/GVYkfDx/Screenshot-2023-10-07-041440.png'} alt="" />
                </div>
                <h1 className="text-4xl font-bold">OUR BLOGS</h1>
                <p className="text-lg text-gray-500 mt-5"> Our very own Rachel Scott maintains a blog that’s noteworthy for its openness,<br /> humour and lively style. The blog is a window into Rachel’s soul as she explores life through yoga</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">

                <div data-aos="fade-up-right"  className="  bg-base-100 border">
                    <figure><img src={'https://i.ibb.co/G5tMjK5/blog8.webp'} alt="Shoes" /></figure>
                    <div className="flex justify-evenly text-sm text-[#9E9E9E] py-4 font-bold items-center">
                        <h1 className="flex gap-2 items-center">
                            <BsCalendar2 className="text-[#ED0B5A] text-lg"></BsCalendar2>
                            August 4, 2020</h1>
                        <h1 className="flex items-center gap-2"><FaUser className="text-[#ED0B5A] text-lg"></FaUser> by Roy don</h1>
                    </div>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">
                            THE SYMBOL FOR ASANAS</h2>
                        <p className="text-gray-400">If you are looking for information or resources related to specific yoga poses or asanas, it's best to refer to reputable yoga books, websites, or seek guidance from a qualified yoga instructor who can provide you with detailed instructions and demonstrations for each posture.</p>
                        <p className="py-4 flex gap-2 items-center">
                            <AiFillTag className="text-[#ED0B5A] text-lg"></AiFillTag>
                            Bony ,Exercise</p>
                        <button className="hover:bg-[#ED0B5A] bg-white rounded-lg border  w-[100px] py-2 hover:text-white">Read More</button>
                    </div>

                </div>
                <div data-aos="fade-up-left" className="  bg-base-100 border">
                    <figure><img src={'https://i.ibb.co/Jj5CrBh/blog10.webp'} alt="Shoes" /></figure>
                    <div className="flex justify-evenly text-sm text-[#9E9E9E] py-4 font-bold items-center">
                        <h1 className="flex gap-2 items-center">
                            <BsCalendar2 className="text-[#ED0B5A] text-lg"></BsCalendar2>
                            November 3, 2021</h1>
                        <h1 className="flex items-center gap-2"><FaUser className="text-[#ED0B5A] text-lg"></FaUser> by Rony Ahmed</h1>
                    </div>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">GOOD EXERCISE FOR BACK</h2>
                        <p className="text-gray-400">In yoga, there isn't a universal symbol or logo that represents all asanas (yoga postures). Yoga postures are typically taught and practiced through physical demonstration and verbal guidance rather than through symbols. Each asana has its own name and specific physical alignment.</p>
                        <p className="py-4 flex gap-2 items-center">
                            <AiFillTag className="text-[#ED0B5A] text-lg"></AiFillTag>
                            Romman ,Exercise</p>
                        <button className="hover:bg-[#ED0B5A] bg-white rounded-lg border  w-[100px] py-2 hover:text-white">Read More</button>
                    </div>

                </div>
            </div>
            <div className="flex justify-center items-center mt-4">
                <Link to='/blog' className="hover:bg-[#ED0B5A] bg-white rounded-lg border px-4 text-center  py-2 hover:text-white">All Blogs</Link>
            </div>
        </div>
    );
};

export default Blogs;