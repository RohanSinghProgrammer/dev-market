"use client";

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavContent from './_components/NavContent';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 border-b">
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <SheetTitle className='mb-4' />
            <NavContent closeDrawer={() => setIsDrawerOpen(false)} />
          </SheetContent>
        </Sheet>
        <h1 className="text-xl font-bold">DevMarket Admin</h1>
        <Link href="/user-profile">
          <Button variant="ghost" size="icon" className="relative">
            <Avatar className="size-7">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </Link>
      </div>

      <div className="flex lg:h-screen overflow-y-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 p-4 border-r h-screen">
          <div className='flex items-center space-x-4 mb-8'>
            <Link href="/user-profile">
              <Button variant="ghost" size="icon" className="relative">
                <Avatar className="size-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </Link>
            <h1 className="text-lg font-bold">DevMarket Admin</h1>
          </div>
          {/* Empty function to prevent error */}
          <NavContent closeDrawer={() => { }} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

