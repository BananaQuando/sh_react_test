import React from 'react';


interface CardProps{
	title?: string,
	cardClass?: string,
	cardBodyClass?: string,
	cardHeaderClass?: string,
}

export default class Card extends React.Component<CardProps> {

	render() {

		const { title, children, cardBodyClass, cardHeaderClass, cardClass } = this.props;

		return (
			<div className={`card ${cardClass}`}>
				{ title ? <div className={`card-header ${cardHeaderClass}`}>
					<h3 className="card-title">{ title }</h3>
					<div className="card-tools">
						<button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
						<i className="fas fa-minus"></i></button>
						<button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
						<i className="fas fa-times"></i></button>
					</div>
				</div> : '' }
				<div className={`card-body ${cardBodyClass}`}>
					{ children }
				</div>
			</div>
		);
	}
}
