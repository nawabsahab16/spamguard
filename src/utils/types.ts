
export interface EmailData {
  id: string;
  text: string;
  label: 'spam' | 'not-spam' | 'unknown';
}

export interface ClassificationResult {
  isSpam: boolean;
  confidence: number;
  features: string[];
  score: number;
}

export interface ModelMetrics {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  confusionMatrix: {
    truePositives: number;
    trueNegatives: number;
    falsePositives: number;
    falseNegatives: number;
  };
}
