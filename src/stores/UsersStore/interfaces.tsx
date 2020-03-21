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

export interface IUsersList {
	[key: number] : IUserStore
}

export interface IUsersStore {
	usersList: IUsersList,
	getUser: Function,
	getAllUsers: Function
}
