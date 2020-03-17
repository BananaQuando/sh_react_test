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
			id: 1,
			name: 'Posts',
			link: '/posts',
			icon: 'nav-icon far fa-list-alt'
		},
		{
			id: 2,
			name: 'Albums',
			link: '/albums',
			icon: 'nav-icon far fa-images'
		},
		{
			id: 3,
			name: 'Users',
			link: '/users',
			icon: 'nav-icon fas fa-users'
		}
	];
}