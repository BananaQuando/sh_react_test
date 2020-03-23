import React from 'react';
import { inject, observer } from "mobx-react";
import { ICommentStore, ICommentsStore } from '../../stores/CommentsStore/interfaces';
import { observable } from 'mobx';

interface Props {
	postID: number;
	commentsStore?: ICommentsStore;
	commentStore?: ICommentStore;
}


@inject('commentsStore')
@observer
export default class CommentsList extends React.Component<Props>{

	@observable commentStore = [] as ICommentStore[];

	async componentDidMount() {

		const { postID } = this.props;

		this.commentStore = await this.props.commentsStore!.getPostComments(postID);
	}

	render() {
		
		return (
			<>
				{ this.commentStore.map((comment, index) => (
					<div key={index} className="info-box">
						<span className="info-box-icon bg-danger"><i className="far fa-star"></i></span>
						<div className="info-box-content">
						<span className="info-box-number">{comment.name}</span>
						<span className="info-box-text"><a href={`mailto:${comment.email}`}>{comment.email}</a></span>
						<p>{comment.body}</p>
						</div>
					</div>
				))}
			</>
		);
	}
}