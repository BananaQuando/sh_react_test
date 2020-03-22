import React from 'react';


interface CardProps{
	title?: string,
	cardClass?: string,
	cardBodyClass?: string,
	cardHeaderClass?: string,
	cardTools?: boolean,
	cardTabs?: {
		title: string,
		link: string
	}[]
}

export default class Card extends React.Component<CardProps> {

	render() {

		const { title, children, cardBodyClass, cardHeaderClass, cardClass, cardTabs, cardTools } = this.props;

		return (
			<div className={`card ${cardClass}`}>
				{ title || cardTabs || cardTools ? <div className={`card-header ${cardHeaderClass}`}>
					{ title ? <h3 className="card-title">{ title }</h3> : ''}
					{
						cardTabs ?
						<ul className="nav nav-pills">
							{ cardTabs.map((tab, index) => (
								<li key={index} className="nav-item">
									<a className={`nav-link ${ index === 0 ? 'active' : ''}`} href={ tab.link } data-toggle="tab">{ tab.title }</a>
								</li>
							)) }
						</ul>
						: ''
					}
					{
						cardTools ?
						<div className="card-tools">
							<button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
							<i className="fas fa-minus"></i></button>
							<button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
							<i className="fas fa-times"></i></button>
						</div>
						: ''
					}
				</div> : '' }
				<div className={`card-body ${cardBodyClass}`}>
					{ children }
				</div>
			</div>
		);
	}
}
