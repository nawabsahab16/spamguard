
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full flex flex-col items-center text-center animate-fade-in">
        <div className="rounded-full bg-muted/50 p-4 mb-6">
          <AlertTriangle className="h-12 w-12 text-muted-foreground" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <h2 className="text-xl font-medium mb-4">Page Not Found</h2>
        
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button 
          onClick={() => navigate('/')}
          variant="default"
          className="px-6"
        >
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
