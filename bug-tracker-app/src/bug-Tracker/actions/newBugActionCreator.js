export default function newBugActionCreator(dispatch){
	return function(bugName){
		let newBugActionObject = {
			type : 'NEW_BUG',
			payload : bugName
		};
		dispatch(newBugActionObject);
	}
}