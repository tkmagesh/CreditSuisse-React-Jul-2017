export default function toggleBugActionCreator(dispatch){
	return function(bug){
		let toggleBugActionObject = {
			type : 'TOGGLE_BUG',
			payload : bug
		};
		dispatch(toggleBugActionObject);
	}
}