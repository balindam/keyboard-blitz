import React from 'react';
import './ResultInfoCard.scss';

interface IResultInfoCardProps {
    label: string
    value: string
}

const ResultInfoCard: React.FC<IResultInfoCardProps> = ({label, value}) => {
  return (
    <div className="_result-info-card-container">
      <div className="_ric">
        <div className="_ric-label">
            {label}
        </div>
        <div className="_ric-value">
            {value}
        </div>
      </div>
    </div>
  )
}

export default ResultInfoCard