
import React from 'react';
import { getModelMetrics } from '../utils/classifierModel';
import { BarChart, CheckCircle2, XCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const MetricsDisplay: React.FC = () => {
  const metrics = getModelMetrics();
  
  const totalCases = 
    metrics.confusionMatrix.truePositives + 
    metrics.confusionMatrix.trueNegatives + 
    metrics.confusionMatrix.falsePositives + 
    metrics.confusionMatrix.falseNegatives;
  
  const formatPercent = (value: number) => `${Math.round(value * 100)}%`;
  
  return (
    <div className="w-full max-w-2xl mt-12 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
      <div className="flex items-center gap-2 mb-4">
        <BarChart className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-medium">Model Performance Metrics</h2>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="text-2xl font-semibold">{formatPercent(metrics.accuracy)}</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="text-2xl font-semibold">{formatPercent(metrics.f1Score)}</div>
                <div className="text-sm text-muted-foreground">F1 Score</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="text-2xl font-semibold">{formatPercent(metrics.precision)}</div>
                <div className="text-sm text-muted-foreground">Precision</div>
              </div>
              
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="text-2xl font-semibold">{formatPercent(metrics.recall)}</div>
                <div className="text-sm text-muted-foreground">Recall</div>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-muted-foreground">  
            <p><strong>Accuracy:</strong> Overall correctness of all predictions</p>
            <p><strong>Precision:</strong> How many detected spam emails were actually spam</p>
            <p><strong>Recall:</strong> How many actual spam emails were detected</p>
            <p><strong>F1 Score:</strong> Balance between precision and recall</p>
          </div>
        </div>
        
        <div className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-sm font-medium mb-4">Confusion Matrix</h3>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span>True Positives</span>
                </span>
                <span>{metrics.confusionMatrix.truePositives}</span>
              </div>
              <Progress value={(metrics.confusionMatrix.truePositives / totalCases) * 100} className="h-2 bg-muted" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-primary" />
                  <span>True Negatives</span>
                </span>
                <span>{metrics.confusionMatrix.trueNegatives}</span>
              </div>
              <Progress value={(metrics.confusionMatrix.trueNegatives / totalCases) * 100} className="h-2 bg-muted" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-1">
                  <XCircle className="w-3 h-3 text-amber-500" />
                  <span>False Positives</span>
                </span>
                <span>{metrics.confusionMatrix.falsePositives}</span>
              </div>
              <Progress value={(metrics.confusionMatrix.falsePositives / totalCases) * 100} className="h-2 bg-muted" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="flex items-center gap-1">
                  <XCircle className="w-3 h-3 text-destructive" />
                  <span>False Negatives</span>
                </span>
                <span>{metrics.confusionMatrix.falseNegatives}</span>
              </div>
              <Progress value={(metrics.confusionMatrix.falseNegatives / totalCases) * 100} className="h-2 bg-muted" />
            </div>
          </div>
          
          <div className="mt-4 text-xs text-muted-foreground">
            <p><strong>True Positive:</strong> Correctly identified spam</p>
            <p><strong>True Negative:</strong> Correctly identified legitimate email</p>
            <p><strong>False Positive:</strong> Legitimate email misclassified as spam</p>
            <p><strong>False Negative:</strong> Spam misclassified as legitimate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricsDisplay;
