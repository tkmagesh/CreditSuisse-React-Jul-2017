import React , { Component } from 'react';
import './BugTracker.css';

export class BugsCollection{
	constructor(){
		this.list = [
			'This is bug - 1',
			'This is bug - 2',
			'This is bug - 3'
		];
	}
	getAll(){
		return this.list;
	}
}

class BugTracker extends Component{
	
	render(){
		var bugList = this.props.bugs.getAll();
		return(
			<div>
				<section className="stats">
					<span className="closed">2</span>
					<span> / </span>
					<span>{bugList.length}</span>
				</section>
				<section className="edit">
					<label htmlFor="">Bug Name :</label>
					<input type="text" name="" id="" />
					<input type="button" value="Add New" />
				</section>
				<section className="list">
					<ol>
						<li>
							<span className="bugname">
								[This is bug - 1]
							</span>
						</li>
						<li>
							<span className="bugname closed">
								[This is bug - 2]
							</span>
						</li>
					</ol>
					<input type="button" value="Remove Closed" />
				</section>
			</div>
		);
	}
}

export default BugTracker;