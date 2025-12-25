
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetail = () => {


    const data = useLoaderData([]);
    // console.log(data);
    const { id } = useParams()
    const service = data.find(item => item.id == id);
    const { img, title, long_dsc } = service || {}

    return (
        <div className='max-w-7xl mx-auto my-5 px-4'>
             <h1 className="text-4xl font-extrabold text-center my-8 text-[#DC2C5C]">SERVICE DETAILS</h1>
            <div className="card lg:card-side bg-base-100 shadow-xl md:my-32 ">
                <figure><img className=' h-full' src={img}alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold text-gray-500">{title}</h2>
                    <p className='text-lg font-semibold text-gray-400 '>{long_dsc}</p>
                    <div className="card-actions justify-end">
                        <button className="btn border text-white bg-[#ED0B5A]">Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;