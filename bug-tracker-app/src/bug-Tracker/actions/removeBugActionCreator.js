export default function removeBugActionCreator(dispatch){
	return function(){
		let removeBugActionObject = {
			type : 'REMOVE_CLOSED'
		};
		dispatch(removeBugActionObject);
	}
}