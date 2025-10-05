import { memo } from 'react';

const AboutComp = () => {
  return (
    <section className='flex flex-col gap-7 w-full py-[70px]'>
        <div className='container flex flex-col gap-5 border-l border-gray-300'>
            <h2 className='text-6xl max-w-[400px] pl-7 font-semibold'>Our Artistic Journey</h2>
            <h3 className='text-xl max-w-[300px] pl-7 font-medium text-gray-700'>Unveiling the Passion, Vision, and Expertise Behind Our Designs</h3>
        </div>
            <div className='w-full bg-gray-300 py-10'>
                <div className='container flex justify-end'>
                   <div className='max-w-[600px] flex flex-col gap-6'>
                     <h2 className='text-white text-2xl'>
                        Designing Dreams: Our Story
                    </h2>
                    <p className='text-white text-[16px]/[1.5]'>
                        At Architronix, design is our canvas, and spaces are our masterpieces. With a vision for elegance, functionality, and innovation, our diverse team curates exceptional spaces and dreams. From cosmopolitan apartments to countryside estates, we're committed to sustainable design practices that enrich lives and the planet.
                    </p>
                    <p className='text-white text-[16px]/[1.5]'>
                        Join us on a journey where every room is a canvas for creativity, and design transcends the ordinary. Together, let's craft your vision, one design at a time.
                    </p>
                   </div>
                </div>
            </div>
            <ul className="flex container items-center justify-between flex-wrap max-[450px]:flex-col max-[450px]:items-baseline">
                <li className="flex flex-col gap-3">
                <span className="font-bold text-5xl">22</span>
                <hr className="w-16 border-t-2 border-gray-400" />
                <span className='text-gray-500 text-2xl'>Years of experience</span>
            </li>
                <li className="flex flex-col gap-3">
                <span className="font-bold text-5xl">282+</span>
                <hr className="w-16 border-t-2 border-gray-400" />
                <span className='text-gray-500 text-2xl'>Projects Completed</span>
            </li>
                <li className="flex flex-col gap-3">
                <span className="font-bold text-5xl">420k</span>
                <hr className="w-16 border-t-2 border-gray-400" />
                <span className='text-gray-500 text-2xl'>Square feet Covered</span>
            </li>
                <li className="flex flex-col gap-3">
                <span className="font-bold text-5xl">93%</span>
                <hr className="w-16 border-t-2 border-gray-400" />
                <span className='text-gray-500 text-2xl'>Positive Feedbacks</span>
            </li>
            
            </ul>
    </section>
  );
};

export default memo(AboutComp);