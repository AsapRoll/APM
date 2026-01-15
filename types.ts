import { LucideIcon } from 'lucide-react';

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
  icon: LucideIcon;
}

export interface FeatureCard {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

export interface ProductTier {
  title: string;
  subtitle: string;
  features: string[];
  type: 'traffic' | 'hot' | 'profit' | 'high';
}

export interface PainPoint {
  issue: string;
  description: string;
  solution: string;
}