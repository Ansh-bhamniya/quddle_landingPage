import Image from 'next/image';

export default function Section1() {
  return (
    <section
      id="section-1"
      className=" h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/nnn9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="container mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center justify-center h-full relative z-20">
        {/* Left Half: Text Content - Full width on mobile, half on desktop */}
        <div className="w-full md:w-1/2 text-center md:text-left z-20 p-4 md:pr-8">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 animate-fade-in text-white font-serif">
            Catch the hype live
          </p>
          <p className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 text-white animate-slide-up font-serif">
            In Real Time
          </p>
          <p className="text-lg md:text-xl mb-6 text-white opacity-90 animate-slide-up font-dm serif">
            Dive into the buzz and live in the moment
          </p>
          <p className="text-xs mb-2 text-white opacity-90 animate-slide-up font-dm serif">
            Download Quddle.ai
          </p>
          
          {/* QR Code */}
          <div className="w-28 h-28 sm:w-24 sm:h-24 bg-white rounded-lg flex items-center justify-center animate-slide-up p-2 mx-auto md:mx-0">
            <Image
              src="/newqr2.png"
              alt="QR Code for Quddle.ai"
              width={100}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Right Half: Hidden on mobile, visible on desktop */}
        <div className="hidden md:flex w-1/2 justify-center items-center z-20 p-4">
          {/* This space is now available for content like images, videos, etc. */}
        </div>
      </div>

      {/* Camera with Box Image - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-20 transform translate-x-1/3 translate-y-1/4">
        {/* Camera equipment can go here if needed */}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
    </section>
  );
}