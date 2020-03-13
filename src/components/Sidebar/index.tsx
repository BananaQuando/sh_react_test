import React from 'react';
import logo from './Logo.png';
import SidebarMenu from '../SidebarMenu';

export default class Sidebar extends React.Component {

	render(){
		return (
			<aside className="main-sidebar sidebar-dark-primary elevation-4">
				<a href="/" className="brand-link">
					<img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
					<span className="brand-text font-weight-light">AdminLTE 3</span>
				</a>
				<div className="sidebar">
					<SidebarMenu />
				</div>
			</aside>
		);
	}
}
