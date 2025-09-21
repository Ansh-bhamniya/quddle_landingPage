interface MobileNavigationProps {
  currentSection: number;
  scrollToSection: (index: number) => void;
  isScrolling: boolean;
}

export default function MobileNavigation({ 
  currentSection, 
  scrollToSection, 
  isScrolling 
}: MobileNavigationProps) {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 md:hidden">
      <div className="flex space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            disabled={isScrolling}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-400'
            } ${isScrolling ? 'opacity-50' : ''}`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}