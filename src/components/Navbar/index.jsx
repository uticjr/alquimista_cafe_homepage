import React from 'react';
import { cx } from '../../utils/classname';
import { useToggle } from '../../utils/hooks';
import logo from '../../assets/logos/logo.png';

const Navbar = () => {
	const navbar = useToggle(false);

	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="/" >
					<img src={logo} />
				</a>

				<a
					role="button"
					className="navbar-burger burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
					onClick={navbar.toggle}
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>
			<div id="navbarBasicExample" className={cx('navbar-menu', { 'is-active': navbar.active })}>
				<div className="navbar-end">
					<a className="navbar-item">Evento</a>
					<a className="navbar-item">Workshop</a>
					<a className="navbar-item">Barista</a>
					<a className="navbar-item">Campeonato</a>
					<a className="navbar-item">Contato</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
