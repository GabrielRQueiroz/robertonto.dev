import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import backwardAudio from '../assets/sounds/coming_button_click.mp3';
import forwardAudio from '../assets/sounds/going_button_click.mp3';
import lastViewAudio from '../assets/sounds/last_view.mp3';
import useSoundFX from '../hooks/useSoundFX';
import About from '../views/About/About';
import Greetings from '../views/Greetings/Greetings';
import Portfolio from '../views/Portfolio/Portfolio';
import Resume from '../views/Resume/Resume';

export const ViewContext = createContext(0);

const views = [
	<Greetings view='Greetings' header='O Roberto' emoji='☕' hideIcons={false} key={0} />,
	<About view='About' header='O Roberto' emoji='☕' hideIcons={false} key={1} />,
	<Resume view='Resume' header='Résumé' emoji='💼' hideIcons={true} key={2} />,
	<Portfolio view='Portfolio' header='Portfolio' emoji='💻' hideIcons={true} key={3} />,
];

const ViewContextProvider = (props) => {
	const [viewIndex, setViewIndex] = useState(0);
	const [currentView, setCurrentView] = useState(views[viewIndex]);
	const toggleForwardAudio = useSoundFX(forwardAudio);
	const toggleBackwardAudio = useSoundFX(backwardAudio);
	const toggleLastViewAudio = useSoundFX(lastViewAudio);

	useEffect(() => {
		setCurrentView(views[viewIndex]);
	}, [viewIndex]);

	const throwLastViewToast = (options) => {
		toast.error('Não há mais nada para esse lado', {
			position: `top-${options?.position}` || 'top-left',
			icon: options?.icon || '🚫',
			duration: options?.duration || 2000,
			style: {
				color: '#fff',
				backgroundColor: '#2b2d2d',
				fontSize: 'clamp(0.8em, 1.5vw, 1.1em)',
			},
		});
		toggleLastViewAudio({ volume: 0.1 });
	};

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

	return <ViewContext.Provider value={{ viewIndex, currentView, views, nextView, previousView, throwLastViewToast }}>{props.children}</ViewContext.Provider>;
};

export default ViewContextProvider;
