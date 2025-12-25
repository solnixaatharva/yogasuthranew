import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const AboutUs = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <h1 data-aos="flip-up" className="text-4xl font-extrabold text-center my-8 text-[#DC2C5C]">ABOUT</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 justify-center items-center" >
                <div data-aos="fade-right">
                    <img className="hover:border-[#DC2C5C] border-white transition duration-700 ease-in-out  border-t-8 border-l-8" src={'https://i.ibb.co/bmRDftV/about01-770x.webp'} alt="" />
                </div>
                <div data-aos="fade-left">
                    <h1 className="text-2xl font-bold text-[#DC2C5C]">Feel Relax After Meditation</h1>
                    <p className="text-gray-400 font-medium">After-school programs at Boys & Girls Clubs supports the kids of all walks of life. Doing well in a game helps them to excel in academics as well. This year’s Back2School retail partners and their patrons will ensure Club members have the resources. Scholarships are available for talented students</p>
                </div>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 justify-center items-center" >
                
                <div data-aos="fade-right">
                    <h1 className="text-2xl font-bold text-[#DC2C5C]">Rachel Yoga</h1>
                    <p className="text-gray-400 font-medium">Our very own Rachel Scott maintains a blog that’s noteworthy for its openness, humour and lively style. The blog is a window into Rachel’s soul as she explores life through yoga. It’s a different approach to yoga blogging and it works. But don’t take my not-so-objective word for it. Check it out for yourself.</p>
                </div>
                <div data-aos="fade-left">
                    <img className="hover:border-[#DC2C5C] border-white transition duration-700 ease-in-out  border-r-8 border-t-8" src={'https://i.ibb.co/wC6YM3D/about003-d85a9cb4-d856-42e0-85ae-aa744e21e11a-600x.webp'} alt="" />
                </div>
            </div>


            <div className="my-0 md:my-12">
               
                <h1 className="text-2xl font-bold text-center my-8 text-gray-500">Our Brands</h1>
                <marquee direction="0.5s" className='text-3xl font-semibold '>
                    <div className="flex gap-20 mb-5">
                        <img src={'https://i.ibb.co/vs3WrKB/Screenshot-2023-10-07-225646.png'} alt="" />
                        <img src={'https://i.ibb.co/99mmVPv/Screenshot-2023-10-07-225726.png'} alt="" />
                        <img src={'https://i.ibb.co/dtKj38c/Screenshot-202gd3-10-07-225821.png'} alt="" />
                        <img src={'https://i.ibb.co/FH4w791/Screenshot-2023-10-07-hh225757.png'} alt="" />
                    </div>
                </marquee>
            </div>

        </div>
    );
};

export default AboutUs;