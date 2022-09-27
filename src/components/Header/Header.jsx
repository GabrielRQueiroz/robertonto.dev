import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PageHeader, SocialButton, SocialButtonWrapper } from './Header.styled';

const Header = ({ header, emoji, hideIcons }) => {
	return (
		<PageHeader hideIcons={hideIcons}>
			<h1 tabIndex={1}>
				{header} <span aria-hidden='true'>{emoji}</span>
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
