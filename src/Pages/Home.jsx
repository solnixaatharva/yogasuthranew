
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import Enhances from "../components/Enhance/Enhances";
import Healthy from "../components/Healthy/Healthy";
import Services from "../components/Services/Services";
import Subscribe from "../components/Subscribe/Subscribe";
import Support from "../components/Support/Support";



const Home = () => {
   
    return (
        <div className="w-[100vw] overflow-x-hidden">
            <Banner></Banner>
            <Healthy></Healthy>
            <Services></Services>
            <Enhances></Enhances>
            <Blogs></Blogs>
            <Support></Support>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;