export interface ITodosResponce {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

export interface ITodoStore {
	id: number;
	userID: number;
	title: string;
	completed: boolean;
}

export interface ITodosList {
	[key: number]: ITodoStore[]
}

export interface ITodosStore {
	todosList: ITodosList,
	getUserTodos: Function
}
