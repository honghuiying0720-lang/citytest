export type DimensionKey = 
  | 'lifePace' 
  | 'modernTraditional' 
  | 'vitalityTranquility' 
  | 'urbanNature' 
  | 'costTolerance' 
  | 'climatePreference';

export interface DimensionScores {
  lifePace: number;
  modernTraditional: number;
  vitalityTranquility: number;
  urbanNature: number;
  costTolerance: number;
  climatePreference: number;
}

export interface Option {
  text: string;
  value: number; // 0-100
}

export interface Question {
  id: number;
  text: string;
  dimension: DimensionKey;
  options: Option[];
}

export interface City {
  id: string;
  name: string;
  tags: string[];
  personaTypes: string[];
  description: string;
  detailedDescription: string;
  scores: DimensionScores;
}

export interface MatchResult {
  city: City;
  score: number; // 0-100
  diff: number;
}

export interface UserAnswers {
  [questionId: number]: number;
}
