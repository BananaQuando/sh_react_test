import {
	observable,
	action,
	// computed
} from "mobx";
import { ICommentStore, ICommentsList, ICommentsResponce, ICommentsStore, IPostCommentsList } from './interfaces';

export class CommentsStore implements ICommentsStore {

	@observable commentsList = {} as ICommentsList;
	@observable postCommentsList = {} as IPostCommentsList;

	async formatPostResponce(responce: ICommentsResponce): Promise<ICommentStore>{

		return {
			id: responce.id,
			postID: responce.postId,
			name: responce.name,
			email: responce.email,
			body: responce.body,
		}
	}

	@action async getPostComments(postID: number) {

		if (this.postCommentsList[postID]){
			return this.postCommentsList[postID];
		}else{
			const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`);
			const data = await response.json();
			
			if (!this.postCommentsList[postID]) this.postCommentsList[postID] = [];
			data.forEach(async (el: ICommentsResponce)  => {
				const comment = await this.formatPostResponce(el);
				this.commentsList[comment.id] = comment;
				this.postCommentsList[postID].push(comment);
			});
			
			return this.postCommentsList[postID];
		}
	}

	@action async getComment(commentID: number){

		if (this.commentsList[commentID]){
			return this.commentsList[commentID];
		}else{

			const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${commentID}`);
			const data:ICommentsResponce = await response.json();

			const comment = await this.formatPostResponce(data);
			this.commentsList[comment.id] = comment;

			return this.commentsList[comment.id];
		}
	} 
}