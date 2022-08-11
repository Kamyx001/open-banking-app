import React from 'react';

interface HeaderProps {
  username?: string;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header = ({ username, onLogin, onLogout}: HeaderProps) => (
  <header>
    <div className="border-b-2 border-">
      <div>
        <h1>Tracker app</h1>
      </div>
      <div>
        {username ? (
          <>
            <span className="welcome">
              Welcome, <b>{username}</b>!
            </span>
            <button onClick={onLogout} className="bg-gradient-to-r from-cyan-600 to-lime-600"> Sign out </button>
          </>
        ) : (
          <>
            <button onClick={onLogin}>Log in</button>
          </>
        )}
      </div>
    </div>
  </header>
);