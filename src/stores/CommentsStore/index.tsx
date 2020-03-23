import {
	observable,
	action,
	// computed
} from "mobx";
import { IPostStore, IPostsList, IPostsResponce, IPostsStore, IUsersPostsList } from './interfaces';

export class PostsStore implements IPostsStore {

	@observable postsList = {} as IPostsList;
	@observable usersPostsList = {} as IUsersPostsList;

	async formatPostResponce(responce: IPostsResponce): Promise<IPostStore>{

		return {
			id: responce.id,
			userID: responce.userId,
			title: responce.title,
			body: responce.body,
		}
	}

	@action async getUserPosts(userID: number) {

		if (this.usersPostsList[userID]){
			return this.usersPostsList[userID];
		}else{
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);
			const data = await response.json();

			if (!this.usersPostsList[userID]) this.usersPostsList[userID] = [];
			data.forEach(async (el: IPostsResponce)  => {
				const post = await this.formatPostResponce(el);
				this.postsList[post.id] = post;
				this.usersPostsList[userID].push(post);
			});
			
			return this.usersPostsList[userID];
		}
	}

	@action async getPost(postID: number){

		if (this.postsList[postID]){
			return this.postsList[postID];
		}else{

			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`);
			const data:IPostsResponce = await response.json();

			const post = await this.formatPostResponce(data);
			this.postsList[post.id] = post;

			return this.postsList[post.id];
		}
	} 
}