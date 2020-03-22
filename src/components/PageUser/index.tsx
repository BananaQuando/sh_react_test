import React from 'react';
import { inject, observer } from "mobx-react";
import { IUsersStore } from '../../stores/UsersStore/interfaces';
import { IHeaderContentStore } from '../../stores/HeaderContentStore';
import UserProfileCard from '../UserProfileCard';
import UserAboutCard from '../UserAboutCard';
import UserContentTabs from '../UserContentTabs'

interface PageProps{
	usersStore: IUsersStore;
	match: {
		params: {
			userID: number;
		}
	}
	headerContentStore: IHeaderContentStore;
}


@inject('usersStore')
@inject('headerContentStore')
@observer
export default class PageUser extends React.Component<PageProps>{

	componentDidMount(){

		const { userID } = this.props.match.params;

		this.setSeoData(userID);
	}

	async setSeoData(userID: number){

		const { id, username } = await this.props.usersStore.getUser(userID);

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

		const { userID } = this.props.match.params;

		return (
			<div className="row">
				<div className="col-md-3">
					<UserProfileCard userID={userID} />
					<UserAboutCard userID={userID} />
				</div>
				<div className="col-md-9">
					<UserContentTabs userID={userID} />
				</div>
			</div>
		);
	}
}