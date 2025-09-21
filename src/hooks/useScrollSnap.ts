import { useState, useEffect, useCallback } from 'react';

export function useScrollSnap(totalSections: number) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= totalSections) return;
    
    setIsScrolling(true);
    const section = document.getElementById(`section-${index}`);
    section?.scrollIntoView({ behavior: 'smooth' });
    
    // Reset scrolling state after animation
    setTimeout(() => setIsScrolling(false), 1000);
  }, [totalSections]);

  const scrollToNext = useCallback(() => {
    if (currentSection < totalSections - 1) {
      scrollToSection(currentSection + 1);
    }
  }, [currentSection, totalSections, scrollToSection]);

  const scrollToPrevious = useCallback(() => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  }, [currentSection, scrollToSection]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = document.querySelectorAll('.snap-section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setCurrentSection(index);
        }
      });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        event.preventDefault();
        scrollToNext();
      } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault();
        scrollToPrevious();
      } else if (event.key === 'Home') {
        event.preventDefault();
        scrollToSection(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        scrollToSection(totalSections - 1);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) {
        event.preventDefault();
        return;
      }

      const delta = event.deltaY;
      if (delta > 0) {
        // Scrolling down
        scrollToNext();
      } else if (delta < 0) {
        // Scrolling up
        scrollToPrevious();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection, totalSections, isScrolling, scrollToNext, scrollToPrevious, scrollToSection]);

  return {
    currentSection,
    scrollToSection,
    scrollToNext,
    scrollToPrevious,
    isScrolling,
  };
}
