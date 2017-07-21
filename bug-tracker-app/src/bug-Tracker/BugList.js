import React, { Component } from 'react';

export default class BugList extends Component{
	
	render(){
		let { bugs, toggleBug, removeBug } = this.props;
		let bugItems = bugs.map((bug,index) => {
			var bugDisplay = bug.isClosed ?
				(
					<span className="bugname closed" onClick={() => toggleBug(bug)}>
						{bug.name}
					</span>
				) : 
				(
					<span className="bugname {closedClass}" onClick={() => toggleBug(bug)}>
						{bug.name}
					</span>
				);
			return (
				<li key={index}>
					{ bugDisplay }
					<div>Close -> [{bug.isClosed.toString()}]</div>
				</li>
			)
		});

		return (
			<section className="list">
				<ol>
					{bugItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={() => removeBug()}/>
			</section>
		)
	}
}