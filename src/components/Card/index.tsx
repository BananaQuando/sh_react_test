import React from 'react';


interface CardProps{
	title: string 
}

export default class Card extends React.Component<CardProps> {

	render() {

		const { title, children } = this.props;

		return (
			<div className="card">
				<div className="card-header">
					<h3 className="card-title">{ title }</h3>
					<div className="card-tools">
						<button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
						<i className="fas fa-minus"></i></button>
						<button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
						<i className="fas fa-times"></i></button>
					</div>
				</div>
				<div className="card-body p-0">
					{ children }
				</div>
			</div>
		);
	}
}
