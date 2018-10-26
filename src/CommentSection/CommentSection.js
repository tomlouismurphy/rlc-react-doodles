import React, { Component } from 'react';
import './CommentSection.css';

export class CommentSection extends Component {
	render() {
		return (
			<div>
				<div id="comment-container" className="col-sm-10 offset-sm-1">
					<h2 id="comments-title">Comments</h2>
					<textarea className="col-sm-10" />
				</div>
			</div>
		);
	}
}