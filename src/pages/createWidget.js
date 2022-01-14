
import React from 'react';
import Widget from '../components/Widget';
import './widget.css';

const App = () => {
  return (
    <div className="App">
      <Widget />
      <iframe className="widgetView" src="https://catkin-numerous-slug.glitch.me" title="Music Widget"></iframe>
    </div>
  );
};

export default App;