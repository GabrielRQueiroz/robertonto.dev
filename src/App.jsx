import { useContext, useEffect } from 'react';

import { ViewContext } from './contexts/ViewContext';

import Header from './components/Header/Header';
import ViewButton from './components/ViewButton/ViewButton';

import { MainFrame } from './styles/Global';
import Rocket from './components/Rocket/Rocket';

function App() {
	const { viewIndex, views } = useContext(ViewContext);

	useEffect(() => {
		// Disable pinch zoom
		document.addEventListener('gesturestart', (e) => e.preventDefault());

		// Disable double tap zoom
		document.addEventListener(
			'touchstart',
			(e) => {
				if (e.touches.length > 1) {
					e.preventDefault();
				}
			},
			{ passive: false }
		);
	}, []);

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
			<Rocket />
		</>
	);
}

export default App;
