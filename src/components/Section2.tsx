import Image from 'next/image';
export default function Section2() {
    return (
      <section
        id="section-0"
        className=" h-screen flex items-center text-white relative overflow-hidden "
        style={{ backgroundColor: '#A45DFA' }}
      >
        {/* Radial Gradient - Light around image, darker to top left */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_85%_85%,_rgba(255,255,255,0.3)_0%,_rgba(255,255,255,0.1)_20%,_rgba(0,0,0,0.1)_40%,_rgba(0,0,0,0.3)_70%,_rgba(0,0,0,0.5)_100%)]"
        />
  
      <div className="container mx-auto px-2 sm:px-4 flex flex-col md:flex-row items-center justify-center h-full">
          {/* Left Half: Text Content - Full width on mobile, 1/3 on desktop */}

          
          <div className="w-full md:w-1/3 text-center md:text-left z-10 p-4">
              <p className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 text-white animate-slide-up font-serif">
                Discover 250+ categories waiting for you
              </p>

            <p className="text-lg md:text-xl text-white opacity-90 animate-slide-up font-dm serif">
              From fashion-forward clothes to must have sneakers.
            </p>
            <p className="text-lg md:text-xl mb-2 text-white opacity-90 animate-slide-up font-dm serif">
              Dive into cutting-edge electronics and standout sports gear
            </p>            
            <p className="text-xs  mb-2 text-white opacity-90 animate-slide-up font-dm serif">
              Download Quddle.ai
            </p>
            {/* QR Code */}
            <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center animate-slide-up p-2 mx-auto md:mx-0">
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
          <div className="hidden md:flex w-2/3 justify-center items-center z-10 p-4">
            {/* This space is now available for content like images, videos, etc. */}
          </div>
        </div>
  
      {/* Camera with Box Image - Bottom Right */}
      <div className="absolute bottom-4 right-4 z-20 transform translate-x-1/3 translate-y-1/4">
        <Image
          src="/cart.png"
          alt="Camera and equipment box"
          width={600}
          height={650}
          className="w-auto h-auto object-contain animate-fade-in"
          priority
        />
      </div>
  
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-800 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    );
}

// <section
//   id="section-2"
//   className=" h-screen flex items-center justify-center text-white bg-gradient-to-tr from-red-500 via-purple-600 to-pink-500"
// >
//   {/* Your content here */}

//  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
//         {/* Left Half: Text Content */}
//         <div className="w-full md:w-1/2 text-center md:text-left z-10 p-4 md:pr-8">
//           <p className="text-2xl md:text-7xl lg:text-2xl font-bold mb-1 animate-fade-in text-white font-serif">
//             Catch the hype live
//           </p>
//           <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-white animate-slide-up font-serif">
//             In Real Time.
//           </p>
//           <p className="text-lg md:text-xl mb-6 text-white opacity-90 animate-slide-up font-serif">
//             Dive into the buzz, live and in the moment.
//           </p>
//           <p className="text-xs mb-2 text-white opacity-90 animate-slide-up font-serif">
//             Download Quddle.ai
//           </p>
          
//           {/* QR Code */}
//           <div className="w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center animate-slide-up p-2 mx-auto md:mx-0">
//             <Image
//               src="/qr.png"
//               alt="QR Code for Quddle.ai"
//               width={100}
//               height={100}
//               className="w-full h-full object-contain"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Half: Empty or for future content */}
//         <div className="w-full md:w-1/2 flex justify-center items-center z-10 p-4">
//           {/* This space is now available for content like images, videos, etc. */}
//         </div>
//       </div>

//       {/* Camera with Box Image - Bottom Right */}
//       <div className="absolute bottom-4 right-4 z-20">
//         <Image
//           src="/cart.png"
//           alt="Camera and equipment box"
//           width={600}
//           height={650}
//           className="w-auto h-auto max-w-[200px] max-h-[250px] object-contain animate-fade-in"
//           priority
//         />
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
//         <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
//         </div>
//       </div>
//     </section>