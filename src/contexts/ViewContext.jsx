import PropTypes from 'prop-types';
import { createContext, Fragment, useEffect, useMemo, useState } from 'react';
import backwardAudio from '../assets/sounds/coming_button_click.mp3';
import forwardAudio from '../assets/sounds/going_button_click.mp3';
import rocketSound from '../assets/sounds/rocket_sound.wav';
import useSoundFX from '../hooks/useSoundFX';
import About from '../views/About/About';
import Contact from '../views/Contact/Contact';
import Greetings from '../views/Greetings/Greetings';
import Portfolio from '../views/Portfolio/Portfolio';
import Resume from '../views/Resume/Resume';

import { useTranslation } from 'react-i18next';
import Services from '../views/Services/Services';

export const ViewContext = createContext(0);

const ViewContextProvider = (props) => {
	const [viewIndex, setViewIndex] = useState(0);
	const [currentView, setCurrentView] = useState(<Fragment />);
	const toggleForwardAudio = useSoundFX(forwardAudio);
	const toggleBackwardAudio = useSoundFX(backwardAudio);
	const toggleRocketSound = useSoundFX(rocketSound);
	const { t } = useTranslation();

	const views = useMemo(
		() => [
			<Greetings view='Greetings' heading={t('Header.Greetings')} emoji='☕' hideIcons={false} key={0} />,
			<About view='About' heading={t('Header.About')} emoji='☕' hideIcons={false} key={1} />,
			<Services view='Services' heading={t('Header.Services')} emoji='🧠' hideIcons={false} key={2} />,
			<Resume view='Resume' heading={t('Header.Resume')} emoji='💼' hideIcons={true} key={3} />,
			<Portfolio view='Portfolio' heading={t('Header.Portfolio')} emoji='💻' hideIcons={true} key={4} />,
			<Contact view='Contact' heading={t('Header.Contact')} emoji='📫' hideIcons={false} key={5} />,
		],
		[t]
	);

	useEffect(() => {
		setCurrentView(views[0]);
	}, [views]);

	useEffect(() => {
		setCurrentView(views[viewIndex]);
	}, [views, viewIndex]);

	const nextView = () => {
		if (viewIndex < views.length - 1) {
			toggleForwardAudio({ volume: 0.2 });
			setViewIndex(viewIndex + 1);
		}
	};

	const previousView = () => {
		if (viewIndex > 0) {
			toggleBackwardAudio({ volume: 0.2 });
			setViewIndex(viewIndex - 1);
		}
	};

	const skipToEnd = () => {
		toggleRocketSound({ volume: 0.2 });
		setViewIndex(views.length - 1);
	};

	const skipToBeginning = () => {
		toggleRocketSound({ volume: 0.2 });
		setViewIndex(0);
	};

	return <ViewContext.Provider value={{ viewIndex, currentView, views, nextView, previousView, skipToEnd, skipToBeginning }}>{props.children}</ViewContext.Provider>;
};

ViewContextProvider.propTypes = {
	children: PropTypes.node,
};

export default ViewContextProvider;
