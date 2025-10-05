'use client';
import { SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import Link from 'next/link';
import { type NavLink } from './types';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function NavItem({ item, href }: { item: NavLink; href: string }) {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip={item.title}
        className="text-base h-10 rounded"
      >
        <Link
          href={href}
          onClick={() => setOpenMobile(false)}
          className={cn(
            'flex items-center gap-2',
            pathname === href &&
              'bg-primary text-primary-foreground hover:!bg-primary/90 hover:!text-primary-foreground',
          )}
        >
          {item.icon && <item.icon className="!size-5" />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
