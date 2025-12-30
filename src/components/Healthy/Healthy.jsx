import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Healthy = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="bg-none flower-bg lg:bg-[url('https://i.ibb.co/tJ6fRKZ/images.jpg')]   w-full ">
            <div className="max-w-7xl mx-auto my-10 px-3 md:px-2 lg:0">
                <div>
                    <div data-aos="fade-up" className="mt-20 text-center ">
                        <div className="flex justify-center">
                            <img
                                src="/images/newyogasuthralogo.jpeg"
                                alt="decor"
                                className="w-40 h-auto"
                            />
                        </div>

                        <h1 className="text-4xl font-bold">LIVE HEALTHY LIFE</h1>
                        <p className="text-lg text-gray-500 mt-5">Yoga can be a wonderful perk to add to your event. And it requires only a small <br /> investment: the fee for one instructor, and setting aside a nice space. If you can, go and attend a class with the instructor you hire</p>
                    </div>
                    <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-5 gap-10 -z-10 mt-10">
                        <div className="  rounded-lg md:px-14 py-10 text-white md:col-span-2 ">

                            <div className="h-96 border  md:-mr-44 carousel carousel-vertical rounded-box">

                                <div className="carousel-item h-full ">
                                    {/* <img src={'https://i.ibb.co/L5vhJxH/pdt1-600x.webp'} /> */}
                                    <div className="card card-compact bg-neutral-100  shadow-xl">
                                        <figure><img className="relative" src={'public/images/products/pro_1.jpg'} alt="Shoes" /></figure>
                                        <div className="absolute z-10 top-4 -left-7 flex justify-center items-center">
                                            <p className="px-8 py-2 bg-brand rounded-full  text-center text-xl font-bold ">25% OFF</p>
                                        </div>
                                        <div className="card-body text-center ">
                                            <h2 className="text-3xl font-bold text-center text-neutral-800 p-2"> </h2>
                                            <p className="text-lg text-brand font-medium p-2 ">From ₹299.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-full ">
                                    {/* <img src={'https://i.ibb.co/L5vhJxH/pdt1-600x.webp'} /> */}
                                    <div className="card card-compact bg-neutral-100  shadow-xl">
                                        <figure><img className="relative" src={'public/images/products/pro_2.jpg'} alt="Shoes" /></figure>
                                        <div className="absolute z-10 top-4 -left-7 flex justify-center items-center">
                                            <p className="px-8 py-2 bg-brand rounded-full  text-center text-xl font-bold ">25% OFF</p>
                                        </div>
                                        <div className="card-body text-center ">
                                            <h2 className="text-3xl font-bold text-center text-neutral-800 p-2"> </h2>
                                            <p className="text-lg text-brand font-medium p-2 ">From ₹299.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-full ">
                                    {/* <img src={'https://i.ibb.co/L5vhJxH/pdt1-600x.webp'} /> */}
                                    <div className="card card-compact bg-neutral-100  shadow-xl">
                                        <figure><img className="relative" src={'public/images/products/pro_3.jpg'} alt="Shoes" /></figure>
                                        <div className="absolute z-10 top-4 -left-7 flex justify-center items-center">
                                            <p className="px-8 py-2 bg-brand rounded-full  text-center text-xl font-bold ">25% OFF</p>
                                        </div>
                                        <div className="card-body text-center ">
                                            <h2 className="text-3xl font-bold text-center text-neutral-800 p-2"> </h2>
                                            <p className="text-lg text-brand font-medium p-2 ">From ₹299.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item h-full ">
                                    {/* <img src={'https://i.ibb.co/L5vhJxH/pdt1-600x.webp'} /> */}
                                    <div className="card card-compact bg-neutral-100  shadow-xl">
                                        <figure><img className="relative " src={'public/images/products/pro_4.jpg'} alt="Shoes" /></figure>
                                        <div className="absolute z-10 top-4 -left-7 flex justify-center items-center">
                                            <p className="px-8 py-2 bg-brand rounded-full  text-center text-xl font-bold ">25% OFF</p>
                                        </div>
                                        <div className="card-body text-center ">
                                            <h2 className="text-3xl font-bold text-center text-neutral-800 p-2"> </h2>
                                            <p className="text-lg text-brand font-medium p-2 ">From ₹299.00</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="  bg-brand rounded-lg md:pl-40 px-4 md:px-14 py-10 text-white md:col-span-3">
                            <h5 className="text-xl md:text-2xl lg:text-3xl font-bold pb-3">THE LARGEST SALE STARTING THIS WEEK</h5>
                            <hr />
                            <h1 className="font-bold text-3xl md:text-4xl  lg:text-6xl py-3">DISCOUNT OFFER</h1>
                            <hr />
                            <h4 className="text-xl font-semibold text-gray-100 pt-4">
                                llentesque aliquet sed magna consequat venenatis. Ut fermentum viverra porta. Nullam dui
                            </h4>
                            <button className="bg-white text-gray-500 outline-none mt-5 hover:text-white hover:bg-coral transition duration-300 delay-150 hover:delay-300	 rounded-full py-2 px-4 text-md">View All Collections</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Healthy;