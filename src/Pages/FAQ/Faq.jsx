import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Faq = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div className="max-w-7xl mx-auto">
            <h1 data-aos="flip-up" className="text-4xl font-extrabold text-center my-8 text-[#DC2C5C]">FAQ</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div data-aos="fade-right">
                    <div className="join join-vertical w-full px-4 py-8">
                        <div className="collapse collapse-arrow join-item border border-base-300 text-white bg-[#DC2C5C]">
                            <input type="radio" name="my-accordion-4" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                                How will my order be delivered to me?
                            </div>
                            <div className="collapse-content">
                                <p>To get specific information about the delivery of your order, you should refer to the confirmation email or order tracking information provided by the company you ordered from. If you have questions or concerns about your order delivery, it s best to contact the companys customer service or support team for assistance.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                What do I need to know?
                            </div>
                            <div className="collapse-content">
                                <p>Remember that knowledge is a continuous process, and what you need to know may evolve over time. Its essential to stay curious, open to learning, and adaptable to new information and experiences.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300 text-white bg-[#DC2C5C]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                How will know if order is placed successfully?
                            </div>
                            <div className="collapse-content">
                                <p>To know if your order has been placed successfully, you typically receive confirmation and notification messages from the company or website where you made the purchase.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                How do i check the status of my order?
                            </div>
                            <div className="collapse-content">
                                <p>Remember that the availability of order tracking and the level of detail provided can vary depending on the company you ordered from and the shipping method used. Additionally, it may take some time for tracking information to become available after you receive your order confirmation, so be patient if you do not see immediate updates. If you have concerns about the delivery or status of your order</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300 text-white bg-[#DC2C5C]">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Can i cancel my order?
                            </div>
                            <div className="collapse-content">
                                <p>Whether or not you can cancel your order depends on several factors, including the company s policies, the stage of processing your order is in, and the specific terms and conditions of your purchase. Here are some general steps you can take if you want to cancel an order</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <img className=" p-4 mt-4 " src={'https://i.ibb.co/fFc9QRQ/banner3-1060x.webp'} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Faq;