import {
		observable,
		// action,
		// computed
	} from "mobx";

export interface ISidebarMenuStore {
	menuList: {
		id: number,
		name: string,
		link: string,
		icon?: string
		childrens ?: {
			id: number,
			name: string,
			link: string,
			icon?: string
		}[]
	}[];
}

export class SidebarMenuStore implements ISidebarMenuStore {

	@observable menuList = [
		{
			id: 3,
			name: 'Users',
			link: '/users',
			icon: 'nav-icon fas fa-users'
		}
	];
}