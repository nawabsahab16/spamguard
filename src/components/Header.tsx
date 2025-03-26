
import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-6 px-4 flex items-center justify-center animate-fade-in">
      <div className="flex items-center gap-2.5 group">
        <div className="relative">
          <Shield className="h-8 w-8 text-primary group-hover:animate-pulse-subtle transition-all duration-300" />
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-70 group-hover:opacity-90 transition-opacity -z-10 animate-pulse-subtle"></div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-medium tracking-tight">SpamGuard<span className="text-primary">ML</span></h1>
          <p className="text-xs text-muted-foreground tracking-wide">Intelligent Email Classification</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
