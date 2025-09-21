'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';
import Header from '@/components/Header';
import Section0 from '@/components/Section0';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Section5 from '@/components/Section5';
import MobileNavigation from '@/components/MobileNavigation';
import { useState } from 'react';
export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionIndex: number) => {
    const swiperInstance = (window as unknown as { swiperInstance?: { slideTo: (index: number) => void } }).swiperInstance;
    if (swiperInstance) {
      swiperInstance.slideTo(sectionIndex);
    }
  };

  return (
    <div className="relative">
      {/* Header */}
      <Header currentSection={currentSection} />

      {/* Mobile Navigation */}
      <MobileNavigation 
        currentSection={currentSection}
        scrollToSection={scrollToSection}
        isScrolling={isScrolling}
      />

      {/* Swiper Container */}
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          sensitivity: 1,
          forceToAxis: true,
          releaseOnEdges: true,
        }}
        speed={1000}
        allowTouchMove={true}
        threshold={5}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="h-screen w-full"
        onSlideChange={(swiper) => {
          setCurrentSection(swiper.activeIndex);
        }}
        onSwiper={(swiper) => {
          // Store swiper instance for programmatic navigation
          (window as { swiperInstance?: unknown }).swiperInstance = swiper;
        }}
        onTouchStart={() => setIsScrolling(true)}
        onTouchEnd={() => setIsScrolling(false)}
        onReachEnd={(swiper) => {
          // When user reaches the end (Section5) and tries to scroll further
          if (swiper.activeIndex === 5) {
            // Trigger footer show in Section5
            const section5Element = document.querySelector('#footer-container');
            if (section5Element) {
              section5Element.dispatchEvent(new CustomEvent('showFooter'));
            }
          }
        }}
      >
        {/* Section 0: Short Reel Video / Mobile */}
        <SwiperSlide>
          <Section0 scrollToSection={scrollToSection} />
        </SwiperSlide>

        {/* Section 1: Live Stream */}
        <SwiperSlide>
          <Section1 />
        </SwiperSlide>

        {/* Section 2: Store Seller/Buyer Like Olx */}
        <SwiperSlide>
          <Section2 />
        </SwiperSlide>

        {/* Section 3: Coupons */}
        <SwiperSlide>
          <Section3 />
        </SwiperSlide>

        {/* Section 4: Urban Clap */}
        <SwiperSlide>
          <Section4 />
        </SwiperSlide>

        {/* Section 5: Buy Coin and utilize */}
        <SwiperSlide >
          
          <Section5 currentSection={currentSection} />
        </SwiperSlide>

        
        
      
      </Swiper>
    </div>
  );
}