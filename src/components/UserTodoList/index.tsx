import React from 'react';
import { inject, observer } from "mobx-react";
import { ITodoStore, ITodosStore } from '../../stores/TodosStore/interfaces';
import { observable } from 'mobx';

interface Props{
	userID: number,
	todosStore?: ITodosStore,
	todoStore?: ITodoStore,
}


@inject('todosStore')
@observer
export default class UserTodoList extends React.Component<Props>{

	@observable todoStore = [] as ITodoStore[];

	componentWillMount(){

		const { userID } = this.props;
		this.todoStore = this.props.todosStore!.getUserTodos(userID);
		console.log(this.todoStore)
	}

	render() {

		return (
			
			<>test</>
		);
	}
}