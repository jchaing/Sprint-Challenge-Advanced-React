import React from 'react';
import PlayerCard from './PlayerCard';

const DisplayPlayers = props => {

  return (
    <div>
      {props.players.map(player => (
        <PlayerCard
          key={player.id}
          name={player.name}
          country={player.country}
        />
      ))}
    </div>
  );
};

export default DisplayPlayers;
