import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  GroupIcon,
  LayoutDashboard,
  SettingsIcon,
  UsersIcon,
  WalletIcon,
} from 'lucide-react';

import { type SidebarData } from '../types';

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Shadcn Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navItems: [
    {
      title: 'My dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Teams',
      url: '/teams',
      icon: GroupIcon,
    },
    {
      title: 'Employees',
      url: '/employees',
      icon: UsersIcon,
    },
    {
      title: 'Account',
      url: '/account',
      icon: WalletIcon,
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: SettingsIcon,
    },
  ],
};
