import React from 'react';
import { Navbar, Footer } from '../organisms';
import { ParticleBackground, CustomCursor } from '../atoms';

interface MainLayoutProps {
  children: React.ReactNode;
  brandName?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, brandName }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white relative cursor-none">
      <CustomCursor 
        normalCursor="/images/cursor-normal.svg"
        pointerCursor="/images/cursor-pointer.svg"
      />
      <ParticleBackground />
      <div className="relative z-10">
        <Navbar brandName={brandName} />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
