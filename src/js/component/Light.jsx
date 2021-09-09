import React from "react";
import "../../styles/styles.css";
import PropTypes from "prop-types";

const Light = ({ lightOn }) => {
	return (
		<>
			<div className={lightOn ? "light luz" : "light"}></div>
		</>
	);
};

export default Light;

Light.propTypes = {
	lightOn: PropTypes.bool
};
