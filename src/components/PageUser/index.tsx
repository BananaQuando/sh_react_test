import React from 'react';
import { inject, observer } from "mobx-react";
import { IUsersStore, IUserStore } from '../../stores/UsersStore/interfaces';
import { IHeaderContentStore } from '../../stores/HeaderContentStore';
import UserProfileCard from '../UserProfileCard';

interface PageProps{
	usersStore: IUsersStore,
	userStore: IUserStore,
	match: {
		params: {
			userID: number
		}
	}
	headerContentStore: IHeaderContentStore,
}


@inject('userStore')
@inject('headerContentStore')
@observer
export default class PageUser extends React.Component<PageProps>{

	async componentDidMount(){

		const { userID } = this.props.match.params;

		await this.props.usersStore.getUser(userID);
		this.setSeoData();
	}

	setSeoData(){

		const { id, username } = this.props.userStore;

		this.props.headerContentStore.setTitie(`Страница пользователя "${username}"`);
		this.props.headerContentStore.setBreadcrumbs([
			{
				title: 'Главная',
				link: '/',
				isCurrent: false
			},
			{
				title: 'Пользователи',
				link: '/users',
				isCurrent: false
			},
			{
				title: `${username}`,
				link: `/users/${id}`,
				isCurrent: true
			}
		]);
	}
	
	render() {

		const { id } = this.props.userStore;

		return (
			<div className="row">
				<div className="col-md-3">
					<UserProfileCard userID={id} />
					<UserProfileCard userID={5} />
				</div>
			</div>
		);
	}
}