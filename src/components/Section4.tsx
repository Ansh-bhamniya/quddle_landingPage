import Image from 'next/image';

export default function Section4() {
  
  return (
    <section
      id="section-4"
      className=" h-screen flex items-center justify-center text-white relative overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at 85% 70%, #FF6B9D 0%, #E91E63 30%, #C2185B 100%, #8E24AA 100%)'
      }}
    >
      {/* Additional gradient overlay for more depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_50%,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0.05)_20%,_rgba(0,0,0,0.1)_60%,_rgba(0,0,0,0.2)_100%)]"
      />
      <div className="container mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center justify-center h-full">
          {/* Left Half: Text Content - Full width on mobile, aligned with header logo on desktop */}
          <div className="w-full text-center sm-custom:text-left z-10 p-4 sm-custom:pl-4 sm-custom:max-w-none">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 animate-fade-in text-white font-serif">
                Book trusted props for every chore, big or small
              </p>
              <p className="text-sm md:text-base lg:text-lg  text-white opacity-90 animate-slide-up font-dm serif whitespace-nowrap">
                Form beauty and grooming to home fixes
              </p>
              <p className="text-sm md:text-base lg:text-lg mb-6 text-white opacity-90 animate-slide-up font-dm serif whitespace-nowrap">
                Services at your doorstep, fast, easy, and stress-free
              </p>              
            <p className="text-xs mb-2 text-white opacity-90 animate-slide-up font-dm serif">
              Download Quddle.ai
            </p>
            {/* QR Code */}
            <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center animate-slide-up p-2 mx-auto sm-custom:mx-0">
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
      </div>

      {/* Clean1 Image - Right Side Edge - Hidden on screens < 600px */}
      <div className="hidden sm-custom:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 z-20">
        <Image
          src="/clean1.png"
          alt="Cleaning supplies"
          width={300}
          height={400}
          className="w-auto h-96 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] xl:h-[40rem] object-contain"
          priority
        />
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