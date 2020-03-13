import { PostStore } from './PostStore'
import { SidebarMenuStore } from './SidebarMenuStore';
import { UsersStore } from './UsersStore';


interface Stores {
	[key: string]: any;
}

export const stores: Stores = {
	postStore: new PostStore(),
	sidebarMenuStore: new SidebarMenuStore(),
	usersStore: new UsersStore(),
}