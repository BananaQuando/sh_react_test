import React from 'react';
import { inject, observer } from "mobx-react";
import { IHeaderContentStore } from '../../stores/HeaderContentStore'

interface HeaderProps{
	headerContentStore? : IHeaderContentStore
}



@inject('headerContentStore')
@observer
export default class Sidebar extends React.Component <HeaderProps> {

	render(){
		const { headingTitle, breadcrumbs } = this.props.headerContentStore!;
		return (
			<section className="content-header">
				<div className="container-fluid">
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1>{headingTitle}</h1>
						</div>
						<div className="col-sm-6">
							<ol className="breadcrumb float-sm-right">
								{breadcrumbs.map(el => {
									if (el.isCurrent){
										return <li className="breadcrumb-item">{el.title}</li>
									}else{
										return <li className="breadcrumb-item"><a href={el.link}>{el.title}</a></li>
									}
								})}
							</ol>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
