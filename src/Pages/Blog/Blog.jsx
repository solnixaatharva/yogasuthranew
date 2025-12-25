import { BsCalendar2 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { AiFillTag } from "react-icons/ai";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Blog = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return (
        <div className="max-w-7xl mx-auto">
            <h1 data-aos="flip-up" className="text-4xl font-extrabold text-center my-8 text-[#DC2C5C]">BLOG</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 my-4">

                <div data-aos="fade-right" className="  bg-base-100 border">
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
                <div data-aos="fade-left" className="  bg-base-100 border">
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
                <div data-aos="fade-right" className="  bg-base-100 border">
                    <figure><img src={'https://i.ibb.co/xJ1brvB/blog11.webp'} alt="Shoes" /></figure>
                    <div className="flex justify-evenly text-sm text-[#9E9E9E] py-4 font-bold items-center">
                        <h1 className="flex gap-2 items-center">
                             <BsCalendar2 className="text-[#ED0B5A] text-lg"></BsCalendar2> 
                             December 8, 2021</h1>
                        <h1 className="flex items-center gap-2"><FaUser className="text-[#ED0B5A] text-lg"></FaUser> by Rony Ahmed</h1>
                    </div>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">GOOD EXERCISE FOR KINEE</h2>
                        <p className="text-gray-400">Exercises to strengthen the knees and improve knee joint health are important for maintaining mobility and preventing knee-related issues. However, it's crucial to approach knee exercises with caution and to consult with a healthcare professional or physical therapist if you have existing knee pain or injuries.</p>
                        <p className="py-4 flex gap-2 items-center"> 
                        <AiFillTag className="text-[#ED0B5A] text-lg"></AiFillTag>
                        Romman ,Exercise, Yoga</p>
                        <button className="hover:bg-[#ED0B5A] bg-white rounded-lg border  w-[100px] py-2 hover:text-white">Read More</button>
                    </div>

                </div>
                <div data-aos="fade-left"  className="  bg-base-100 border">
                    <figure><img src={'https://i.ibb.co/5MPF8x0/blog9.webp'} alt="Shoes" /></figure>
                    <div className="flex justify-evenly text-sm text-[#9E9E9E] py-4 font-bold items-center">
                        <h1 className="flex gap-2 items-center">
                             <BsCalendar2 className="text-[#ED0B5A] text-lg"></BsCalendar2> 
                             November 9, 2022</h1>
                        <h1 className="flex items-center gap-2"><FaUser className="text-[#ED0B5A] text-lg"></FaUser> by Rony Ahmed</h1>
                    </div>
                    <hr />
                    <div className="card-body">
                        <h2 className="card-title">ASANAS IMPROVE STRENGTH</h2>
                        <p className="text-gray-400">It's important to practice these poses with proper alignment and under the guidance of a qualified yoga instructor, especially if you're a beginner or have any pre-existing health conditions or injuries. Gradually progressing in your yoga practice will help you safely and effectively improve your strength over time.</p>
                        <p className="py-4 flex gap-2 items-center"> 
                        <AiFillTag className="text-[#ED0B5A] text-lg"></AiFillTag>
                        Shad jak ,Exercise</p>
                        <button className="hover:bg-[#ED0B5A] bg-white rounded-lg border  w-[100px] py-2 hover:text-white">Read More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;