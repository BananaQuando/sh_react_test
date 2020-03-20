import {
		observable,
		action,
		// computed
	} from "mobx";
import { IUserResponce, IUserStore, IUsersStore } from './interfaces';

export class UsersStore implements IUsersStore {

	@observable usersList: IUserStore[] = [];

	@action async getAllUsers(){
		const response = await fetch('https://jsonplaceholder.typicode.com/users');

		const users = await response.json();
		if (users){
			users.forEach((user: IUserResponce) => {
				
				this.usersList[user.id] = this.formatUserResponce(user);
			});
		}
	}

	formatUserResponce(responce: IUserResponce){

		return {
			id: responce.id,
			username: responce.username,
			company: responce.company,
			name: responce.name,
			phone: responce.phone,
			email: responce.email,
			website: responce.website,
			address: responce.address,
			link: `/users/${responce.id}`,
			company_name: responce.company.name
		}
	}

	@action async getUser(userID: number) {

		if (this.usersList[userID]){
			return this.usersList[userID];
		}else{
			const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
			const data: IUserResponce = await response.json();


		}

		

		// this.id = data.id;
		// this.name = data.name;
		// this.username = data.username;
		// this.address = data.address;
		// this.company = data.company;
		// this.email = data.email;
		// this.phone = data.phone;
		// this.website = data.website;
	}
}