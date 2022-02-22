export const useNotification = (title, options) => {
	if (!("Notification" in window)) {
		return;
	}
	const fireNotif = () => {
		if (Notification.permission !== "granted") {
			Notification.requestPermission().then((permission) => {
				if (permission === "granted") {
					new Notification(title, options);
				} else {
					return;
				}
			});
		} else {
			new Notification(title, options);
		}
	};
	return fireNotif;
};

const App = () => {
	const triggerNotif = useNotification("Heellllooww!!", { body: "hi" });
	return (
		<div className="App">
			<button onClick={triggerNotif}>Noti</button>
		</div>
	);
};
