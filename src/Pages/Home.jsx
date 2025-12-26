
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import Enhances from "../components/Enhance/Enhances";
import Welcome from "../components/Home/Welcome";
import NewsEvents from "../components/Home/NewsEvents";
import Packages from "../components/Home/Packages";
import ContactStrip from "../components/Home/ContactStrip";
import Healthy from "../components/Healthy/Healthy";
import Services from "../components/Services/Services";
import Subscribe from "../components/Subscribe/Subscribe";
import Support from "../components/Support/Support";



const Home = () => {
   
    return (
        <div className="w-[100vw] overflow-x-hidden">
            <Banner></Banner>
            <Welcome></Welcome>
            <NewsEvents></NewsEvents>
            <Packages></Packages>
            <Healthy></Healthy>
            <Services></Services>
            <Enhances></Enhances>
            <Blogs></Blogs>
            <Support></Support>
            <ContactStrip></ContactStrip>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;