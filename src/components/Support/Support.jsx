import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Support = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return (
        <div>
            <div className="max-w-7xl mx-auto px-2 md:px-2 lg:px-0">
                <div data-aos="zoom-in-down" className="mt-20 text-center  ">
                    <div className="flex justify-center">
                        <img className="" src={'https://i.ibb.co/GVYkfDx/Screenshot-2023-10-07-041440.png'} alt="" />
                    </div>
                    <h1 className="text-4xl font-bold">OUR SUPPORT</h1>
                    <p className="text-lg text-gray-500 mt-5">Yoga is a type of exercise that focuses on strength, flexibility,   breathing and relaxation. <br /> After a single session participants experience benefits like lower blood pressure and improved mood. Yoga is popular <br /> in the United States and can be a nice benefit to offer to your event participants.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5" >
                    <div data-aos="fade-right" className="border bg-[#F9F9F9] p-10 flex gap-5 items-center">
                        <div>
                            <img src={'https://i.ibb.co/LNmYRGP/icon01-55x-52afeae4-afe2-44ae-b041-516b3cb1589f-200x200.png'} alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">FREE DELIVERY</h1>
                            <p className="text-sm font-normal text-gray-600">Provide genuine service & store products</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="border bg-[#F9F9F9] p-10 flex gap-5 items-center">
                        <div>
                            <img src={'https://i.ibb.co/D7wS03m/icon02-55x-094ee02f-6a3e-4ad7-a6a8-c065092b209a-200x200.png'} alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">24/7 CUSTOMER SUPPORT</h1>
                            <p className="text-sm font-normal text-gray-600">Single click to buy & return products</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="border bg-[#F9F9F9] p-10 flex gap-5 items-center">
                        <div>
                            <img src={'https://i.ibb.co/SmcFVcb/icon03-55x-0ef9ee6b-d619-434a-88ce-af69005f4cf1-200x200.png'} alt="" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">RETURN OF GOODS</h1>
                            <p className="text-sm font-normal text-gray-600">Accepts all credit & debit cards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;