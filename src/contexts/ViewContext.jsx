import React, { createContext, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import backwardAudio from '../assets/sounds/coming_button_click.mp3';
import forwardAudio from '../assets/sounds/going_button_click.mp3';
import lastViewAudio from '../assets/sounds/last_view.mp3';
import useSoundFX from '../hooks/useSoundFX';
import About from '../views/About/About';
import Greetings from '../views/Greetings/Greetings';
import Portfolio from '../views/Portfolio/Portfolio';

export const ViewContext = createContext(0);

const views = [<Greetings view='Greetings' key={0} />, <About view='About' key={1} />, <Portfolio view='Portfolio' key={2} />];

const ViewContextProvider = (props) => {
	const [viewIndex, setViewIndex] = useState(0);
	const [currentView, setCurrentView] = useState(views[viewIndex]);
	const toggleForwardAudio = useSoundFX(forwardAudio);
	const toggleBackwardAudio = useSoundFX(backwardAudio);
	const toggleLastViewAudio = useSoundFX(lastViewAudio);

	useEffect(() => {
		setCurrentView(views[viewIndex]);
	}, [setCurrentView, viewIndex]);

	const throwLastViewToast = (options) => {
		toast.error('Não há mais nada para esse lado', {
			position: `top-${options?.position}` || 'top-left',
			icon: options?.icon || '🚫',
			duration: options?.duration || 2000,
			style: {
				color: '#fff',
				backgroundColor: '#2b2d2d',
				fontSize: 'clamp(0.8rem, 1.5vw, 1.1rem)',
			},
		});
		toggleLastViewAudio({ volume: 0.1 });
	};

	const nextView = useCallback(() => {
		if (viewIndex < views.length - 1) {
			toggleForwardAudio({ volume: 0.2 });
			setViewIndex(viewIndex + 1);
		}
	}, [viewIndex, toggleForwardAudio]);

	const previousView = useCallback(() => {
		if (viewIndex > 0) {
			toggleBackwardAudio({ volume: 0.2 });
			setViewIndex(viewIndex - 1);
		}
	}, [viewIndex, toggleBackwardAudio]);

	return <ViewContext.Provider value={{ viewIndex, currentView, views, nextView, previousView, throwLastViewToast }}>{props.children}</ViewContext.Provider>;
};

export default ViewContextProvider;
