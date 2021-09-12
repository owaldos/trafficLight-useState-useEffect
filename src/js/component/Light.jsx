import React from "react";
import "../../styles/styles.css";
import PropTypes from "prop-types";

const Light = ({ lightOn }) => {
	return (
		<>
			<div className={lightOn ? "lamp light" : "lamp"}></div>
		</>
	);
};

export default Light;

Light.propTypes = {
	lightOn: PropTypes.bool
};
