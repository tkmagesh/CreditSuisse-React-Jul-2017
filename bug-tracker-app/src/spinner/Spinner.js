import React from 'react';
import { connect } from 'react-redux';

let Spinner = ({ inc_action, dec_action, currentValue }) => (
	<div>
		<input type="button" value="Decrement" onClick={() => dec_action()} />
		<span> {currentValue} </span>
		<input type="button" value="Increment" onClick={() => inc_action()} />
	</div>
);
var spinnerActionCreators = function(dispatch){
	return {
		inc_action : function(){
			dispatch({ type : 'INCREMENT'})
		},

		dec_action : function(){
			dispatch({ type : 'DECREMENT'});
		}
	}
};

function mapStateToProps(state){
	return {
		currentValue : state.spinner	
	}
}
function mapDispatchToProps(dispatch){
	return spinnerActionCreators(dispatch);
}
export  default connect(mapStateToProps, mapDispatchToProps)(Spinner);
