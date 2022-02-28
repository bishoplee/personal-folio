import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants/';
import { MenuItem } from './MenuItem';
import navMenuList from "../../components";

import "./Navbar.scss";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	};

	const variantsUL = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	};

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img className="my__logo" src={images.logo} alt="logo" />
			</div>
			<ul className="app__navbar-links">
				{navMenuList.map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>

			<div className="app__navbar-menu">
				<HiMenu onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
						initial="hidden"
						animate="visible"
						variants={variants}
					>
						<HiX onClick={() => setToggle(false)} />

						<motion.ul variants={variantsUL}>
							{navMenuList.map((item) => (
								<MenuItem
									item={item}
									key={item}
									toggler={() => setToggle(false)}
								/>
							))}
						</motion.ul>
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;