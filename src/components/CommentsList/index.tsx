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
				{ this.commentStore.map((comment, index) => 
				<div key={index}>
					<hr />
					<h4>{comment.name}</h4>
					<h5>{comment.email}</h5>
					{comment.body}
				</div>) }
				<hr />
			</>
		);
	}
}