import React from 'react';
import { inject, observer } from "mobx-react";
import { observable } from 'mobx';
import { IUserStore } from '../../stores/UserStore';
import { IHeaderContentStore } from '../../stores/HeaderContentStore';

interface PageProps{
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

	componentWillMount(){

		const { userID } = this.props.match.params;

		this.props.userStore.getUser(userID);		
	}

	setSeoData(){

		this.props.headerContentStore.setTitie(`Страница пользователя "${this.props.userStore.username}"`);
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
				title: `${this.props.userStore.username}`,
				link: `/users/${this.props.userStore.id}`,
				isCurrent: true
			}
		]);

		return false;
	}
	
	render() {

		this.setSeoData();

		return (
			<>

				<h1 className={`test`}>user page1</h1>
			</>
		);
	}
}