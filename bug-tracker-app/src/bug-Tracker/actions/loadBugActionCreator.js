export default function loadBugActionCreator(dispatch){
	return function(){
		dispatch({type : 'LOADING'});
		fetch('http://localhost:3030/bugs')
			.then(response => response.json())
			.then(bugs => dispatch({
				type : 'LOADED',
				payload : bugs
			}));
		}
}