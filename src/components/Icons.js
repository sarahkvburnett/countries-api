import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSearch,
	faExclamation,
	faLongArrowAltLeft,
	faSun,
	faMoon,
} from "@fortawesome/free-solid-svg-icons";

export const SearchIcon = () => <FontAwesomeIcon icon={faSearch} />;
export const ExclaimIcon = () => <FontAwesomeIcon icon={faExclamation} />;
export const BackIcon = () => <FontAwesomeIcon icon={faLongArrowAltLeft} />;
export const SunIcon = () => <FontAwesomeIcon icon={faSun} />;
export const MoonIcon = () => <FontAwesomeIcon icon={faMoon} />;
