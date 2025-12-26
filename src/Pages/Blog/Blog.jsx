import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { articles } from "../../data/articles";
import { Link } from "react-router-dom";

const Articles = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])

    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <h1 data-aos="flip-up" className="text-4xl font-extrabold text-center my-8 text-brand">ARTICLES</h1>

            <div data-aos="fade-up" className="grid sm:grid-cols-2 gap-6">
                {articles.map(article => (
                    <article key={article.slug} className="rounded-lg overflow-hidden shadow-sm border bg-white">
                        <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                            <p className="text-neutral-700 mb-4 leading-relaxed">{article.excerpt}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-neutral-500">{article.date}</span>
                                <Link to={`/articles/${article.slug}`} className="text-sun font-semibold">Read more</Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <section data-aos="fade-up" className="mt-10">
                <h2 className="text-2xl font-semibold mb-3">Common questions answered</h2>
                <div className="space-y-4 text-neutral-700">
                    <div>
                        <h3 className="font-semibold">What are the causes of diseases?</h3>
                        <p className="leading-relaxed">According to the traditional approach, disease arises when natural balance is disturbed — due to poor diet, accumulated toxins, stress, and lifestyle choices that conflict with natural rhythms. Restoring balance via diet, cleansing, and therapeutic practices is central to treatment.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">What is Sapta Yoga Therapy?</h3>
                        <p className="leading-relaxed">It is a combined clinical system that integrates ancient wisdom and practical therapies to treat musculo‑skeletal, neuro and chronic disorders. Treatments may include tailored yoga practices, herbal or naturopathic remedies, marma therapy and lifestyle counseling.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">What about kids and yoga?</h3>
                        <p className="leading-relaxed">Children benefit from age‑appropriate yoga practices that improve focus, flexibility and emotional regulation. Sessions should be gentle and play‑based, led by instructors familiar with pediatric adaptations.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">What about seniors and yoga?</h3>
                        <p className="leading-relaxed">Older adults can gain strength, balance and pain relief from gentle, adaptive routines. Programs emphasize safety, joint protection and restorative practices to support mobility and vitality.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">What about prenatal yoga?</h3>
                        <p className="leading-relaxed">Prenatal yoga supports expectant mothers through breathing, gentle stretching and relaxation techniques. It should be practiced under guidance and modified to accommodate each stage of pregnancy.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">Is yoga just another fitness fad?</h3>
                        <p className="leading-relaxed">Not at all. While yoga is widely used for fitness, its broader purpose is lifelong health and self‑development. Traditional yoga offers a framework of practice and ethics that supports a healthy and balanced life beyond temporary trends.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">What are the health benefits of yoga?</h3>
                        <p className="leading-relaxed">Benefits include improved flexibility, strength, stress reduction, better sleep, and enhanced mental clarity. Combined with therapeutic approaches, yoga can support recovery from chronic conditions and improve quality of life.</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">What should be worn during yoga?</h3>
                        <p className="leading-relaxed">Comfortable, breathable clothes that allow movement are ideal. Avoid overly loose garments that can get in the way of alignment, and choose fabrics that wick moisture for active practices.</p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Articles;