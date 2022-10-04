import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ViewContext } from '../../contexts/ViewContext';
import { RocketContainer, RocketIcon } from './Rocket.styled';

const Rocket = () => {
	const [direction, setDirection] = useState('right');
	const { currentView, skipToEnd, skipToBeginning } = useContext(ViewContext);
	const { t } = useTranslation();

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
		<RocketContainer
			type='button'
			onClick={flyThoughPage}
			tabIndex={direction === 'right' ? 3 : 999}
			title={direction === 'right' ? t('Rocket.right') : t('Rocket.left')}
			aria-labelledby='where-to'
			direction={direction}
		>
			<RocketIcon direction={direction}>🚀</RocketIcon>
			<p id='where-to'>{direction === 'right' ? t('Rocket.right') : t('Rocket.left')}</p>
		</RocketContainer>
	);
};

export default Rocket;
