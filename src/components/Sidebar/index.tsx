import React from 'react';
import logo from './Logo.png';
import SidebarMenu from '../SidebarMenu';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {

	render(){
		return (
			<aside className="main-sidebar sidebar-dark-primary elevation-4">
				<Link to='/' className="brand-link">
					<img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
					<span className="brand-text font-weight-light">AdminLTE 3</span>
				</Link>
				<div className="sidebar">
					<SidebarMenu />
				</div>
			</aside>
		);
	}
}
