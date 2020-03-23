import React from 'react';
import { inject, observer } from "mobx-react";
import { IPostStore, IPostsStore } from '../../stores/PostsStore/interfaces';
import { observable } from 'mobx';
import PostBlock from '../PostBlock'

interface Props {
	userID: number;
	postsStore?: IPostsStore;
	postStore?: IPostStore;
}


@inject('postsStore')
@observer
export default class UserPostsList extends React.Component<Props>{

	@observable postStore = [] as IPostStore[];

	async componentDidMount() {

		const { userID } = this.props;
		this.postStore = await this.props.postsStore!.getUserPosts(userID);
	}

	render() {

		return (
			<>
				{ this.postStore.map((postItem, index) => <PostBlock key={index} postID={postItem.id} />) }
			</>
		);
	}
}