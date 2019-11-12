import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import PlayerCard from './PlayerCard';

const DisplayPlayers = props => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div className="toggle-group">
        <p>Toggle Light/Dark Mode</p>
        <div className="toggle-darkmode">
          <div
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </div>
      <div className="cards">
        {props.players.map(player => (
          <PlayerCard
            key={player.id}
            name={player.name}
            country={player.country}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayPlayers;
