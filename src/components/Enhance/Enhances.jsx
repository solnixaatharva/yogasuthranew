import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Enhances = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div data-aos="zoom-in" className="flower-bg my-10 bg-cover w-full h-96 bg-[url('https://i.ibb.co/n03WxFJ/banner04-2048x.webp')]">
            <div className="max-w-7xl mx-auto">
                <div className="text-left p-4 text-white">
                    <h2></h2>
                    <h1 className="text-5xl font-bold p-4">ENHANCES YOUR LIFE</h1>
                    <p className="p-4 text-justify font-medium">Marques posuere orci lobortis scelerisque blandit. Donec id tellus lacinia an, <br /> tincidunt risus ac, consequat velit. Quisquemos sodales suscipit tortor <br /> ditaemcos condimentum...</p>
                    <button className="py-2 border md:border-none px-4 rounded-full bg-white m-4 text-black font-normal">SHOP NOW</button>
                </div>
            </div>
        </div>
    );
};

export default Enhances;