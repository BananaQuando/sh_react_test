import { PostStore } from './PostStore'
import { SidebarMenuStore } from './SidebarMenuStore';
import { UsersStore } from './UsersStore';
import { HeaderContentStore } from './HeaderContentStore';
import { TodosStore } from './TodosStore';
import { PostsStore } from './PostsStore';
import { CommentsStore } from './CommentsStore';


interface Stores {
	[key: string]: any;
}

export const stores: Stores = {
	postStore: new PostStore(),
	sidebarMenuStore: new SidebarMenuStore(),
	usersStore: new UsersStore(),
	headerContentStore: new HeaderContentStore(),
	todosStore: new TodosStore(),
	postsStore: new PostsStore(),
	commentsStore: new CommentsStore(),
}