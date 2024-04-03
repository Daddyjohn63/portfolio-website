'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SideBar from './SideBar';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { usePathname } from 'next/navigation';
import { useMobileSidebar } from '@/hooks/useMobileSidebar';
import { useState, useEffect } from 'react';

const MobileSideBar = () => {
  const pathname = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar(state => state.onOpen);
  const onClose = useMobileSidebar(state => state.onClose);
  const isOpen = useMobileSidebar(state => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button onClick={onOpen} className="block md:hidden" variant="ghost" size="sm">
        <Menu className="h-6 w-6" />
      </Button>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="right" className="p-0 bg-white">
          <SideBar />
        </SheetContent>
      </Sheet>
    </>
  );
};
export default MobileSideBar;
