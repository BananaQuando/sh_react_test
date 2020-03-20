export interface IUserResponce {
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
}

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
	},
	company_name: string,
	link: string,
}

export interface IUsersStore {
	usersList: IUserStore[];
	getUser: Function,
	getAllUsers: Function
}
