import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const variants = {
	hidden: { scale: 0 },
	visible: { scale: 1 },
};

const Header = () => (
	<div className="app__banner app__flex">
		<motion.div
			whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className="app__banner-info"
		>
			<div className="app__banner-badge">
				<div className="badge-cmp app__flex">
					<span>👋</span>
					<div style={{ marginLeft: 20 }}>
						<p className="p-text">Hello, I am</p>
						<h1 className="head-text">Olaleye</h1>
					</div>
				</div>

				<div className="tag-cmp app__flex">
					<p className="p-text">Fullstack Web Developer</p>
					<p className="p-text">UI/UX Developer</p>
				</div>
			</div>
		</motion.div>

		<motion.div
			whileInView={{ opacity: [0, 1] }}
			transition={{ duration: 0.5, delayChildren: 0.5 }}
			className="app__banner-img"
		>
			<img src={images.profile} alt="profile_bg" />
			<motion.img
				whileInView={{ scale: [0, 1] }}
				transition={{ duration: 1, ease: "easeInOut" }}
				src={images.circle}
				alt="profile_circle"
				className="overlay_circle"
			/>
			<motion.div
				transition={{ duration: 2, ease: "easeInOut" }}
				initial="hidden"
				animate="visible"
				variants={variants}
			>
				<span />
			</motion.div>
		</motion.div>

		<motion.div
			variants={scaleVariants}
			whileInView={scaleVariants.whileInView}
			className="app__banner-circles"
		>
			{[
				images.react,
				images.redux,
				images.sass,
				images.node,
				images.html,
			].map((circle, index) => (
				<div className="circle-cmp app__flex" key={`circle-${index}`}>
					<img src={circle} alt={`profile_${circle}`} />
				</div>
			))}
		</motion.div>
	</div>
);

export default AppWrap(Header, 'home');