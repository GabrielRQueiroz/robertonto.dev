import { createContext, useEffect, useState } from 'react';
import backwardAudio from '../assets/sounds/coming_button_click.mp3';
import forwardAudio from '../assets/sounds/going_button_click.mp3';
import rocketSound from '../assets/sounds/rocket_sound.wav';
import useSoundFX from '../hooks/useSoundFX';
import About from '../views/About/About';
import Contact from '../views/Contact/Contact';
import Greetings from '../views/Greetings/Greetings';
import Portfolio from '../views/Portfolio/Portfolio';
import Resume from '../views/Resume/Resume';

export const ViewContext = createContext(0);

const views = [
	<Greetings view='Greetings' heading='O Roberto' emoji='☕' hideIcons={false} key={0} />,
	<About view='About' heading='O Roberto' emoji='☕' hideIcons={false} key={1} />,
	<Resume view='Resume' heading='Résumé' emoji='💼' hideIcons={true} key={2} />,
	<Portfolio view='Portfolio' heading='Portfólio' emoji='💻' hideIcons={true} key={3} />,
	<Contact view='Contact' heading='Contato' emoji='📫' hideIcons={false} key={4} />,
];

const ViewContextProvider = (props) => {
	const [viewIndex, setViewIndex] = useState(0);
	const [currentView, setCurrentView] = useState(views[viewIndex]);
	const toggleForwardAudio = useSoundFX(forwardAudio);
	const toggleBackwardAudio = useSoundFX(backwardAudio);
	const toggleRocketSound = useSoundFX(rocketSound);

	useEffect(() => {
		setCurrentView(views[viewIndex]);
	}, [viewIndex]);

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
		toggleRocketSound({ volume: 1 });
		setViewIndex(views.length - 1);
	};

	const skipToBeginning = () => {
		toggleRocketSound({ volume: 1 });
		setViewIndex(0);
	};

	return <ViewContext.Provider value={{ viewIndex, currentView, views, nextView, previousView, skipToEnd, skipToBeginning }}>{props.children}</ViewContext.Provider>;
};

export default ViewContextProvider;
