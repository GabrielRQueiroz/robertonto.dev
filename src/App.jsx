import { useContext } from 'react';

import { ViewContext } from './contexts/ViewContext';

import Header from './components/Header/Header';
import ViewButton from './components/ViewButton/ViewButton';

import { MainFrame } from './styles/Global';

function App() {
	const { viewIndex, views } = useContext(ViewContext);

	return (
		<>
			<Header />
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
