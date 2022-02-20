import { useState } from "react";

const content = [
	{
		tab: "section 1",
		content: "I'm the content of the section1 ",
	},
	{
		tab: "section 2",
		content: "I'm the content of the section2 ",
	},
];

const useTabs = (initialTab, allTabs) => {
	if (!allTabs || !Array.isArray(allTabs)) {
		return;
	}
	const [currentIndex, setCurrentIndex] = useState(initialTab);
	return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

function App() {
	const { currentItem, changeItem } = useTabs(1, content);
	return (
		<div className="App">
			{content.map((section, index) => (
				<button onClick={() => changeItem(index)} key={index}>
					{section.tab}
				</button>
			))}
			<div>{currentItem.content}</div>
		</div>
	);
}

export default App;
