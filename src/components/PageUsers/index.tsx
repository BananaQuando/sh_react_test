import React from 'react';
import { inject, observer } from "mobx-react";
import { observable } from 'mobx';
import { IUsersStore } from '../../stores/UsersStore/interfaces';
import { IHeaderContentStore } from '../../stores/HeaderContentStore';
import { Link } from 'react-router-dom';
import Table from '../Table';
import Card from '../Card';

interface PageProps{
	usersStore: IUsersStore,
	headerContentStore: IHeaderContentStore,
}

interface tableFormat{
	tableHead: string[]
	tableBody: any[][]
}

@inject('usersStore')
@inject('headerContentStore')
@observer
class PageUsers extends React.Component <PageProps>{

	tableData: tableFormat = {
		tableHead: [],
		tableBody: []
	};

	setSeoData(){
		this.props.headerContentStore.setTitie('Пользователи');
		this.props.headerContentStore.setBreadcrumbs([
			{
				title: 'Главная',
				link: '/',
				isCurrent: false
			},
			{
				title: 'Пользователи',
				link: '',
				isCurrent: true
			}
		]);
	}

	@observable formatTableData() {

		const { usersList } = this.props.usersStore;

		const tableData: tableFormat = {
			tableHead: ['id', 'Имя', 'Название организации', 'Телефон', 'Email'],
			tableBody: [],
		};

		usersList.forEach((user) => {
			if (user.id !== 0){
				const userLink = `/users/${user.id}`;
				tableData.tableBody.push([
					String(user.id),
					<><Link to={userLink}>{user.name}</Link> ({user.username})</>,
					user.company_name,
					user.phone,
					user.email
				]);
			}
		});

		return tableData;
	}

	componentWillMount() {

		this.props.usersStore.getAllUsers();
		this.setSeoData();
	}

	render() {

		return (
			<div className="row">
				<div className="col-sm-12">
					<Card title='Test' cardBodyClass='p-0'>
						<Table tableData={this.formatTableData()}></Table>
					</Card>
				</div>
			</div>
		);
	}
}


export default PageUsers;