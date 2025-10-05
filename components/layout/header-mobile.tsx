import Logo from '@/public/logo';
import { SidebarTrigger, useSidebar } from '../ui/sidebar';

function HeaderMobile() {
  const { state } = useSidebar();
  return (
    <div className="flex items-center gap-0.5 border-b border-border justify-between p-4">
      <div className="flex items-center gap-0.5">
        <Logo />
        {state === 'expanded' && <span className="text-lg font-semibold">SupportMe</span>}
      </div>
      <SidebarTrigger className="size-7 [&>svg]:!size-5 [&>svg]:cursor-pointer cursor-pointer" />
    </div>
  );
}

export default HeaderMobile;
