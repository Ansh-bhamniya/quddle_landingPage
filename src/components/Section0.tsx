'use client';

import Image from 'next/image';

interface Section0Props {
  scrollToSection: (index: number) => void;
}

export default function Section0({  }: Section0Props) {
  return (
    <section
      id="section-0"
      className=" h-screen flex items-center text-white relative overflow-hidden "
      style={{ backgroundColor: '#EFCF45' }}
    >
      {/* Gradient Overlay - Focused on iPhone image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_50%,_rgba(239,207,69,0.8)_0%,_rgba(239,207,69,0.4)_25%,_rgba(239,207,69,0.1)_50%,_rgba(0,0,0,0.2)_75%,_rgba(0,0,0,0.5)_100%)]"
      />



      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between h-full">
          {/* Left Half: iPhone Image */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 relative z-10">
            <Image
              src="/tab_iphone2.png"
              alt="iPhone showing Quddle.ai app"
              width={600}
              height={600}
              className="w-full max-w-lg h-auto object-contain animate-fade-in"
              priority
            />
          </div>
          
          {/* Right Half: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10 p-4 relative z-10">
          <p className="text-2xl md:text-7xl lg:text-2xl font-bold mb-1 animate-fade-in text-gray-900 font-serif">
            Stream.Shop.Shine
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-gray-900 animate-slide-up font-serif">
            AI Driven Marketplace.
          </p>

          <p className="text-xs mb-2 text-gray-800 opacity-90 animate-slide-up font-dm serif">
            Download Quddle.ai
          </p>
          {/* QR Code */}
          <div className="w-24 h-24 border-2 border-black rounded-lg flex items-center justify-center animate-slide-up p-2 bg-transparent">
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

      {/* Camera with Box Image - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-20 transform translate-x-1/3 translate-y-1/4">
        <Image
          src="/camera_with_box.png"
          alt="Camera and equipment box"
          width={600}
          height={650}
          className="w-auto h-auto object-contain animate-fade-in"
          priority
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-gray-800 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-800 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}