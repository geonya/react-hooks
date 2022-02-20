export const useConfirm = (message = "", onConfirm, rejection) => {
	if (onConfirm && typeof onConfirm !== "function") return;
	if (rejection && typeof rejection !== "function") return;
	const confirmAction = () => {
		if (window.confirm(message)) {
			onConfirm();
		} else {
			rejection();
		}
	};
	return confirmAction;
};
