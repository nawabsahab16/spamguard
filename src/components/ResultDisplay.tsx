
import React from 'react';
import { ClassificationResult } from '../utils/types';
import { Shield, ShieldAlert, CheckCircle, BadgeAlert, Tag, PercentIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface ResultDisplayProps {
  result: ClassificationResult | null;
  email: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, email }) => {
  if (!result) return null;
  
  const confidencePercent = Math.round(result.confidence * 100);
  
  return (
    <div className="w-full max-w-2xl mt-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium">Classification Result</h2>
          <div className="text-sm text-muted-foreground">
            Score: {result.score.toFixed(2)}
          </div>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2">
          <div className={`relative overflow-hidden rounded-lg border ${
            result.isSpam 
              ? 'border-destructive/30 bg-destructive/5' 
              : 'border-green-200 bg-green-50 dark:border-green-900/30 dark:bg-green-900/10'
          } p-6`}>
            <div className="absolute -top-6 -right-6 w-16 h-16 opacity-10">
              {result.isSpam 
                ? <ShieldAlert className="w-full h-full" /> 
                : <CheckCircle className="w-full h-full" />
              }
            </div>
            
            <div className="flex flex-col gap-2 relative">
              <div className="flex items-center gap-2">
                {result.isSpam 
                  ? <ShieldAlert className="w-5 h-5 text-destructive" /> 
                  : <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                }
                <h3 className="font-medium">
                  {result.isSpam ? 'Spam Detected' : 'Not Spam'}
                </h3>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {result.isSpam 
                  ? 'This email contains characteristics commonly associated with spam messages.'
                  : 'This email appears to be legitimate based on its content analysis.'
                }
              </p>
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1.5">
                  <div className="text-xs font-medium">Confidence</div>
                  <div className="text-xs font-medium">{confidencePercent}%</div>
                </div>
                <Progress value={confidencePercent} className={result.isSpam ? 'bg-destructive/30' : 'bg-green-200 dark:bg-green-800/30'} />
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-primary" />
              <h3 className="font-medium">Key Features Detected</h3>
            </div>
            
            {result.features.length > 0 ? (
              <div className="space-y-2">
                {result.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/80"></span>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No specific features detected. Classification based on overall content analysis.
              </p>
            )}
            
            <p className="text-xs text-muted-foreground mt-4">
              These are the top features that influenced the classification decision.
            </p>
          </div>
        </div>
        
        <div className="rounded-lg border border-border p-4 bg-muted/30">
          <h4 className="text-sm font-medium mb-2">Analyzed Text:</h4>
          <p className="text-sm text-muted-foreground line-clamp-3 hover:line-clamp-none transition-all">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
