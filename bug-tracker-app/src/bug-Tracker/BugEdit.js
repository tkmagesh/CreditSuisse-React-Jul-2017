import React , { Component } from 'react';

export default class BugEdit extends Component{
	onAddNewClick(){
		var bugName = this.refs.txtBugName.value;
		this.props.newBug(bugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" ref="txtBugName" />
				<input type="button" value="Add New" onClick={this.onAddNewClick.bind(this)}/>
			</section>
		)
	}
}