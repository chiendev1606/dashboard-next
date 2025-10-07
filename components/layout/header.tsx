'use client';
import { useSidebar } from '../ui/sidebar';
import HeaderMobile from './header-mobile';

function Header() {
  const { isMobile } = useSidebar();

  if (isMobile) {
    return <HeaderMobile />;
  }

  return <h1 className="text-2xl font-bold">Welcome back, John Doe</h1>;
}

export default Header;
