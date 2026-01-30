import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { DimensionScores } from '../types';
import { DIMENSION_LABELS } from '../constants';

interface Props {
  scores: DimensionScores;
}

const UserRadarChart: React.FC<Props> = ({ scores }) => {
  const data = Object.entries(scores).map(([key, value]) => ({
    subject: DIMENSION_LABELS[key as keyof DimensionScores],
    A: value,
    fullMark: 100,
  }));

  return (
    <div className="w-full h-[300px] bg-white rounded-lg p-2">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: '#6b7280' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="我的性格"
            dataKey="A"
            stroke="#2dd4bf" // teal-400
            fill="#14b8a6"   // teal-500
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRadarChart;