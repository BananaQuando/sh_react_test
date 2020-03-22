import React from 'react';
import { inject, observer } from "mobx-react";
import { ITodoStore, ITodosStore } from '../../stores/TodosStore/interfaces';
import { observable } from 'mobx';

interface Props {
	userID: number;
	todosStore?: ITodosStore;
	todoStore?: ITodoStore;
}


@inject('todosStore')
@observer
export default class UserTodoList extends React.Component<Props>{

	@observable todoStore = [] as ITodoStore[];

	async componentDidMount() {

		const { userID } = this.props;
		this.todoStore = await this.props.todosStore!.getUserTodos(userID);
	}

	render() {

		return (
			<table className="table table-hover table-striped">
				<tbody>
					{
						this.todoStore.map((todoItem, index) => {
							
							return <tr key={index}>
								<td>{ todoItem.id }</td>
								<td>
									<div className="icheck-primary">
										<input type="checkbox" value="" id="check1" defaultChecked={todoItem.completed} />
										<label htmlFor="check1"></label>
									</div>
								</td>
								<td className="mailbox-subject">
									{ todoItem.title }
								</td>
							</tr>
						})
					}
				</tbody>
			</table>
		);
	}
}