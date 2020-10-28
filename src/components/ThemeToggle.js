import React from "react";
import { MoonIcon, SunIcon } from "./Icons";

const ThemeToggle = () => {
	const changeTheme = () => {
		console.log(document.querySelector("body").classList);
		document.querySelector("body").classList.toggle("light");
	};
	return (
		<div className="mode">
			<SunIcon />
			<label className="toggle" onClick={changeTheme}>
				<input type="checkbox" />
				<span className="slider" role="button" tabIndex="0"></span>
			</label>
			<MoonIcon />
		</div>
	);
};

export default ThemeToggle;
