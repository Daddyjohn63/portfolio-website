'use client';

import { Menu } from 'lucide-react';
// import { Sheet, SheetContent, SheetTrigger } from '@components/ui/sheet';
import { Button } from '@/components/ui/button';
import SideBar from './SideBar';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu className="john" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
};
export default MobileSideBar;
