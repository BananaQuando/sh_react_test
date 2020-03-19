import {
	observable,
	// action,
	// computed
} from "mobx";


export interface IUserStore {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street:string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		}
	},
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	}
	getUser: Function;
}

export interface IUserResponce {
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

export class UserStore implements IUserStore {

	@observable id = 0;
	@observable name = '';
	@observable username = '';
	@observable email = '';
	@observable phone = '';
	@observable website = '';
	@observable address = {
		street: '',
		suite: '',
		city: '',
		zipcode: '',
		geo: {
			lat: '',
			lng: '',
		}
	};
	@observable company = {
		name: '',
		catchPhrase: '',
		bs: ''
	};

	@observable async getUser(userID: number) {

		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);

		const data: IUserResponce = await response.json();
		this.id = data.id;
		this.name = data.name;
		this.username = data.username;
	}
}