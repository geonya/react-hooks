import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
	const handle = () => {
		onBefore();
	};
	useEffect(() => {
		document.addEventListener("mousemove", handle);
		return () => document.removeEventListener("mousemove", handle);
	}, []);
	if (typeof onBefore !== "function") {
		return;
	}
};
