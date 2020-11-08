import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

export default function SideBar() {
	return (
	<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

		<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
			<div className="sidebar-brand-icon rotate-n-15">
				<i className="fas fa-user"></i>
			</div>
			<div className="sidebar-brand-text mx-3">Admin</div>
		</Link>

		<li className="nav-item" >
			<Link to="/" className="nav-link">
				<i className="fas fa-pen-alt"></i>
				<span>Dashboard</span>
			</Link>
		</li>
		<li className="nav-item" >
			<Link to="/page" className="nav-link">
				<i className="fas fa-pen-alt"></i>
				<span>Page</span>
			</Link>
		</li>	
		<div className="sidebar-heading">
			Drone
		</div>

		<li className="nav-item">
			<a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true"
			aria-controls="collapseTwo">
				<i className="fas fa-fw fa-tachometer-alt"></i>
				<span>Diều khiển drone</span>
			</a>
			<div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
				<div className="bg-white py-2 collapse-inner rounded">
					<a className="collapse-item" href="buttons.html">Tình trạng drone</a>
					<a className="collapse-item" href="buttons.html">Thiết lập đường bay</a>
					<a className="collapse-item" href="cards.html">Thống kê drone</a>
				</div>
			</div>
		</li>

		<li className="nav-item">
			<a className="nav-link" href="">
			<i className="fas fa-plug"></i>
			<span>Kết nối drone (Flight hub)</span></a>
		</li>

		<li className="nav-item">
			<a className="nav-link" href="">
			<i className="fab fa-buffer"></i>
			<span>Payloads</span></a>
		</li>

		<div className="sidebar-heading">
			Giám sát
		</div>

		<li className="nav-item">
			<a className="nav-link" href="">
			<i className="fas fa-photo-video"></i>
			<span>Hình ảnh video</span></a>
		</li>
	</ul>
	)
}