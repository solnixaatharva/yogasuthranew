import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Yogasuthra = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    return (
        <div className="max-w-7xl mx-auto px-20 py-25">
            <div data-aos="fade-up" className="text-center mb-8">
                <img src="http://yogasuthra.in/images/yoga1.jpg" alt="yoga" className="mx-auto w-72 md:w-[520px] lg:w-[1400px] mb-6 rounded" />
                <h1 className="text-4xl font-extrabold">YOGASUTHRA</h1>
                <p className="text-gray-600 mt-4">A unique Yogasuthra centre focused on holistic health and traditional treatment systems.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Yogasuthra Darshanam</h2>
                    <p className="text-gray-700 mb-4">Pranam at the lotus feet of the great benevolent ancient yoga guru Sree Pathanjali Maharshi who showered on us the yogamrutham through his vision of YOGASUTHRAS. The 195 suthras given in yogasuthra are for the well being and success of humanity. To know and understand one’s inner soul which is beyond the five indriyas, Yogasuthra is the route.</p>

                    <h3 className="text-xl font-semibold mt-4">Twenty Five Principles used in Sapta Yoga Treatment</h3>
                    <ol className="list-decimal list-inside mt-3 text-gray-700 space-y-2">
                        <li>Garbage free leads to disease free</li>
                        <li>Relief medication treatment</li>
                        <li>Treat body and mind for disease free life</li>
                        <li>Disease free life without medicine and mantras</li>
                        <li>Manthras and Thantras help disease control</li>
                        <li>Treatment utilizing principles of five elements</li>
                        <li>Treatment with water</li>
                        <li>Ottamooli treatment</li>
                        <li>Kayakalpa Treatment</li>
                        <li>Panchendriya Chikitsa</li>
                        <li>Treatment through Food Restriction & Fasting</li>
                        <li>Energy Flow Treatment</li>
                        <li>Hata Yoga</li>
                        <li>Nature Cure Therapy</li>
                        <li>ThriDosha Treatment</li>
                        <li>Pancha Karma Treatment</li>
                        <li>Shad (Six) Kriya Chikilsa</li>
                        <li>Injury Treatment</li>
                        <li>Neuro-Musculo & Skeletal Disorders</li>
                        <li>Marma Chikilsa</li>
                        <li>Nadi Chikilsa</li>
                        <li>Upadesha and Atmagnana Route Therapy</li>
                        <li>Relaxation and Meditation Technique</li>
                        <li>Reflexology Treatment</li>
                        <li>Yogasuthra Ayushman Treatment</li>
                    </ol>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Treatment Philosophy & Highlights</h3>
                    <p className="text-gray-700 mt-3">Yogasuthra aims to treat both body and mind using a combination of yogic principles, traditional mantras, natural therapies and specialized treatments listed above. The center emphasizes prevention, cleansing, and natural healing.</p>

                    <h3 className="text-xl font-semibold mt-6">Services & Treatments</h3>
                    <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
                        <li>Relief medication treatment</li>
                        <li>Kayakalpa & Pancha Karma</li>
                        <li>Marma & Nadi Chikilsa</li>
                        <li>Energy Flow & Reflexology Treatment</li>
                        <li>Hata Yoga & Meditation Programs</li>
                        <li>Nature Cure & Food Restriction Therapy</li>
                    </ul>

                    <div className="mt-6 p-4 border rounded bg-neutral-50">
                        <h4 className="font-bold">Contact / Quick Links</h4>
                        <p className="text-sm text-gray-700 mt-2">Email: <a href="mailto:info@yogasuthra.in" className="underline">info@yogasuthra.in</a></p>
                        <p className="text-sm text-gray-700">Phone: +91 99 7266 2166, +91 89 5130 2979</p>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Yogasuthra;