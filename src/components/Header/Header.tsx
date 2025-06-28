import { useEffect, useState } from 'react'
import './Header.css'
import { HeaderMobile } from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    window.addEventListener('resize', handleResize);

    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isMobile ? <HeaderMobile /> : <HeaderDesktop />
  )
}

export default Header