import { memo } from 'react';

const Hero = () => {
  return (
      <div className="relative w-full min-h-screen flex items-end justify-center">
    <video
    muted
    loop
    autoPlay
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="https://elvemobilya.com/wp-content/uploads/2025/01/elve-home-page-slide-090125-1.mp4"
        />
  <h1 className="relative z-10 text-white text-3xl mb-10">
    Nova Collection
  </h1>
</div>
  );
};

export default memo(Hero);