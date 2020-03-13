import { observable, action, computed } from "mobx";

export interface IUsersStore {
	userId: number;
	id: number;
	title: string;
	body: string;
}

interface IResponce {
	usersList: {
		id: number,
		name: string,
		username: string,
		email: string,
		address: {
			street:string,
			suite: string,
			city: string,
			zipcode: string,
			geo: {
				lat: string,
				lng: string
			}
		},
		phone: string,
		website: string,
		company: {
			name: string,
			catchPhrase: string,
			bs: string
		}
	}
}

export class UsersStore implements IUsersStore {

	constructor(){
		this.getUsers();
	}

	@observable userId = 0;
	@observable id = 0;
	@observable title = "";
	@observable body = "";

	@action async getUsers(){
		const response = await fetch('https://jsonplaceholder.typicode.com/users');

		const data: IResponce = await response.json();
		console.log(data);
	}
}