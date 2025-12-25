

const Product = ({ product }) => {
    const { dsc, title, img , price } = product || {}

    return (
        <div>
            {
                <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title font-bold text-gray-600">{title}</h2>
                  <p className="text-gray-400">{dsc}</p>
                  <div className="card-actions flex justify-between items-center">
                    <h1 className="text-2xl font-medium text-[#DC2C5C]">${price}</h1>
                    <button className="btn bg-white border-[#DC2C5C] hover:text-white outline-none hover:bg-[#DC2C5C]">Buy Now</button>
                  </div>
                </div>
              </div>
                
            }
        </div>
    );
};

export default Product;