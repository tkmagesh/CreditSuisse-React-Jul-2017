import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
/*import spinnerReducer from './spinner/spinnerReducer';
import bugsReducer from './bug-Tracker/bugsReducer';
*/
import { spinnerReducer, bugsReducer } from './reducers';

let all_reducers = combineReducers({
	bugs : bugsReducer,
	spinner : spinnerReducer
});

let store = createStore(all_reducers);

/*
function renderApp(){
	var bugs = store.getState();
	ReactDOM.render(<App bugs={bugs} newBugAction={newBugAction} toggleBugAction={toggleBugAction} removeClosedAction={removeClosedAction}/>, document.getElementById('root'));
}
store.subscribe(renderApp);
renderApp();
*/

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();

