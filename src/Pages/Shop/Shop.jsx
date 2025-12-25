import { useEffect, useState } from "react";
import Product from "../../components/ProductCard/Product";
import Aos from "aos";
import 'aos/dist/aos.css'


const Shop = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('/shop.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    // console.log(products);

    return (
        <div className="max-w-7xl mx-auto my-8">
            <h1  data-aos="flip-up" className="text-4xl font-extrabold text-center my-8 text-[#DC2C5C]">SHOP</h1>
            <div  data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
                {
                    products.map((product) => (
                        <Product key={product.id} product={product}></Product>
                    ))
                }
            </div>
        </div>
    );
};

export default Shop;