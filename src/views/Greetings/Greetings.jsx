import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ViewContext } from '../../contexts/ViewContext';
import useAudio from '../../hooks/useAudio';

import myPicture from '../../assets/images/left-me.jpeg';
import presentationAudio from '../../assets/sounds/presentation.mp3';

import { faDiscord, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SpringButton from '../../components/SpringButton/SpringButton';

import { AudioButton, ButtonHolder, GreetingsContainer, GreetingsGreetings, GreetingsSection, ImageHolder, Separator } from './Greetings.styled';

const Greetings = () => {
	const [onScreen, setOnScreen] = useState(false);
	const [isPlaying, toggleAudio] = useAudio(presentationAudio);
	const { currentView, viewIndex, previousView } = useContext(ViewContext);

	const callOnWhatsApp = () => window.open('https://web.whatsapp.com/send?phone=5561983025990', '_blank');
	const callOnDiscord = () => window.open('https://discord.com/users/262736936546992130', '_blank');
	const callOnLinkedIn = () => window.open('https://www.linkedin.com/in/gabrielrqueiroz/', '_blank');
	const callOnInstagram = () => window.open('https://www.instagram.com/gabriel.rqueiroz', '_blank');

	const accessiblyGoToPreviousView = useCallback(() => {
		currentView.props.view !== 'Greetings' && previousView();
	}, [currentView, previousView]);

	useEffect(() => {
		if (viewIndex === 0) {
			setOnScreen(true);
		} else {
			setOnScreen(false);
		}
	}, [viewIndex, setOnScreen]);

	return (
		<GreetingsSection>
			<ImageHolder onScreen={onScreen}>
				<AudioButton type='button' onClick={toggleAudio} tabIndex={3} aria-label='Pressione para uma apresentação breve sobre mim'>
					<FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
				</AudioButton>
				<img src={myPicture} alt='Eu e minha vó' />
			</ImageHolder>
			<GreetingsContainer>
				<GreetingsGreetings class='greetings'>
					<h2>Tudo bem?</h2>
					<p>Que tal uma conversa?</p>
				</GreetingsGreetings>

				<SpringButton tabIndex={4} onClick={callOnWhatsApp} color='green'>
					<FontAwesomeIcon icon={faWhatsapp} />
					Manda um oi!
				</SpringButton>

				<Separator>ou aqui</Separator>

				<ButtonHolder>
					<SpringButton tabIndex={5} onClick={callOnDiscord} color='blue'>
						<FontAwesomeIcon icon={faDiscord} />
					</SpringButton>

					<SpringButton tabIndex={6} onClick={callOnInstagram} color='pink'>
						<FontAwesomeIcon icon={faInstagram} />
					</SpringButton>

					<SpringButton tabIndex={7} onClick={callOnLinkedIn} color='lightBlue' onFocus={accessiblyGoToPreviousView}>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</SpringButton>
				</ButtonHolder>
			</GreetingsContainer>
		</GreetingsSection>
	);
};

export default Greetings;
