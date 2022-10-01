import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';
import { ViewContext } from '../../contexts/ViewContext';

import { PageHeader, SocialButton, SocialButtonWrapper } from './Header.styled';

const Header = () => {
	const { viewIndex, views } = useContext(ViewContext);
	const [heading, setHeading] = useState('');
	const [emoji, setEmoji] = useState('');
	const [hideIcons, setHideIcons] = useState(false);

	useEffect(() => {
		setHeading(views[viewIndex].props.heading);
		setEmoji(views[viewIndex].props.emoji);
		setHideIcons(views[viewIndex].props.hideIcons);
	}, [viewIndex, views]);

	return (
		<PageHeader hideIcons={hideIcons}>
			<h1 tabIndex={1}>
				{heading} <span aria-hidden='true'>{emoji}</span>
			</h1>
			{!hideIcons && (
				<SocialButtonWrapper>
					<SocialButton type='button' tabIndex={2} aria-label='Acessar perfil Github' target={'_blank'} href={'https://github.com/GabrielRQueiroz'}>
						<FontAwesomeIcon icon={faGithub} />
					</SocialButton>
					<SocialButton type='button' tabIndex={2} aria-label='Acessar perfil LinkedIn' target={'_blank'} href={'https://www.linkedin.com/in/gabrielrqueiroz/'}>
						<FontAwesomeIcon icon={faLinkedin} />
					</SocialButton>
				</SocialButtonWrapper>
			)}
		</PageHeader>
	);
};

export default Header;
