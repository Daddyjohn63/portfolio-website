import Image from 'next/image';

const PortfolioSection = () => {
  return (
    <div className="py-[100px] ">
      <div className="flex bg-neutral-800 items-center justify-center py-16">
        <h2 className="text-white text-3xl z-100">My Work</h2>
      </div>
      <div className="flex pb-[100px] items-center justify-center bg-neutral-800">
        <div className="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-120">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="/images/img3.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h3 className="font-dmserif text-2xl font-bold text-white">
                Victorian Dresses
              </h3>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore
                adipisci placeat.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-120">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="/images/img4.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h3 className="font-dmserif text-2xl font-bold text-white">
                Mens Waistcoat & Jacket
              </h3>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore
                adipisci placeat.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-120">
              <Image
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src="/images/img6.jpg"
                alt=""
                width={400}
                height={400}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h3 className="font-dmserif text-2xl font-bold text-white">
                Victorian Corsets
              </h3>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore
                adipisci placeat.
              </p>
              <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioSection;
