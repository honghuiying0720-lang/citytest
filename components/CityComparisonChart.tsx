import React from 'react';
import { DimensionScores, City } from '../types';
import { DIMENSION_LABELS } from '../constants';

interface Props {
  userScores: DimensionScores;
  city: City;
}

const CityComparisonChart: React.FC<Props> = ({ userScores, city }) => {
  return (
    <div className="space-y-3 mt-4">
      <h4 className="text-sm font-semibold text-gray-600 mb-2">维度对比 (你 vs {city.name})</h4>
      {Object.entries(userScores).map(([key, userVal]) => {
        const dimKey = key as keyof DimensionScores;
        const cityVal = city.scores[dimKey];
        const label = DIMENSION_LABELS[dimKey];
        
        return (
          <div key={key} className="flex items-center text-xs sm:text-sm">
            <div className="w-20 text-gray-500 truncate">{label}</div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-center">
                <div className="w-8 text-right pr-2 text-teal-600 font-medium">{userVal}</div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-teal-400 rounded-full opacity-90" 
                    style={{ width: `${userVal}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 text-right pr-2 text-cyan-600 font-medium">{cityVal}</div>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-300 rounded-full opacity-80" 
                    style={{ width: `${cityVal}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="flex justify-end gap-4 text-xs mt-2">
         <div className="flex items-center gap-1">
           <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
           <span className="text-gray-600">你</span>
         </div>
         <div className="flex items-center gap-1">
           <div className="w-3 h-3 bg-cyan-300 rounded-full"></div>
           <span className="text-gray-600">{city.name}</span>
         </div>
      </div>
    </div>
  );
};

export default CityComparisonChart;