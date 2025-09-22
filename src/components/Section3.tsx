import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Section3() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ['/coupon1.png', '/coupon2.png', '/coupon3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <section
    id="section-3"
    className=" h-screen flex items-center text-white relative overflow-hidden"
    style={{ 
      background: 'radial-gradient(ellipse at center, #E0FE7E 0%, #AEC660 100%)'
    }}
  >
      {/* Gradient Overlay - Darker corners, lighter around images */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_50%,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.2)_30%,_rgba(0,0,0,0.2)_60%,_rgba(0,0,0,0.4)_100%)]"
      />
    
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left half - coupon images with fade effect */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 relative">
            {images.map((image, index) => (
              <Image
                key={image}
                src={image}
                alt="Restaurant coupon"
                width={400}
                height={300}
                className={`w-full max-w-sm sm:max-w-md h-auto object-contain transition-opacity duration-5000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute'
                }`}
                priority={index === 0}
              />
            ))}
          </div>
          
          {/* Right half - text content */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10 p-4">
            <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 text-black animate-slide-up font-serif">
            Unlock unbeatable coupons and dining deals every day.
            </p>
            <p className="text-lg md:text-xl mb-2 text-gray-800 opacity-90 animate-slide-up font-dm serif">
              From top restaurants<br/> to hidden gems, save while you indulge
            </p>

            <p className="text-xs mb-2 text-gray-800 opacity-90 animate-slide-up font-dm serif">
              Download Quddle.ai
            </p>
            
            {/* QR Code */}
            <div className="w-24 h-24 border-2 border-black rounded-lg flex items-center justify-center animate-slide-up p-2 bg-transparent mx-auto md:mx-0">
              <Image
                src="/qr.png"
                alt="QR Code for Quddle.ai"
                width={100}
                height={100}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}