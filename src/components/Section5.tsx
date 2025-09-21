import Image from 'next/image';
import { useState } from 'react';
import Footer from './Footer';
import { Button } from '@/components/ui/Button';

interface Section5Props {
  currentSection?: number;
}

export default function Section5({ currentSection = 5 }: Section5Props) {
  const [showFooter, setShowFooter] = useState(false);

  // Remove automatic footer showing - now controlled by buttons
  // useEffect(() => {
  //   if (currentSection === 5) {
  //     const timer = setTimeout(() => {
  //       setShowFooter(true);
  //     }, 1000);
  //     return () => clearTimeout(timer);
  //   } else {
  //     setShowFooter(false);
  //   }
  // }, [currentSection]);

  const handleShowFooter = () => {
    setShowFooter(true);
  };

  const handleCloseFooter = () => {
    setShowFooter(false);
  };
  return (
    <>
    <section
      id="section-5"
      className="h-screen relative overflow-hidden"
      style={{ backgroundColor: '#3E39FF' }}
    >
      {/* Gradient Overlay - Center to Corners */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0.1)_30%,_rgba(0,0,0,0.1)_60%,_rgba(0,0,0,0.3)_100%)]"
      />
      {/* Left side coin - coming from left screen */}
      <div className="absolute top-20 -left-20 z-10">
        <Image
          src="/coin4.png"
          alt="Golden coin"
          width={480}
          height={300}
          className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 object-contain animate-fade-in"
          priority
        />
      </div>

      {/* Right side coin - coming from right screen */}
      <div className="absolute top-20 -right-10 z-10">
        <Image
          src="/coin6.png"
          alt="Golden coin"
          width={420}
          height={420}
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain animate-fade-in"
          priority
        />
      </div>   

      {/* Bottom center coin stacks */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
        <Image
          src="/stack2.png"
          alt="Golden coin stacks"
          width={800}
          height={400}
          className="w-96 h-56 sm:w-[28rem] sm:h-[18rem] md:w-[32rem] md:h-[20rem] lg:w-[40rem] lg:h-[24rem] xl:w-[48rem] xl:h-[28rem] 2xl:w-[56rem] 2xl:h-[32rem] object-contain animate-fade-in"
          priority
        />
      </div>

      {/* Bottom right coin */}
      <div className="absolute bottom-16 right-8 z-10 ">
        <Image
          src="/coin5.png"
          alt="Golden coin"
          width={200}
          height={200}
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 xl:w-48 xl:h-48 object-contain animate-fade-in"
          priority
        />
      </div>      

      {/* Main content - Always full screen */}
      <div className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-32 text-center z-20">
          {/* Main Headlines */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-serif mb-2 animate-slide-up">
            Spend Smarter
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white font-serif mb-2 animate-slide-up">
            Shop, Save, and Shine with Coins
          </h2>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white opacity-90 font-dm serif mb-6 animate-slide-up">
            While you shop, let coins add extra value
          </p>

          {/* Download subtitle */}
          <p className="text-xs sm:text-sm md:text-base mb-2 text-white opacity-90 animate-slide-up font-dm serif">
            Download Quddle.ai
          </p>
          
          {/* QR Code */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-white rounded-lg shadow-lg flex items-center justify-center animate-slide-up p-2 mx-auto">
            <Image
              src="/qr.png"
              alt="QR Code for Quddle.ai"
              width={100}
              height={100}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Show Footer Button */}
          <div className="mt-8 flex justify-center items-center animate-slide-up">
            <Button
              onClick={handleShowFooter}
              className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Show Footer
            </Button>
          </div>
        </div>
      </div>

    </section>  
      
    {/* Footer - Shows when in Section5 */}
    {showFooter && (
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <Footer onClose={handleCloseFooter} />
      </div>
    )}
    
    </>
  );
}