export interface ICommentsResponce {
	id: number;
	postId: number;
	name: string;
	email: string;
	body: string;
}

export interface ICommentStore {
	id: number;
	postID: number;
	name: string;
	email: string;
	body: string;
}

export interface ICommentsList {
	[key: number]: ICommentStore
}

export interface IPostCommentsList {
	[key: number]: ICommentStore[]
}

export interface ICommentsStore {
	commentsList: ICommentsList,
	postCommentsList: IPostCommentsList,
	getPostComments: Function,
	getComment: Function
}
