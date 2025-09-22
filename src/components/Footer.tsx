import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp, FaSnapchatGhost, FaTelegramPlane } from "react-icons/fa";
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import DataRoom from './ui/DataRoom';

interface SocialIconProps {
  icon: React.ReactNode;
  bgColor?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon, bgColor = "bg-gray-400" }) => {
  return (
    <div className={`w-4 h-4 rounded-full flex items-center justify-center text-white ${bgColor}`}>
      {icon}
    </div>
  );
};

interface FooterProps {
  onClose?: () => void;
}

export default function Footer({ onClose }: FooterProps) {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isDataRoomModalOpen, setIsDataRoomModalOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDataRoomClick = () => {
    setIsDataRoomModalOpen(true);
  };

  const handleCloseDataRoomModal = () => {
    setIsDataRoomModalOpen(false);
  };

  const languages = [
    { name: 'English', code: 'en' },
    { name: 'Spanish', code: 'es' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Arabic', code: 'ar' },
    { name: 'French', code: 'fr' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, bgColor: 'bg-pink-500' },
    { name: 'Facebook', icon: FaFacebookF, bgColor: 'bg-blue-600' },
    { name: 'LinkedIn', icon: FaLinkedinIn, bgColor: 'bg-blue-700' },
    { name: 'YouTube', icon: FaYoutube, bgColor: 'bg-red-600' },
    { name: 'Twitter', icon: FaTwitter, bgColor: 'bg-blue-400' },
    { name: 'WhatsApp', icon: FaWhatsapp, bgColor: 'bg-green-500' },
    { name: 'Snapchat', icon: FaSnapchatGhost, bgColor: 'bg-yellow-400' },
    { name: 'Telegram', icon: FaTelegramPlane, bgColor: 'bg-blue-500' },
  ];

  return (
    <footer className="h-[33vh] text-white flex items-center justify-center relative shadow-2xl" style={{ 
      background: `
        linear-gradient(to bottom, #424242 0%, #2a2a2a 100%),
        radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%),
        radial-gradient(circle at 40% 80%, rgba(0,0,0,0.1) 0%, transparent 50%)
      `,
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 20px rgba(0,0,0,0.3)'
    }}>
      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close footer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}
      
      {/* Footer Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm-custom:flex-row items-center sm-custom:items-start justify-between w-full gap-6 sm-custom:gap-0">
          {/* Left Side - Logo and Copyright */}
          <div className="flex flex-col items-center sm-custom:items-start gap-4">
            {/* Quddle.ai Logo */}
            <Logo size="lg" showText={true} isScrolled={true} />
            
            {/* Copyright and Legal Text - Responsive Layout */}
            <div className="text-sm text-white flex flex-wrap items-center justify-center sm-custom:justify-start gap-2 sm-custom:gap-4">
              <span>@ 2025 Quddle.ai</span>
              <span>Terms</span>
              <span>Privacy</span>
              <button 
                onClick={handleDataRoomClick}
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Data Room
              </button>
              <span>Manage Cookies</span>
              
              {/* Language Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
                >
                  <span>{selectedLanguage}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isLanguageDropdownOpen && (
                  <div className="absolute bottom-full left-0 mb-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50 min-w-[120px]">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.name);
                          setIsLanguageDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-700 transition-colors ${
                          selectedLanguage === language.name ? 'bg-gray-700 text-white' : 'text-gray-300'
                        }`}
                      >
                        {language.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Social Media Icons - Responsive Layout */}
          <div className="flex flex-col gap-4 sm-custom:gap-8">
            {/* Mobile: Single Row with 4 icons */}
            <div className="flex gap-4 sm-custom:hidden">
              {socialLinks.slice(0, 4).map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div key={index} className="flex items-center gap-2 cursor-pointer">
                    <SocialIcon icon={<IconComponent className="w-2 h-2" />} bgColor={social.bgColor} />
                    <span className="text-xs text-gray-300">{social.name}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Mobile: Second Row with 4 icons */}
            <div className="flex gap-4 sm-custom:hidden">
              {socialLinks.slice(4, 8).map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div key={index} className="flex items-center gap-2 cursor-pointer">
                    <SocialIcon icon={<IconComponent className="w-2 h-2" />} bgColor={social.bgColor} />
                    <span className="text-xs text-gray-300">{social.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Desktop: Two Rows (hidden on mobile) */}
            <div className="hidden sm-custom:flex flex-col gap-8">
              {/* First Row */}
              <div className="flex gap-6 p-1">
                {socialLinks.slice(0, 4).map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 cursor-pointer">
                      <SocialIcon icon={<IconComponent className="w-2 h-2" />} bgColor={social.bgColor} />
                      <span className="text-sm text-gray-300">{social.name}</span>
                    </div>
                  );
                })}
              </div>
              
              {/* Second Row */}
              <div className="flex gap-6 p-1">
                {socialLinks.slice(4, 8).map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 cursor-pointer">
                      <SocialIcon icon={<IconComponent className="w-2 h-2" />} bgColor={social.bgColor} />
                      <span className="text-sm text-gray-300">{social.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Room Modal */}
      <DataRoom 
        isOpen={isDataRoomModalOpen} 
        onClose={handleCloseDataRoomModal} 
      />
    </footer>
  );
}
