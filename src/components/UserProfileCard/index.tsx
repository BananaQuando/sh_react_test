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
export default class UserProfileCard extends React.Component<Props>{

	@observable userStore = {} as IUserStore;

	async componentDidMount(){

		const { userID } = this.props;

		this.userStore = await this.props.usersStore!.getUser(userID);
	}

	render() {

		const {
			name,
			email,
			phone,
			website,
			company
		} = this.userStore;

		return (

			<Card cardClass='card-primary card-outline' cardBodyClass='box-profile'>
				<div className="text-center">
					<img className="profile-user-img img-fluid img-circle"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/768px-Placeholder_no_text.svg.png"
						alt="User profile" />
				</div>
				<h3 className="profile-username text-center">{ name }</h3>

				<p className="text-muted text-center">{ company ? company.name : '' }</p>

				<ul className="list-group list-group-unbordered mb-3">
					<li className="list-group-item">
						<b>Email</b> <span className="float-right">{email}</span>
					</li>
					<li className="list-group-item">
						<b>Phone</b> <span className="float-right">{phone}</span>
					</li>
					<li className="list-group-item">
						<b>Website</b> <span className="float-right">{website}</span>
					</li>
				</ul>
			</Card>
		);
	}
}