'use client';
// import { useLayout } from '@/context/layout-provider';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';

import Logo from '@/public/logo';
import { sidebarData } from './data/sidebar-data';
import { NavItem } from './nav-item';

export function AppSidebar() {
  const { state, isMobile } = useSidebar();

  return (
    <Sidebar
      collapsible={'icon'}
      variant={'sidebar'}
    >
      <SidebarHeader className="flex justify-center items-center">
        {!isMobile && (
          <div className="flex items-center gap-0.5">
            <Logo />
            {state === 'expanded' && <span className="text-lg font-semibold">SupportMe</span>}
          </div>
        )}
      </SidebarHeader>
      <SidebarContent className="px-2 list-none">
        {sidebarData.navItems.map((props) => (
          <NavItem
            href={props.url}
            item={props}
            key={props.title}
          />
        ))}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={sidebarData.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
