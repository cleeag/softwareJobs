import React from 'react';
import './App.css';

import Jobs from './Jobs'

const mockJobs = [
  {title: 'SWE 1', company: 'Google'},
  {title: 'SWE 2', company: 'FaceBook'},
  {title: 'SWE 2', company: 'Apple'}

]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs}/>
    </div>
  );
}

export default App;
