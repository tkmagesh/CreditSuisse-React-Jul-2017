import React , { Component } from 'react';
import './BugTracker.css';
import { connect } from 'react-redux';
import { 
	newBugActionCreator, 
	toggleBugActionCreator, 
	removeBugActionCreator
} from './actions';

import BugStats from './BugStats';
import BugEdit from './BugEdit';
import BugList from './BugList';




class BugTracker extends Component{
	render(){
		let { bugs, newBugAction, toggleBugAction, removeBugAction } = this.props; 
		return(
			<div>
				<BugStats bugs={bugs}></BugStats>
				<BugEdit newBug={newBugAction}></BugEdit>
				<BugList bugs={bugs} toggleBug={toggleBugAction} removeBug={removeBugAction}></BugList>
			</div>
		);
	}
}

function mapStateToProps(state){
	console.log('state in mapStateToProps -> ', state);
	return {
		bugs : state.bugs
	};
}
function mapDispatchToProps(dispatch){
	return {
		newBugAction : newBugActionCreator(dispatch),
		toggleBugAction : toggleBugActionCreator(dispatch),
		removeBugAction : removeBugActionCreator(dispatch)
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(BugTracker);




