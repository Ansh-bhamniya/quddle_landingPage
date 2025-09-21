import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp, FaSnapchatGhost, FaTelegramPlane } from "react-icons/fa";
import Logo from './Logo';

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
        <div className="flex items-start justify-between w-full">
          {/* Left Side - Logo and Copyright */}
          <div className="flex flex-col items-start gap-4">
            {/* Quddle.ai Logo */}
            <Logo size="lg" showText={true} isScrolled={true} />
            
            {/* Copyright and Legal Text in One Line */}
            <div className="text-sm text-white">
              <span>@ 2025 Quddle.ai</span>
              <span className="mx-2">Terms</span>
              <span className="mx-2">Privacy</span>
              <span>Data Room</span>
            </div>
          </div>

          {/* Right Side - Social Media Icons - Two Columns */}
          <div className="flex gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {socialLinks.slice(0, 4).map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div key={index} className="flex items-center gap-3 hover:scale-110 transition-transform cursor-pointer">
                    <SocialIcon icon={<IconComponent className="w-2 h-2" />} bgColor={social.bgColor} />
                    <span className="text-sm text-gray-300 min-w-[80px]">{social.name}</span>
                  </div>
                );
              })}
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {socialLinks.slice(4, 8).map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <div key={index} className="flex items-center gap-3 hover:scale-110 transition-transform cursor-pointer">
                    <SocialIcon icon={<IconComponent className="w-2 h-2" />} bgColor={social.bgColor} />
                    <span className="text-sm text-gray-300 min-w-[80px]">{social.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
