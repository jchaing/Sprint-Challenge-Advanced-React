import React from 'react';

const PlayerCard = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.country}</p>
    </div>
  );
};

export default PlayerCard;
