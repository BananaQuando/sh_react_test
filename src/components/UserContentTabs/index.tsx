import React from 'react';
import { inject, observer } from "mobx-react";
import { ITodoStore, ITodosStore } from '../../stores/TodosStore/interfaces';
import Card from '../Card';
import UserTodoList from '../UserTodoList';
import UserPostsList from '../UserPostsList';
import UserAlbumsList from '../UserAlbumsList';

interface Props{
	userID: number,
	todosStore?: ITodosStore,
	todoStore?: ITodoStore,
}


@inject('usersStore')
@observer
export default class UserContentTabs extends React.Component<Props>{

	render() {

		const tabs = [
			{
				title: 'Todos',
				link: '#todos'
			},
			{
				title: 'Posts',
				link: '#posts',
			},
			{
				title: 'Albums',
				link: '#albums'
			}
		]

		const { userID } = this.props;

		return (
			
			<Card cardHeaderClass='p-2' cardTabs={tabs}>
				<div className="tab-content">
					<div className="tab-pane" id="todos">
						<UserTodoList userID={userID} />
					</div>
					<div className="tab-pane" id="posts">
						<UserPostsList userID={userID} />
					</div>
					<div className="tab-pane active" id="albums">
						<UserAlbumsList userID={userID} />
					</div>
				</div>
			</Card>
		);
	}
}