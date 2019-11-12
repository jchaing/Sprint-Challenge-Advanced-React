import React from 'react';

const PlayerCard = props => {
  return (
    <div className="card">
      <h2 data-testid="playerName">{props.name}</h2>
      <p data-testid="countryName">{props.country}</p>
    </div>
  );
};

export default PlayerCard;
