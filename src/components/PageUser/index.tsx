import React from 'react';
import { inject, observer } from "mobx-react";
import { observable } from 'mobx';
import { IUserStore } from '../../stores/UserStore';
import { IHeaderContentStore } from '../../stores/HeaderContentStore';

interface PageProps{
	userStore : IUserStore,
	match: {
		userID: number
	};
	headerContentStore? : IHeaderContentStore,
}


@inject('userStore')
@inject('headerContentStore')
@observer
export default class PageUser extends React.Component<PageProps>{


	componentWillMount(){

		const { userID } = this.props.match;

		this.props.userStore.getUser(userID);
	}

	render() {
		
		return (
			<h1>user page1</h1>
		);
	}
}