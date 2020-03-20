import React from 'react';
import { inject, observer } from "mobx-react";
import { IUserStore, IUsersStore } from '../../stores/UsersStore/interfaces';
import Card from '../Card';

interface Props{
	userStore?: IUserStore,
	usersStore?: IUsersStore,
	userID: number,
}


@inject('userStore')
@inject('headerContentStore')
@observer
export default class UserProfileCard extends React.Component<Props>{

	userStore = {} as IUserStore;

	componentWillMount(){
		const { userID } = this.props;
		this.props.usersStore!.getUser(userID);
	}

	render() {

		const {
			name,
			email,
			phone,
			website,
			company
		} = this.props.userStore!;

		return (

			<Card cardClass='card-primary card-outline' cardBodyClass='box-profile'>
				<div className="text-center">
					<img className="profile-user-img img-fluid img-circle"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/768px-Placeholder_no_text.svg.png"
						alt="User profile" />
				</div>
				<h3 className="profile-username text-center">{ name }</h3>

				<p className="text-muted text-center">{ company? company.name : '' }</p>

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