import React, { useState } from 'react';
import EventPlannerDashboard from './Event';
import FarmerDashboard from './Farmer';
import TravelerDashboard from './Traveller';
import Signup from './Login';
import './App.css';

function App() {
  const [userGroup, setUserGroup] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const renderDashboard = () => {
    switch (userGroup) {
      case 'eventPlanners':
        return <EventPlannerDashboard />;
      case 'farmers':
        return <FarmerDashboard />;
      case 'travelers':
        return <TravelerDashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Dynamic Weather Dashboard</h1>
          {isSignedUp && (
            <nav>
              <button onClick={() => setUserGroup('eventPlanners')}>Event Planners</button>
              <button onClick={() => setUserGroup('farmers')}>Farmers</button>
              <button onClick={() => setUserGroup('travelers')}>Travellers</button>
            </nav>
          )}
        </div>
      </header>
      <main>
        {isSignedUp ? (
          <>
            {userGroup ? (
              renderDashboard()
            ) : (
              <div className="select-group-message">Please select a user group to view the weather dashboard.</div>
            )}
          </>
        ) : (
          <Signup onSignup={setIsSignedUp} />
        )}
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Weather Dashboard | Made By Vyshnavi Kamineni</p>
      </footer>
    </div>
  );
}

export default App;
