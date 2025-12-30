import { AiFillTag } from "react-icons/ai";
import { BsCalendar2 } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { articles } from "../../data/articles";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Blogs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className="max-w-7xl mx-auto" >
            <div data-aos="zoom-in-down" className="my-10 text-center  ">
                <div className="flex justify-center">
                    <img
                        src="/images/newyogasuthralogo.jpeg"
                        alt="decor"
                        className="w-40 h-auto"
                    />
                </div>

                <h1 className="text-4xl font-bold">OUR ARTICLES</h1>
                <p className="text-lg text-gray-500 mt-5">Curated articles about yogic philosophy, therapies and practices to help you understand Yogasuthra's approach and benefits.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                {articles.slice(0, 4).map((a, i) => (
                    <div key={a.slug} data-aos={i % 2 === 0 ? "fade-up-right" : "fade-up-left"} className="bg-base-100 border rounded-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex justify-between items-center text-sm text-neutral-400 mb-3">
                                <div className="flex items-center gap-2"><BsCalendar2 className="text-accent text-lg" /><span>{a.date}</span></div>
                                <div className="flex items-center gap-2"><FaUser className="text-[#ED0B5A] text-lg" /><span>Yogasuthra</span></div>
                            </div>

                            <h2 className="text-xl font-semibold mb-2">{a.title}</h2>
                            <p className="text-gray-400 mb-4">{a.excerpt}</p>

                            <div className="flex items-center justify-between">
                                <p className="py-2 flex gap-2 items-center text-sm text-neutral-500"><AiFillTag className="text-accent text-lg" /> Sapta Yoga</p>
                                <Link to={`/articles/${a.slug}`} className="hover:bg-[#ED0B5A] bg-white rounded-lg border  w-[100px] py-2 text-center hover:text-white">Read More</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-4">
                <Link to='/articles' className="hover:bg-accent bg-white rounded-lg border px-4 text-center  py-2 hover:text-white">All Articles</Link>
            </div>
        </div>
    );
};

export default Blogs;