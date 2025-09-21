// 'use client';

// import { useEffect } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register GSAP plugins
// if (typeof window !== 'undefined') {
//   gsap.registerPlugin(ScrollTrigger);
// }

// export const useGSAPAnimations = () => {
//   useEffect(() => {
//     // GSAP animations for various elements
//     const ctx = gsap.context(() => {
//       // Phone/mobile elements slide in from right
//       gsap.fromTo(".gsap-phone", 
//         { x: 200, opacity: 0 },
//         { 
//           x: 0, 
//           opacity: 1, 
//           duration: 1.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: "#section-1",
//             start: "top 70%",
//             end: "bottom 30%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // Marketplace text appears with stagger
//       gsap.fromTo(".gsap-marketplace-text > *", 
//         { y: 50, opacity: 0 },
//         { 
//           y: 0, 
//           opacity: 1, 
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: "#section-1",
//             start: "top 60%",
//             end: "bottom 30%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // QR Code floats in
//       gsap.fromTo(".gsap-qr-code", 
//         { scale: 0, rotation: 180, opacity: 0 },
//         { 
//           scale: 1, 
//           rotation: 0,
//           opacity: 1, 
//           duration: 1,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: "#section-1",
//             start: "top 50%",
//             end: "bottom 30%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // Equipment box floats in from right
//       gsap.fromTo(".gsap-equipment-box", 
//         { x: 300, y: -50, opacity: 0, rotation: 10 },
//         { 
//           x: 0, 
//           y: 0,
//           rotation: 0,
//           opacity: 1, 
//           duration: 1.5,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: "#section-1",
//             start: "top 40%",
//             end: "bottom 30%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // Frame 1 image animation (for the main marketplace image)
//       gsap.fromTo(".gsap-frame1-image", 
//         { x: 300, opacity: 0, scale: 0.8, rotation: 5 },
//         { 
//           x: 0, 
//           opacity: 1, 
//           scale: 1,
//           rotation: 0,
//           duration: 1.5,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: "#section-1",
//             start: "top 70%",
//             end: "bottom 30%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // Section 2 mobile details
//       gsap.fromTo(".mobile-detail", 
//         { scale: 0.8, opacity: 0, y: 100 },
//         { 
//           scale: 1, 
//           opacity: 1, 
//           y: 0,
//           duration: 1.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: "#section-2",
//             start: "top 70%",
//             end: "bottom 30%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );

//       // Floating elements animation
//       gsap.fromTo(".floating-element", 
//         { y: 20, opacity: 0 },
//         { 
//           y: 0, 
//           opacity: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: "#section-2",
//             start: "top 60%",
//             end: "bottom 30%",
//             toggleActions: "play none none reverse"
//           }
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   // Return utility class names for easy reference
//   return {
//     phoneClass: "gsap-phone",
//     marketplaceTextClass: "gsap-marketplace-text",
//     qrCodeClass: "gsap-qr-code",
//     equipmentBoxClass: "gsap-equipment-box",
//     frame1ImageClass: "gsap-frame1-image"
//   };
// };