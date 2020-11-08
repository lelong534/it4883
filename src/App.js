import React from 'react'
import './App.css'
import './sb-admin-2.css'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Page from './containers/Page'
import DashBoard from './containers/DashBoard'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
  	<Router>
		<div id="wrapper">
			<SideBar />

		    <div id="content-wrapper" className="d-flex flex-column">

		      <div id="content">

		        <NavBar />

		        <div className="container-fluid">

		          	<div className="d-sm-flex align-items-center justify-content-between mb-4">
			        	<Switch>
			        		<Route path="/" exact component={DashBoard} />
			        		<Route path="/page" component={Page} />
			        	</Switch>
			        </div>
			      </div>
			    </div>
			</div>
		</div>
	</Router>
  );
}

export default App;
