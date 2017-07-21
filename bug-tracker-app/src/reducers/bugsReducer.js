export default function bugsReducer(currentState = [], action){
	if (action.type === 'NEW_BUG'){
		return [...currentState, action.payload];
	}
	if (action.type === 'TOGGLE_BUG'){
		let bugToToggle = action.payload;
		let toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return currentState.map(bug => bug === bugToToggle ? toggledBug : bug);
	}
	if (action.type === 'REMOVE_CLOSED'){
		return currentState.filter(bug => !bug.isClosed);
	}
	if (action.type === 'LOADED'){
		return action.payload;
	}
	return currentState;
}