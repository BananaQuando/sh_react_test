import {
	observable,
	action,
	// computed
} from "mobx";
import { ITodosResponce, ITodoStore, ITodosList, ITodosStore } from './interfaces';

export class TodosStore implements ITodosStore {

	@observable todosList = {} as ITodosList;

	async formatTodoResponce(responce: ITodosResponce): Promise<ITodoStore>{
		
		return {
			id: responce.id,
			userID: responce.userId,
			title: responce.title,
			completed: responce.completed,
			
		}
	}

	@action async getUserTodos(userID: number) {

		if (this.todosList[userID]){
			return this.todosList[userID];
		}else{
			const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userID}`);
			const data = await response.json();

			if (!this.todosList[userID]) this.todosList[userID] = [];
			data.forEach(async (el: ITodosResponce)  => {
				this.todosList[userID].push(await this.formatTodoResponce(el));
			});
			
			return this.todosList[userID];
		}
	}
}