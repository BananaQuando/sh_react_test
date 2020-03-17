import React from 'react';
import { inject, observer } from "mobx-react";
import { observable } from 'mobx';
import { IUsersStore } from '../../stores/UsersStore'
import { IHeaderContentStore } from '../../stores/HeaderContentStore'
import Table from '../Table';
import Card from '../Card';

interface PageProps{
	usersStore? : IUsersStore,
	headerContentStore? : IHeaderContentStore,
}

interface tableFormat{
	tableHead: string[]
	tableBody: string[][]
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
		this.props.headerContentStore!.setTitie('Пользователи');
		this.props.headerContentStore!.setBreadcrumbs([
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

		const { usersList } = this.props.usersStore!;

		const tableData: tableFormat = {
			tableHead: ['id', 'Имя', 'Название организации', 'Телефон', 'Email'],
			tableBody: [],
		};

		usersList.forEach((el) => {
			if (el.userId !== 0){
				tableData.tableBody.push([
					String(el.userId), `${el.name} (${el.username})`, el.company_name, el.phone, el.email
				]);
			}
		});

		return tableData;
	}

	componentWillMount() {

		this.setSeoData();
	}

	render() {

		return (
			<Card title="Test">
				<Table tableData={this.formatTableData()}></Table>
			</Card>
		);
	}
}


export default PageUsers;