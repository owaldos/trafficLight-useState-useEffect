import React, { useEffect, useState } from "react";
import "../../styles/styles.css";
import Light from "./Light.jsx";

const TrafficLights = () => {
	const [state, setState] = useState({
		lightRed: true,
		lightOrange: false,
		lightGreen: false
	});

	useEffect(() => {
		let time = setInterval(() => {
			if (state.lightRed === true) {
				setState({
					lightRed: false,
					lightOrange: true,
					lightGreen: false
				});
			} else if (state.lightOrange === true) {
				setState({
					lightRed: false,
					lightOrange: false,
					lightGreen: true
				});
			} else
				setState({
					lightRed: true,
					lightOrange: false,
					lightGreen: false
				});
		}, 3000);
		return () => {
			clearInterval(time);
		};
	}, [state]);

	return (
		<div className="mt-5 justify-content-center w-25 mx-auto">
			<div className="row justify-content-center">
				<div className=" soporteSemaforo"></div>
			</div>
			<div className="row justify-content-center">
				<div className=" row trafficLight text-center">
					<Light lightOn={state.lightRed} />
					<Light lightOn={state.lightOrange} />
					<Light lightOn={state.lightGreen} />
				</div>
			</div>
		</div>
	);
};

export default TrafficLights;
