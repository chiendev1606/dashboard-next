'use client';
import { useSidebar } from '../ui/sidebar';
import HeaderMobile from './header-mobile';

function Header() {
  const { isMobile } = useSidebar();

  if (isMobile) {
    return <HeaderMobile />;
  }

  return <div>Header</div>;
}

export default Header;
