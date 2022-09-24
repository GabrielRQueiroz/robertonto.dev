import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PageHeader, SocialButton, SocialButtonWrapper } from './Header.styled';

const Header = () => {
	return (
		<PageHeader>
			<h1 tabIndex={1}>
				O Roberto <span aria-hidden='true'>☕</span>
			</h1>
			<SocialButtonWrapper>
				<SocialButton type='button' tabIndex={2} aria-label='Acessar perfil Github' target={'_blank'} href={'https://github.com/GabrielRQueiroz'}>
					<FontAwesomeIcon icon={faGithub} />
				</SocialButton>
				<SocialButton type='button' tabIndex={2} aria-label='Acessar perfil LinkedIn' target={'_blank'} href={'https://www.linkedin.com/in/gabrielrqueiroz/'}>
					<FontAwesomeIcon icon={faLinkedin} />
				</SocialButton>
			</SocialButtonWrapper>
		</PageHeader>
	);
};

export default Header;
