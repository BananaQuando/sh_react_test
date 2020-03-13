import React from 'react';
import { observer } from "mobx-react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar'
import PageAlbums from './components/PageAlbums';
import PageUsers from './components/PageUsers';
import PagePosts from './components/PagePosts';



@observer
class App extends React.Component{
	render() {
		return (
			<Router>
				<div className="wrapper">
					<Header />
					<Sidebar />
					<div className="content-wrapper">
						<Switch>
							<Route path="/albums" component={PageAlbums} />
							<Route path="/users" component={PageUsers} />
							<Route path="/posts" component={PagePosts} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}


export default App;
