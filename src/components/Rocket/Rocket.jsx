import React, { useContext, useEffect, useState } from 'react';
import { ViewContext } from '../../contexts/ViewContext';
import { RocketContainer, RocketIcon } from './Rocket.styled';

const Rocket = () => {
	const [direction, setDirection] = useState('right');
	const { currentView, skipToEnd, skipToBeginning } = useContext(ViewContext);

	useEffect(() => {
		if (currentView.props.view === 'Greetings') {
			setDirection('right');
		} else if (currentView.props.view === 'Contact') {
			setDirection('left');
		} else {
			setDirection(null);
		}
	}, [currentView]);

	const flyThoughPage = () => {
		if (direction === 'right') {
			skipToEnd();
		} else if (direction === 'left') {
			skipToBeginning();
		} else {
			return null;
		}
	};

	return (
		<RocketContainer onClick={flyThoughPage} tabIndex={direction === 'right' ? 3 : 999} aria-labelledby='where-to' direction={direction}>
			<RocketIcon direction={direction}>🚀</RocketIcon>
			<p id='where-to'>{direction === 'right' ? 'Entrar em contato' : 'Voltar ao início'}</p>
		</RocketContainer>
	);
};

export default Rocket;
