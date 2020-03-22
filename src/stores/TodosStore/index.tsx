import {
	observable,
	action,
	// computed
} from "mobx";
import { ITodosResponce, ITodoStore, ITodosList, ITodosStore } from './interfaces';

export class TodosStore implements ITodosStore {

	@observable todosList:ITodosList = [];

	formatTodoResponce(responce: ITodosResponce): ITodoStore{

		return {
			id: responce.id,
			userID: responce.userId,
			title: responce.title,
			completed: responce.completed
		}
	}

	@action async getUserTodos(userID: number) {

		if (this.todosList[userID]){
			return this.todosList[userID];
		}else{
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userID}`);
			const data: ITodosResponce = await response.json();
			console.log(data)
			this.todosList[userID].push(this.formatTodoResponce(data));
			return this.todosList[userID];
		}
	}
}