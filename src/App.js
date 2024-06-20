import React, { useState } from 'react';
import EventPlannerDashboard from './Event';
import FarmerDashboard from './Farmer';
import TravelerDashboard from './Traveller';
import './App.css';

function App() {
  const [userGroup, setUserGroup] = useState('');

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
        <h1>Dynamic Weather Dashboard</h1>
        <nav>
          <button onClick={() => setUserGroup('eventPlanners')}>Event Planners</button>
          <button onClick={() => setUserGroup('farmers')}>Farmers</button>
          <button onClick={() => setUserGroup('travelers')}>Travelers</button>
        </nav>
      </header>
      <main>
        {userGroup ? (
          renderDashboard()
        ) : (
          <div className="select-group-message">Please select a user group to view the weather dashboard.</div>
        )}
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Weather Dashboard | Made By Vyshnavi</p>
      </footer>
    </div>
  );
}

export default App;
