
import { EmailData, ModelMetrics } from './types';

export const sampleEmails: EmailData[] = [
  {
    id: '1',
    text: 'Congratulations! You have won a $1,000 gift card. Click here to claim your prize now! Limited time offer!',
    label: 'spam'
  },
  {
    id: '2',
    text: 'Dear customer, your account has been locked due to suspicious activity. Please verify your information by clicking the link below. Failure to do so will result in permanent suspension.',
    label: 'spam'
  },
  {
    id: '3',
    text: 'URGENT: Your payment has been processed. If you did not authorize this transaction, click here immediately to dispute.',
    label: 'spam'
  },
  {
    id: '4',
    text: 'Hi there, just following up on our meeting yesterday. I\'ve attached the document with the revised project timeline. Let me know if you have any questions.',
    label: 'not-spam'
  },
  {
    id: '5',
    text: 'Your invoice #8742 from Acme Corp is ready. Your payment of $253.42 is due on 05/15/2023. Please let us know if you have any questions.',
    label: 'not-spam'
  },
  {
    id: '6',
    text: 'Team, please remember we have the quarterly review meeting tomorrow at 2 PM. The agenda has been shared via calendar invite. Looking forward to seeing everyone there.',
    label: 'not-spam'
  }
];

export const modelMetricsData: ModelMetrics = {
  accuracy: 0.94,
  precision: 0.96,
  recall: 0.92,
  f1Score: 0.94,
  confusionMatrix: {
    truePositives: 230,
    trueNegatives: 710,
    falsePositives: 10,
    falseNegatives: 20
  }
};

export const spamFeatures = [
  'free', 'offer', 'money', 'credit', 'cash', 'win', 'won', 'winner', 'prize', 
  'congratulations', 'click', 'urgent', 'limited', 'time', 'now', 'immediately',
  'opportunity', 'investment', 'risk-free', 'guarantee', 'guaranteed', 'refund',
  'discount', 'clearance', 'satisfaction', 'amazing', 'act now', 'instant', 'casino',
  'lottery', 'jackpot', 'million', 'billion', 'earn', 'income', 'work from home',
  'enlarge', 'enhancement', 'prescription', 'medication', 'cure', 'weight loss',
  'viagra', 'cialis', 'xanax', 'valium', 'vicodin', 'pharmacy', 'drugs', 'cable',
  'descrambler', 'opt in', 'opt-in', 'subscription', 'trial', 'sample', 'satisfaction',
  'virus', 'antivirus', 'software', 'crack', 'hack', 'password', 'account', 'access',
  'verify', 'verification', 'confirm', 'confirmation', 'bank', 'banking', 'account',
  'pin', 'password', 'urgent', 'important', 'alert', 'notification', 'update'
];

export const notSpamFeatures = [
  'meeting', 'agenda', 'minutes', 'report', 'project', 'document', 'update', 'schedule',
  'invoice', 'receipt', 'payment', 'due', 'transaction', 'balance', 'account', 
  'question', 'information', 'response', 'request', 'follow-up', 'confirm', 'attended',
  'participation', 'feedback', 'review', 'approve', 'approval', 'revision', 'team',
  'colleague', 'collaboration', 'department', 'office', 'discuss', 'discussion', 
  'call', 'phone', 'email', 'contact', 'available', 'regards', 'sincerely', 'thanks',
  'thank you', 'appreciate', 'consideration', 'attached', 'attachment', 'file', 'pdf',
  'doc', 'spreadsheet', 'presentation', 'link', 'website', 'portal', 'login', 'signin',
  'password', 'username', 'user', 'profile', 'account', 'settings', 'preferences',
  'notification', 'reminder', 'calendar', 'event', 'appointment', 'schedule', 'time'
];
