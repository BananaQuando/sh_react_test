export interface IPostsResponce {
	id: number;
	userId: number;
	title: string;
	body: string;
}

export interface IPostStore {
	id: number;
	userID: number;
	title: string;
	body: string;
}

export interface IPostsList {
	[key: number]: IPostStore
}

export interface IUsersPostsList {
	[key: number]: IPostStore[]
}

export interface IPostsStore {
	postsList: IPostsList,
	usersPostsList: IUsersPostsList,
	getUserPosts: Function,
	getPost: Function
}
