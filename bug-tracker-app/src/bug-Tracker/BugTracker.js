import React , { Component } from 'react';
import './BugTracker.css';

class EventEmitter{
	constructor(){
		this.callbacks = [];
	}
	subscribe(callback){
		if (typeof callback === 'function')
			this.callbacks.push(callback);
	}
	trigger(){
		this.callbacks.forEach(callback => callback());
	}
}

export class BugsCollection extends EventEmitter{
	constructor(){
		super();
		this.list = [
			'This is bug - 1',
			'This is bug - 2',
			'This is bug - 3'
		];
	}
	getAll(){
		return this.list;
	}
	addNew(bugName){
		this.list.push(bugName);
		this.trigger();
	}
}

class BugTracker extends Component{
	onAddNewClick(){
		var bugName = this.refs.txtBugName.value;
		this.props.bugs.addNew(bugName);
		console.log(this.props.bugs.getAll());
	}
	render(){
		let bugList = this.props.bugs.getAll();
		let bugItems = bugList.map(bug => (
			<li>
				<span className="bugname">
					{bug}
				</span>
			</li>
		));

		return(
			<div>
				<section className="stats">
					<span className="closed">2</span>
					<span> / </span>
					<span>{bugList.length}</span>
				</section>
				<section className="edit">
					<label htmlFor="">Bug Name :</label>
					<input type="text" ref="txtBugName" />
					<input type="button" value="Add New" onClick={this.onAddNewClick.bind(this)}/>
				</section>
				<section className="list">
					<ol>
						{bugItems}
					</ol>
					<input type="button" value="Remove Closed" />
				</section>
			</div>
		);
	}
}

export default BugTracker;