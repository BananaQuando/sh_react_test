import React from 'react';
import { inject, observer } from "mobx-react";
import { Link } from 'react-router-dom'
import { ISidebarMenuStore } from '../../stores/SidebarMenuStore';

interface MenuProps {
	sidebarMenuStore?: ISidebarMenuStore
}

@inject('sidebarMenuStore')
@observer
export default class SidebarMenu extends React.Component <MenuProps>{

	render(){
		
		return (
			<nav className="mt-2">
				<ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
					<li className="nav-header">Menu</li>
					{this.props.sidebarMenuStore?.menuList.map((el) => (
						<li key={el.id} className="nav-item">
							<Link to={el.link} className="nav-link">
								{el.icon ? <i className={el.icon}></i> : ''}
								<p className="text">{el.name}</p>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}