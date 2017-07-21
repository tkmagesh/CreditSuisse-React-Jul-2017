export default function bugsReducer(currentState = [], action){
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