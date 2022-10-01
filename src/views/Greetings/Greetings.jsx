import { useContext, useEffect, useState } from 'react';
import { ViewContext } from '../../contexts/ViewContext';
import useAudio from '../../hooks/useAudio';

import myPicture from '../../assets/images/left-me.jpeg';
import presentationAudio from '../../assets/sounds/presentation.mp3';

import { faDiscord, faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SpringButton from '../../components/SpringButton/SpringButton';

import { AudioButton, ButtonHolder, GreetingsContainer, GreetingsGreetings, GreetingsSection, ImageHolder, Separator } from './Greetings.styled';

import { useTranslation } from 'react-i18next';

const Greetings = () => {
	const [onScreen, setOnScreen] = useState(false);
	const [isPlaying, toggleAudio] = useAudio(presentationAudio);
	const { currentView, previousView } = useContext(ViewContext);
	const { t } = useTranslation();

	const callOnWhatsApp = () => window.open('https://api.whatsapp.com/send?phone=5561983025990', '_blank');
	const callOnDiscord = () => window.open('https://discord.com/users/262736936546992130', '_blank');
	const callOnLinkedIn = () => window.open('https://www.linkedin.com/in/gabrielrqueiroz/', '_blank');
	const callOnInstagram = () => window.open('https://www.instagram.com/gabriel.rqueiroz', '_blank');

	const accessiblyGoToPreviousView = () => currentView.props.view !== 'Greetings' && previousView();

	useEffect(() => {
		currentView.props.view === 'Greetings' ? setOnScreen(true) : setOnScreen(false);
	}, [currentView]);

	return (
		<GreetingsSection>
			<ImageHolder onScreen={onScreen}>
				<AudioButton type='button' onClick={toggleAudio} tabIndex={3} aria-label={t("Greetings.greeting.aria")}>
					<FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
				</AudioButton>
				<img src={myPicture} alt={t("Greetings.picture.alt")} />
			</ImageHolder>
			<GreetingsContainer>
				<GreetingsGreetings tabIndex={4}>
					<h2>{t('Greetings.title')}</h2>
					<p>{t('Greetings.subtitle')}</p>
				</GreetingsGreetings>

				<SpringButton title={t("Greetings.Whatsapp.title")} tabIndex={4} onClick={callOnWhatsApp} rel='noreferrer' color='green'>
					<FontAwesomeIcon icon={faWhatsapp} />
					{t('Greetings.button')}
				</SpringButton>

				<Separator>{t('Greetings.divider')}</Separator>

				<ButtonHolder>
					<SpringButton title={t("Greetings.Discord.title")} tabIndex={5} onClick={callOnDiscord} rel='noreferrer' color='blue'>
						<FontAwesomeIcon icon={faDiscord} />
					</SpringButton>

					<SpringButton title={t("Greetings.Instagram.title")} tabIndex={6} onClick={callOnInstagram} rel='noreferrer' color='pink'>
						<FontAwesomeIcon icon={faInstagram} />
					</SpringButton>

					<SpringButton title={t("Greetings.LinkedIn.title")} tabIndex={7} onClick={callOnLinkedIn} rel='noreferrer' color='lightBlue' onFocus={accessiblyGoToPreviousView}>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</SpringButton>
				</ButtonHolder>
			</GreetingsContainer>
		</GreetingsSection>
	);
};

export default Greetings;
