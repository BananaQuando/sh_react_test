import React from 'react';
import { inject, observer } from "mobx-react";
import { IPostStore, IPostsStore } from '../../stores/PostsStore/interfaces';
import { IUsersStore, IUserStore } from '../../stores/UsersStore/interfaces';
import { observable } from 'mobx';
import { Link } from 'react-router-dom';
import CommentsList from '../CommentsList';

interface CardProps{
	postID: number;
	postsStore?: IPostsStore;
	postStore?: IPostStore;
	usersStore?: IUsersStore;
	userStore?: IUserStore;
	loadComments?: boolean
}

@inject('postsStore')
@inject('usersStore')
@observer
export default class PostBlock extends React.Component<CardProps> {

	@observable postStore = {} as IPostStore;
	@observable userStore = {} as IUserStore;
	@observable loadComments = false;

	async componentDidMount(){

		const { postID } = this.props;

		this.postStore = await this.props.postsStore!.getPost(postID);

		const { userID } = this.postStore;

		this.userStore = await this.props.usersStore!.getUser(userID);
	}


	render() {

		const { id: userID, name } = this.userStore;
		const { body, title, id: postID } = this.postStore;

		return (
			<div className="post">
				<div className="user-block">
					<img className="img-circle img-bordered-sm" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/768px-Placeholder_no_text.svg.png" alt="user" />
					<span className="username">
						<Link to={`/users/${userID}`}>{ name }</Link>
						<a href="#ads" className="float-right btn-tool"><i className="fas fa-times"></i></a>
					</span>
					<span className="description">Shared publicly - { Math.floor(Math.random() * 12) }:{ Math.floor(Math.random() * 60) } PM today</span>
				</div>
				<h5>{ title }</h5>
				<p>{body}</p>
				<p className='clearfix'>
					<span className="float-right">
						<button onClick={() => { this.loadComments = this.loadComments ? false : true; }} className="link-black text-sm">
							<i className="far fa-comments mr-1"></i> Comments
						</button>
					</span>
				</p>

				{ this.loadComments ? <CommentsList postID={postID} /> : ''}

				<input className="form-control form-control-sm" type="text" placeholder="Type a comment" />
			</div>
		);
	}
}
