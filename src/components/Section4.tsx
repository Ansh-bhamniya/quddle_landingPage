import Image from 'next/image';

export default function Section4() {
  
  return (
    <section
      id="section-4"
      className=" h-screen flex items-center justify-center text-white relative overflow-hidden"
      style={{ 
        background: 'radial-gradient(ellipse at 85% 50%, #FF6B9D 0%, #E91E63 30%, #C2185B 70%, #8E24AA 100%)'
      }}
    >
      {/* Additional gradient overlay for more depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_25%_50%,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0.05)_20%,_rgba(0,0,0,0.1)_60%,_rgba(0,0,0,0.2)_100%)]"
      />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
          {/* Left Half: Text Content */}
          <div className="w-full md:w-1/3 text-left md:text-left z-10 p-4">
              <p className="text-4xl md:text-8xl lg:text-3xl font-bold mb-1 animate-fade-in text-white font-serif">
                Book trusted pros for every chore
              </p>
              <p className="text-sm md:text-base lg:text-lg mb-6 text-white opacity-90 animate-slide-up font-dm serif whitespace-nowrap">
                Fast, easy services delivered right to your door!
              </p>
            <p className="text-xs mb-2 text-white opacity-90 animate-slide-up font-dm serif">
              Download Quddle.ai
            </p>
            {/* QR Code */}
            <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center animate-slide-up p-2">
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
    </section>
  );
}