
import React, { useState, useEffect } from 'react';
import { classifyEmail } from '../utils/classifierModel';
import { CheckCircle, AlertTriangle, ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ClassificationResult } from '../utils/types';
import { sampleEmails } from '../utils/sampleData';

interface EmailInputProps {
  onClassify: (result: ClassificationResult, email: string) => void;
}

const EmailInput: React.FC<EmailInputProps> = ({ onClassify }) => {
  const [email, setEmail] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [showExamples, setShowExamples] = useState<boolean>(false);
  const [analysisStep, setAnalysisStep] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);

  const aiAnalysisSteps = [
    "Initializing AI models...",
    "Analyzing text patterns...",
    "Detecting keyword frequencies...",
    "Scanning for malicious content...",
    "Checking sender reputation...",
    "Evaluating link safety...",
    "Running NLP classification...",
    "Finalizing results..."
  ];

  useEffect(() => {
    if (isAnalyzing) {
      let currentStep = 0;
      const totalSteps = aiAnalysisSteps.length;
      
      const intervalId = setInterval(() => {
        if (currentStep < totalSteps) {
          setAnalysisStep(aiAnalysisSteps[currentStep]);
          setProgress(Math.floor((currentStep + 1) / totalSteps * 100));
          currentStep++;
        } else {
          clearInterval(intervalId);
        }
      }, 150);
      
      return () => clearInterval(intervalId);
    }
  }, [isAnalyzing]);

  const handleClassify = () => {
    if (!email.trim()) return;
    
    setIsAnalyzing(true);
    setProgress(0);
    
    setTimeout(() => {
      const result = classifyEmail(email);
      onClassify(result, email);
      setIsAnalyzing(false);
    }, 1200);
  };
  
  const handleSampleClick = (text: string) => {
    setEmail(text);
    setShowExamples(false);
    
    setIsAnalyzing(true);
    setProgress(0);
    
    setTimeout(() => {
      const result = classifyEmail(text);
      onClassify(result, text);
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
      <div className="flex flex-col gap-2 mb-3">
        <div className="flex justify-between items-end">
          <label htmlFor="email-content" className="text-sm font-medium text-foreground/80">
            Email Content
          </label>
          <button 
            onClick={() => setShowExamples(!showExamples)}
            className="text-xs text-primary hover:text-primary/80 transition-colors"
          >
            {showExamples ? 'Hide Examples' : 'Show Examples'}
          </button>
        </div>
        
        {showExamples && (
          <div className="grid gap-2 mb-3 animate-fade-in">
            <p className="text-xs text-muted-foreground">Select an example:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 overflow-hidden">
              {sampleEmails.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSampleClick(sample.text)}
                  className="text-left p-3 rounded-md border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all text-sm overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="font-medium">Sample {sample.id}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      sample.label === 'spam' 
                        ? 'bg-destructive/10 text-destructive'
                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-500'
                    }`}>
                      {sample.label === 'spam' ? 'Spam' : 'Not Spam'}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 group-hover:line-clamp-none transition-all">
                    {sample.text}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="relative">
          <textarea
            id="email-content"
            className="w-full min-h-[200px] p-4 rounded-lg border border-input bg-background hover:border-primary/50 focus:border-primary/70 focus:ring-1 focus:ring-primary/50 outline-none transition-colors resize-none"
            placeholder="Paste email content here to analyze..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isAnalyzing}
          />
          
          {isAnalyzing && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm rounded-lg animate-fade-in">
              <div className="flex flex-col items-center p-6 text-center">
                <Loader2 className="w-8 h-8 text-primary animate-spin mb-4" />
                <p className="text-sm font-medium text-foreground mb-1">{analysisStep}</p>
                <div className="w-full max-w-xs h-2 bg-secondary rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-primary transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground">{progress}% complete</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button 
          variant="default" 
          size="default" 
          onClick={handleClassify}
          disabled={!email.trim() || isAnalyzing}
          className="group"
        >
          {isAnalyzing ? (
            <>Analyzing<span className="ml-1 animate-pulse">...</span></>
          ) : (
            <>
              Classify
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default EmailInput;
