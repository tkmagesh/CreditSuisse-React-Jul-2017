import React from 'react';

export default function(props){
	let { bugs } = props;
	let closedCount = bugs.reduce((prevResult, bug) => bug.isClosed ? ++prevResult : prevResult, 0);
	return (
		<section className="stats">
			<span className="closed">{closedCount}</span>
			<span> / </span>
			<span>{bugs.length}</span>
		</section>
	)
}