import { useRef } from "react";

export const useFullScreen = (callBack) => {
	const element = useRef();
	const triggerFull = () => {
		if (element.current) {
			element.current.requestFullscreen();
			if (callBack && typeof callBack === "function") {
				callBack(true);
			}
		}
	};
	const exitFull = () => {
		document.exitFullscreen();
		if (callBack && typeof callBack === "function") {
			callBack(false);
		}
	};
	return { element, triggerFull, exitFull };
};

const App = () => {
	const onFullS = (isFull) => {
		console.log(isFull ? "we are full" : "we are small");
	};
	const { element, triggerFull, exitFull } = useFullScreen(onFullS);
	return (
		<div className="App">
			<img
				ref={element}
				src="https://i.ibb.co/R6RwNxx/grape.jpg"
				alt="grape"
				width="250"
				onClick={exitFull}
			/>

			<button onClick={triggerFull}>Make Full Screen</button>
		</div>
	);
};
