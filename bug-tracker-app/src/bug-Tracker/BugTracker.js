import React , { Component } from 'react';
import './BugTracker.css';

class BugTracker extends Component{
	render(){
		return(
			<div>
				<section className="stats">
					<span className="closed">2</span>
					<span> / </span>
					<span>5</span>
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