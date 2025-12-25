// ...existing code...
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css';

const ServiceCard = ({ service }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const { title, img, dsc, id } = service || {};

  return (
    <div>
      <div data-aos="fade-right" className="shadow-md border-t-8 hover:border-t-[#ED0B5A] rounded-lg overflow-hidden bg-base-100">
        <figure className="h-56 w-full overflow-hidden">
          <img
            src={img || '/images/placeholder.jpg'}
            alt={title || 'service'}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title font-bold text-gray-500">{title}</h2>
          <p className="text-md text-gray-400 font-semibold text-justify">
            {dsc}{" "}
            <Link to={`/serviceDetail/${id}`} className="text-[#ED0B5A] underline font-bold">
              See Details.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
// ...existing code...