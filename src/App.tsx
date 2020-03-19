import React from 'react';
import { observer } from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './Styles';

import Header from './components/Header';
import Sidebar from './components/Sidebar'
import PageAlbums from './components/PageAlbums';
import PageUsers from './components/PageUsers';
import PageUser from './components/PageUser';
import PagePosts from './components/PagePosts';
import HeaderContent from './components/HeaderContent';


@observer
class App extends React.Component{
	render() {
		return (
			<Router>
				<div className="wrapper">
					<Header />
					<Sidebar />
					<div className="content-wrapper">
						<HeaderContent />
						<section className="content">
							<Switch>
								<Route path="/albums" component={PageAlbums} />
								<Route path="/users" exact component={PageUsers} />
								<Route path="/users/:userID" component={PageUser} />
								<Route path="/posts" component={PagePosts} />
							</Switch>
						</section>
					</div>
				</div>
			</Router>
		);
	}
}


export default App;
