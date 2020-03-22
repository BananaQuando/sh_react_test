import React from 'react';
import { inject, observer } from "mobx-react";
import { IUsersStore, IUserStore } from '../../stores/UsersStore/interfaces';
import Card from '../Card';
import { observable } from 'mobx';

interface Props{
	usersStore?: IUsersStore,
	userStore?: IUserStore,
	userID: number,
}


@inject('usersStore')
@observer
export default class UserAboutCard extends React.Component<Props>{

	@observable userStore = {} as IUserStore;

	async componentDidMount(){

		const { userID } = this.props;

		this.userStore = await this.props.usersStore!.getUser(userID);
	}

	render() {

		return (
			<Card cardClass='card-primary' title='About me'>
				<strong><i className="fas fa-book mr-1"></i> Education</strong>
				<p className="text-muted">B.S. in Computer Science from the University of Tennessee at Knoxville</p>
				<hr />
				<strong><i className="fas fa-map-marker-alt mr-1"></i> Location</strong>
				<p className="text-muted">Malibu, California</p>

				<hr />

				<strong><i className="fas fa-pencil-alt mr-1"></i> Skills</strong>

				<p className="text-muted">
				<span className="tag tag-danger">UI Design</span>
				<span className="tag tag-success">Coding</span>
				<span className="tag tag-info">Javascript</span>
				<span className="tag tag-warning">PHP</span>
				<span className="tag tag-primary">Node.js</span>
				</p>

				<hr />

				<strong><i className="far fa-file-alt mr-1"></i> Notes</strong>

				<p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
			</Card>
		);
	}
}