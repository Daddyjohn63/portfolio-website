import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Reveal from '@/components/common/ScrollAnimation';
import Title from '@/components/common/Title';
import { aboutUsData } from './AboutUsData';

const AboutIntro = () => {
  return (
    <div className="py-20">
      <div className="container">
        <Title subTitle="Jackie Paul" title="My Journey" primary={true} />
        <div className="grid md:grid-cols-2 lg:gap-16 gap-10 items-center">
          {/* ABOUT IMAGE SIDE */}
          <Reveal from={200}>
            <div className="grid grid-cols-1 gap-5 w-full relative h-fit">
              {aboutUsData?.aboutImage?.map((img, index) => (
                <Reveal from={100} key={index}>
                  <div className="image">
                    <Image
                      src={img}
                      alt="About Image"
                      className={twMerge(
                        'w-full h-full sm:min-h-[550px] min-h-[450px] object-cover rounded-lg',
                        index === 1 && 'mt-20'
                      )}
                      width={550}
                      height={550}
                      priority
                    />
                  </div>
                </Reveal>
              ))}
              {/* <div className="flex items-center gap-3 w-fit py-4 px-6 bg-primary absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-100 rounded-md">
                <h2 className="text-6xl font-bold">6</h2>
                <p className="text-2xl">Years Of Journey</p>
              </div> */}
            </div>
          </Reveal>
          {/* ABOUT IMAGE SIDE */}

          {/* ABOUT CONTENT */}
          <Reveal from={200}>
            <div>
              <p className={` text-justify transition-all`}>
                {aboutUsData?.aboutDescription}
              </p>

              {/* POINTS */}
              <ul className="mt-8 grid lg:grid-cols-2 gap-1 w-full">
                {aboutUsData?.keyPoints.map((point, i) => (
                  <div className="flex flex-col md:flex-row md:gap-2 gap-2" key={i}>
                    <span className="text-5xl text-gray-500">
                      <point.icon />
                    </span>
                    <div>
                      <h5 className="text-[1.2rem] font-medium">{point.title}</h5>
                      <p className=" text-gray-600 ">{point.description}</p>
                    </div>
                  </div>
                ))}
              </ul>
              {/* POINTS */}
            </div>
          </Reveal>
          {/* ABOUT CONTENT */}
        </div>
      </div>
    </div>
  );
};
export default AboutIntro;
