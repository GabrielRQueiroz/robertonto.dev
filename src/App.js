import { useContext, useEffect, useState } from 'react';

import { ViewContext } from './contexts/ViewContext';

import Header from './components/Header/Header';
import ViewButton from './components/ViewButton/ViewButton';

import { MainFrame } from './styles/Global';

function App() {
	const { viewIndex, views } = useContext(ViewContext);
	const [header, setHeader] = useState('');
	const [emoji, setEmoji] = useState('');
	const [hideIcons, setHideIcons] = useState(false);

	useEffect(() => {
		setHeader(views[viewIndex].props.header);
		setEmoji(views[viewIndex].props.emoji);
		setHideIcons(views[viewIndex].props.hideIcons);
	}, [viewIndex, views]);

	return (
		<>
			<Header header={header} emoji={emoji} hideIcons={hideIcons} />
			<>
				<ViewButton direction='left' />
				<ViewButton direction='right' />
			</>
			<MainFrame views={views} viewIndex={viewIndex}>
				{views.map((view) => view)}
			</MainFrame>
		</>
	);
}

export default App;
