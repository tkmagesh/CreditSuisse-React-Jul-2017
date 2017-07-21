import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BugsCollection } from './bug-Tracker/BugTracker';

let bugs = new BugsCollection();

ReactDOM.render(<App bugs={bugs}/>, document.getElementById('root'));
registerServiceWorker();
