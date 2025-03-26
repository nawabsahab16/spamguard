
import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 border-t border-border mt-auto">
      <div className="container flex flex-col items-center justify-center gap-2 text-center">
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            SpamGuardML &copy; {new Date().getFullYear()}
          </p>
        </div>
        <p className="text-xs text-muted-foreground/70">
          Intelligent email classification powered by machine learning
        </p>
      </div>
    </footer>
  );
};

export default Footer;
