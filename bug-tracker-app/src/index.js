import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

/*
{ type : 'NEW_BUG', payload : 'name of the bug' }
TOGGLE_BUG
REMOVE_CLOSED
*/
function bugsReducer(currentState = [], action){
	if (action.type === 'NEW_BUG'){
		var newBug = {
			name : action.payload,
			isClosed : false
		};
		return [...currentState, newBug];
	}
	if (action.type === 'TOGGLE_BUG'){
		let bugToToggle = action.payload;
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return currentState.map(bug => bug === bugToToggle ? toggledBug : bug);
	}
	if (action.type === 'REMOVE_CLOSED'){
		return currentState.filter(bug => !bug.isClosed);
	}
	return currentState;
}

function newBugActionCreator(store){
	return function(bugName){
		let newBugActionObject = {
			type : 'NEW_BUG',
			payload : bugName
		};
		store.dispatch(newBugActionObject);
	}
}

function toggleBugActionCreator(store){
	return function(bug){
		let toggleBugActionObject = {
			type : 'TOGGLE_BUG',
			payload : bug
		};
		store.dispatch(toggleBugActionObject);
	}
}

function removeBugActionCreator(store){
	return function(){
		let removeBugActionObject = {
			type : 'REMOVE_CLOSED'
		};
		store.dispatch(removeBugActionObject);
	}
}

var store = createStore(bugsReducer);
var newBugAction = newBugActionCreator(store);
var toggleBugAction = toggleBugActionCreator(store);
var removeClosedAction = removeBugActionCreator(store);

function renderApp(){
	var bugs = store.getState();
	ReactDOM.render(<App bugs={bugs} newBugAction={newBugAction} toggleBugAction={toggleBugAction} removeClosedAction={removeClosedAction}/>, document.getElementById('root'));
}
store.subscribe(renderApp);
renderApp();
registerServiceWorker();

