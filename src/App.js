import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
	const [title, setTitle] = useState(initialTitle);
	const udateTitle = () => {
		const htmlTitle = document.querySelector("title");
		htmlTitle.innerText = title;
	};
	useEffect(udateTitle, [title]);
	return setTitle;
};

function App() {
	const titleUpdator = useTitle("Loading...");
	setTimeout(() => titleUpdator("Home"), 5000);
	return <div className="App"></div>;
}

export default App;
