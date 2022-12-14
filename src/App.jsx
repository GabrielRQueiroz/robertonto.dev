import { useContext, useEffect } from 'react';

import { ViewContext } from './contexts/ViewContext';

import Header from './components/Header/Header';
import ViewButton from './components/ViewButton/ViewButton';

import { useTranslation } from 'react-i18next';
import LanguageButton from './components/LanguageButton/LanguageButton';
import Rocket from './components/Rocket/Rocket';
import { MainFrame } from './styles/Global';

import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

const App = () => {
	const { viewIndex, views } = useContext(ViewContext);
	const { t, i18n } = useTranslation();

	useEffect(() => {
		// eslint-disable-next-line
		polyfillCountryFlagEmojis();
	}, []);

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

	useEffect(() => {
		i18n.changeLanguage(localStorage.getItem('i18nextLng') || 'en-US');
	}, [i18n]);

	useEffect(() => {
		i18n.changeLanguage(i18n.language);
	}, [i18n, i18n.language]);

	return (
		<>
			<Header />
			<LanguageButton />
			<>
				<ViewButton tabIndex={-1} title={t('ViewButton.left.title')} direction='left' />
				<ViewButton tabIndex={-1} title={t('ViewButton.right.title')} direction='right' />
			</>
			<MainFrame views={views} viewIndex={viewIndex}>
				{views.map((view) => view)}
			</MainFrame>
			<Rocket />
		</>
	);
};

export default App;
