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

class Bug{
	constructor(bugName){
		this.name = bugName;
		this.isClosed = false;
	}

	toggle(){
		this.isClosed = !this.isClosed;
		console.log('toggled bug -> ', this);
	}
}

export class BugsCollection extends EventEmitter{
	constructor(){
		super();
		this.list = [
			new Bug('This is bug - 1'),
			new Bug('This is bug - 2'),
			new Bug('This is bug - 3')
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
		this.props.bugs.addNew(new Bug(bugName));
		console.log(this.props.bugs.getAll());
	}
	onBugNameClick(bug){
		bug.toggle();
	}
	render(){
		let bugList = this.props.bugs.getAll();
		let bugItems = bugList.map((bug,index) => (
			<li key={index}>
				<span className="bugname" onClick={this.onBugNameClick.bind(this, bug)}>
					{bug.name}
				</span>
				<div>Close -> [{bug.isClosed.toString()}]</div>
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