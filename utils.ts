import { UserAnswers, DimensionScores, MatchResult, DimensionKey, Question } from './types';
import { QUESTIONS, CITIES } from './constants';

export const calculateUserScores = (answers: UserAnswers): DimensionScores => {
  const scores: DimensionScores = {
    lifePace: 0,
    modernTraditional: 0,
    vitalityTranquility: 0,
    urbanNature: 0,
    costTolerance: 0,
    climatePreference: 0,
  };

  const dimensionCounts: Record<DimensionKey, number> = {
    lifePace: 0,
    modernTraditional: 0,
    vitalityTranquility: 0,
    urbanNature: 0,
    costTolerance: 0,
    climatePreference: 0,
  };

  Object.entries(answers).forEach(([questionId, value]) => {
    const qId = parseInt(questionId);
    const question = QUESTIONS.find(q => q.id === qId);
    if (question) {
      scores[question.dimension] += value;
      dimensionCounts[question.dimension] += 1;
    }
  });

  // Calculate average
  (Object.keys(scores) as DimensionKey[]).forEach(key => {
    if (dimensionCounts[key] > 0) {
      scores[key] = Math.round(scores[key] / dimensionCounts[key]);
    }
  });

  return scores;
};

export const calculateMatches = (userScores: DimensionScores): MatchResult[] => {
  const matches: MatchResult[] = CITIES.map(city => {
    let totalDiff = 0;
    
    (Object.keys(userScores) as DimensionKey[]).forEach(dim => {
      totalDiff += Math.abs(userScores[dim] - city.scores[dim]);
    });

    // Formula: (1 - diff/600) * 100
    const matchScore = Math.round((1 - totalDiff / 600) * 100);

    return {
      city,
      score: matchScore,
      diff: totalDiff
    };
  });

  // Sort by score descending
  return matches.sort((a, b) => b.score - a.score);
};
