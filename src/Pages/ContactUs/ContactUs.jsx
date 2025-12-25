import { AiFillMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ContactUs = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <div >
                <h1  data-aos="flip-up" className="text-4xl font-extrabold text-center my-8 text-brand">CONTACT</h1>
                <div className="w-full h-96 my-6">
                    <iframe
                        className="w-full h-full border-0"
                        src="https://maps.google.com/maps?q=%23119%2C%20Rakshapuram%20Layout%20Phase%201%2C%20Bettahalasuru%2C%20Bengaluru%2C%20Karnataka%20562157&z=15&output=embed"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Yogasuthra - Bengaluru branch"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5 md:px-4 lg:px-2 px-2">
                    <div data-aos="fade-right"  className="border p-4 text-start">
                        <div className="text-4xl">
                            <BsFillTelephoneFill></BsFillTelephoneFill>
                        </div>
                        <h1 className="text-2xl font-semibold">Phone</h1>
                        <p className=" text-sm font-normal py-2 text-gray-400">8714066177</p>
                    </div>
                    <div data-aos="fade-up" className="border p-4 text-start">
                        <div className="text-4xl">
                            <AiFillMail></AiFillMail>
                        </div>
                        <h1 className="text-2xl font-semibold">Email</h1>
                        <p className=" text-sm font-normal py-2 text-gray-400">info@yogasuthra.in</p>
                    </div>
                    <div data-aos="fade-left"  className="border p-4 text-start">
                        <div className="text-4xl">
                            <FaLocationArrow></FaLocationArrow>
                        </div>
                        <h1 className="text-2xl font-semibold">Address</h1>
                        <p className=" text-sm font-normal py-2 text-gray-400">bengaluru</p>
                    </div>
                </div>

                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 p-4">
                    <div className="border p-6 rounded bg-neutral-50">
                        <h2 className="text-xl font-bold mb-2">Muzhappilangad branch:</h2>
                        <p className="text-sm text-gray-700">Koodakadavu Beach Road, Vivekananda Nagar, near Mohanan Peedika, Muzhappilangad, Kannur, Kerala - 670662.</p>
                        <p className="text-sm text-gray-700 mt-2">Phone: 8714066177</p>
                        <p className="text-sm text-gray-700 mt-2">Email: <a href="mailto:info@yogasuthra.in" className="underline">info@yogasuthra.in</a></p>
                    </div>
                    <div className="border p-6 rounded bg-neutral-50">
                        <h2 className="text-xl font-bold mb-2">Yogasuthra - Bengaluru branch:</h2>
                        <p className="text-sm text-gray-700">#119, Rakshapuram Layout Phase 1, Bettahalasuru, Bengaluru, Karnataka - 562157</p>
                        <p className="text-sm text-gray-700 mt-2">Phone: +91 99 7266 2166, +91 89 5130 2979</p>
                        <p className="text-sm text-gray-700 mt-2">Email: <a href="mailto:info@yogasuthra.in" className="underline">info@yogasuthra.in</a></p>
                    </div>
                </div>

                {/* form  */}
                <div  data-aos="flip-up" className="">

                    <form className="card-body px-4 md:px-96">
                        <div className="form-control">
                            <input type="text" placeholder="Name" className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <input type="email" placeholder="Email" className="input input-bordered rounded-full my-4" required />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Phone" className="input input-bordered rounded-full" required />
                        </div>
                        <div className="form-control">
                            <textarea name="text" className="border outline-none rounded-lg p-4 " placeholder="Message....." id="" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                    <div className="form-control mb-6 flex  items-center">
                        <button className="btn w-32 rounded-full bg-brand text-white hover:text-black">Send</button>
                    </div>
                </div>



            </div>
        </div>
    );
};
/*ashfahfh*/

export default ContactUs;