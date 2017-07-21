var sm = (function(){
	function  createStore(reducer){
		var _reducer = reducer,
			_INIT_ACTION = {type : 'INIT'},
			_currentState = reducer(undefined, _INIT_ACTION),
			_callbacks = [];

		function dispatch(action){
			var newState = _reducer(_currentState, action);
			if (_currentState !== newState){
				_currentState = newState
				trigger();
			}
		}
		function trigger(){
			_callbacks.forEach(callback => callback());
		}
		function subscribe(callback){
			if (typeof callback === 'function')
				_callbacks.push(callback)
		}
		function getState(){
			return _currentState;
		}
		return {
			dispatch : dispatch,
			subscribe : subscribe,
			getState : getState
		}
	}
	return {
		createStore : createStore
	}
})();