
import React, { useState } from 'react';
import Header from '../components/Header';
import EmailInput from '../components/EmailInput';
import ResultDisplay from '../components/ResultDisplay';
import MetricsDisplay from '../components/MetricsDisplay';
import DeveloperSection from '../components/DeveloperSection';
import Footer from '../components/Footer';
import { ClassificationResult } from '../utils/types';

const Index: React.FC = () => {
  const [result, setResult] = useState<ClassificationResult | null>(null);
  const [analyzedEmail, setAnalyzedEmail] = useState<string>('');
  
  const handleClassify = (newResult: ClassificationResult, email: string) => {
    setResult(newResult);
    setAnalyzedEmail(email);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <Header />
          
          <main className="mt-12">
            <div className="flex flex-col items-center max-w-xl mx-auto mb-12 text-center staggered-appear">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Smart Email Classification
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Analyze your emails with our intelligent machine learning model to identify unwanted spam messages.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <EmailInput onClassify={handleClassify} />
              
              <ResultDisplay result={result} email={analyzedEmail} />
              
              <MetricsDisplay />
            </div>
          </main>
        </div>
      </div>
      
      <DeveloperSection />
      <Footer />
    </div>
  );
};

export default Index;
