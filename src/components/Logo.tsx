import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  isScrolled?: boolean;
  isInSection2?: boolean;
  isInSection3?: boolean;
  isInSection4?: boolean;
  isInSection5?: boolean;
  isInSection1?: boolean;
}

export default function Logo({ size = 'md', showText = true, className = '', isScrolled = false, isInSection2 = false, isInSection3 = false, isInSection4 = false, isInSection5 = false, isInSection1 = false }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',   // 24px
    md: 'w-8 h-8',   // 32px
    lg: 'w-12 h-12', // 48px
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl',
  };

  return (
    <Link
      href="/"
      className={`flex items-center space-x-2 cursor-pointer group ${className}`}
    >
      <Image
        src="/logo2.gif"
        alt="Quddle AI Logo"
        width={48}   // intrinsic size
        height={48}
        unoptimized 
        priority
        className={`${sizeClasses[size]} object-contain group-hover:scale-105 transition-transform duration-200`}
      />
      {showText && (
        <span
          className={`${textSizeClasses[size]} font-bold transition-colors duration-300 ${
            isInSection2 || isInSection3
              ? 'text-black group-hover:text-white'
              : (isInSection1 || isInSection4 || isInSection5)
                ? 'text-white group-hover:text-black'
                : isScrolled
                  ? 'text-white group-hover:text-gray-200'
                  : 'text-black group-hover:text-gray-200'
          } transition-colors duration-200 font-serif`}
        >
          Quddle.ai
        </span>
      )}
    </Link>
  );
}