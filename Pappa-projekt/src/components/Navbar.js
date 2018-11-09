import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';


class Navbar extends Component {
	render() {
		return(
			<div>
				<nav>
					<h2>Blog app</h2>
						<ul>
							<li><Link to="/">Signia</Link></li>
							<li><NavLink to="/about">Om oss</NavLink></li>
							<li><NavLink to="/contact">Kontakt</NavLink></li>
						</ul>
				</nav>
			</div>
		)
	}
}

export default Navbar;