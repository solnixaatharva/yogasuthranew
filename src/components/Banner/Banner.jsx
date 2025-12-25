

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/znZWYMP/slider3.webp'} className="w-full relative" />
                    <div className="absolute top-[10%] left-[10%] md:top-[35%] md:left-[15%] lg:top-[30%]  text-center">
                        <h5 className="text-lg md:text-2xl lg:text-4xl font-bold  text-white">8 EXCLUSIVE COLORS INTRODUCED</h5>
                        <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold text-white">YOGA STRECH <br /> BANDS</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-transparent md:bg-white">❮</a>
                        <a href="#slide2" className="btn btn-circle btn-sm md:btn-md bg-transparent md:bg-white ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/pXcWsRy/slider.webphttps://i.ibb.co/pXcWsRy/slider.webp'} className="w-full relative" />
                    <div className="absolute top-[30%] left-[10%] lg:top-[40%] md:top-[40%] md:left-[40%] lg:left-[35%] text-center">
                        <h5 className="text-lg md:text-2xl lg:text-4xl font-bold  text-white">BUY TOW AND GET ONE FREE</h5>
                        <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold text-white">YOGA MATS </h1>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-transparent md:bg-white">❮</a>
                        <a href="#slide3" className="btn btn-circle btn-sm md:btn-md bg-transparent md:bg-white">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={'https://i.ibb.co/pz4Y4Pd/slider2.webp'} className="w-full relative" />
                    <div className="absolute top-[10%] left-[10%] md:top-[30%] md:left-[10%] text-center">
                        <h5 className="text-lg md:text-2xl lg:text-4xl font-bold  text-white">YOGA PRESENTS</h5>
                        <h1 className="text-4xl md:text-5xl lg:text-9xl font-bold text-white">FITNESS <br /> ACCESSORIES</h1>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-sm md:btn-md bg-transparent md:bg-white">❮</a>
                        <a href="#slide1" className="btn btn-circle btn-sm md:btn-md bg-transparent md:bg-white">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;