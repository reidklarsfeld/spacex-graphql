import React, { useState } from 'react';
import LaunchSearch from './components/LaunchSearch';
import LaunchProfile from './components/LaunchProfile';
import './App.css';

const App = () => {
  const [id, setId] = useState('1');
  const handleIdChange = React.useCallback(newId => {
    setId(newId);
  }, []);
  return (
    <div className="App">
      <LaunchSearch handleIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  );
};
export default App;