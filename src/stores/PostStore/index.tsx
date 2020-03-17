import {
		observable,
		// action,
		// computed
	} from "mobx";

export interface IPostStore {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface IResponce {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export class PostStore implements IPostStore {

	constructor(){
		this.getPost();
	}

	@observable userId = 0;
	@observable id = 0;
	@observable title = "";
	@observable body = "";

	async getPost(){
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

		const data: IResponce = await response.json();
		this.userId = data.userId;
		this.id = data.id;
		this.title = data.title;
		this.body = data.body;
	}
}