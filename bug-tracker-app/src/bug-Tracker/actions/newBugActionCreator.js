export default function newBugActionCreator(dispatch){
	return function(bugName){
		var newBugData = {
			id : 0,
			name : bugName,
			isClosed : false
		};
		let headers = {
			method : 'POST',
			body : JSON.stringify(newBugData),
		};
		fetch('http://localhost:3030/bugs', headers)
			.then(response => response.json())
			.then(newBug => dispatch({
				type : 'NEW_BUG',
				payload : newBug	
			}));
	}
}