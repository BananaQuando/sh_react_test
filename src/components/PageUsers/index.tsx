import React from 'react';
import { inject, observer } from "mobx-react";
import { IUsersStore } from '../../stores/UsersStore'

interface PageProps{
	usersStore? : IUsersStore
}

@inject('usersStore')
@observer
class PageUsers extends React.Component <PageProps>{
	render() {
		return (
			<h1>Users page</h1>
		);
	}
}


export default PageUsers;