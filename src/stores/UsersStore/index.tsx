import {
		observable,
		action,
		// computed
	} from "mobx";

export interface IUsersStore {
	usersList: {
		userId: number,
		name: string,
		username: string,
		phone: string,
		email: string,
		link: string,
		company_name: string
	}[];
}

interface IResponceItem {
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

export class UsersStore implements IUsersStore {

	constructor(){
		this.getUsers();
	}

	@observable usersList = [{
		userId: 0,
		name: '',
		username: '',
		phone: '',
		email: '',
		link: '',
		company_name: ''
	}];

	@action async getUsers(){
		const response = await fetch('https://jsonplaceholder.typicode.com/users');

		const users = await response.json();
		if (users){
			users.forEach((user: IResponceItem) => {

				this.usersList.push({
					userId: user.id,
					name: user.name,
					phone: user.phone,
					username: user.username,
					email: user.email,
					company_name: user.company.name,
					link: `/users/${user.id}`,
				})
			});
		}
	}
}