import { spamFeatures, notSpamFeatures, modelMetricsData } from './sampleData';
import { ClassificationResult, ModelMetrics } from './types';

const preprocessText = (text: string): string[] => {
  const lowercased = text.toLowerCase();
  const withoutPunctuation = lowercased.replace(/[^\w\s]/g, '');
  const tokens = withoutPunctuation.split(/\s+/);
  
  const stopWords = new Set(['a', 'an', 'the', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 
                           'be', 'been', 'being', 'in', 'on', 'at', 'to', 'for', 'with', 
                           'by', 'about', 'against', 'between', 'into', 'through', 'during', 
                           'before', 'after', 'above', 'below', 'from', 'up', 'down', 'of', 
                           'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 
                           'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 
                           'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 
                           'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 
                           'will', 'just', 'don', 'should', 'now']);
  
  return tokens.filter(token => !stopWords.has(token) && token.length > 1);
};

const extractFeatures = (text: string): { 
  tokensFound: string[], 
  spamScore: number, 
  notSpamScore: number 
} => {
  const tokens = preprocessText(text);
  let spamScore = 0;
  let notSpamScore = 0;
  const tokensFound: string[] = [];
  
  for (const token of tokens) {
    if (spamFeatures.includes(token)) {
      spamScore += 1;
      if (!tokensFound.includes(token)) {
        tokensFound.push(token);
      }
    }
    
    if (notSpamFeatures.includes(token)) {
      notSpamScore += 1;
    }
  }
  
  for (let i = 0; i < tokens.length - 1; i++) {
    const bigram = `${tokens[i]} ${tokens[i + 1]}`;
    if (spamFeatures.includes(bigram)) {
      spamScore += 1.5;  
      if (!tokensFound.includes(bigram)) {
        tokensFound.push(bigram);
      }
    }
    
    if (notSpamFeatures.includes(bigram)) {
      notSpamScore += 1.5;
    }
  }
  
  return {
    tokensFound,
    spamScore,
    notSpamScore
  };
};

export const classifyEmail = (text: string): ClassificationResult => {
  const { tokensFound, spamScore, notSpamScore } = extractFeatures(text);
  
  const finalScore = spamScore - notSpamScore;
  
  const totalScore = spamScore + notSpamScore;
  const confidence = totalScore > 0 
    ? Math.min(Math.abs(finalScore) / totalScore, 0.99)
    : 0.5; 
    
  return {
    isSpam: finalScore > 0,
    confidence,
    features: tokensFound.slice(0, 5), 
    score: finalScore
  };
};

export const getModelMetrics = (): ModelMetrics => {
  return modelMetricsData;
};

export const isModelReady = (): boolean => {
  return true;
};
