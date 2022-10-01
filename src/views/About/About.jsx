import { useContext } from 'react';

import catPicture from '../../assets/images/right-willow.jpg';
import catAudio from '../../assets/sounds/meow.mp3';

import { ViewContext } from '../../contexts/ViewContext';
import useSoundFX from '../../hooks/useSoundFX';

import { faCat, faDice, faHatWizard, faMusic, faPersonChalkboard, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AboutContainer, AboutSection, AboutTable, ImageHolder } from './About.styled';

const About = () => {
	const { nextView, previousView, currentView } = useContext(ViewContext);
	const toggleCatAudio = useSoundFX(catAudio);

	const accessiblyGoToNextView = () => currentView.props.view !== 'About' && nextView();

	const accessiblyGoToPreviousView = () => currentView.props.view !== 'About' && previousView();

	return (
		<AboutSection>
			<AboutContainer>
				<AboutTable role='presentation' onFocus={accessiblyGoToNextView} tabIndex={8} aria-label='Sobre mim'>
					<tbody>
						<tr>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faHatWizard} />
								<p>Gosto de RPG mas acabo nunca jogando.</p>
							</td>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faSquareRootVariable} />
								<p>Me divirto com matemática.</p>
							</td>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faMusic} />
								<p>
									Meu gênero musical favorito é lo<span aria-hidden='true'>-</span>fi.
								</p>
							</td>
						</tr>
						<tr>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faDice} />
								<p>Amo jogos de tabuleiro.</p>
							</td>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faPersonChalkboard} />
								<p>Gosto de ensinar o que sei.</p>
							</td>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faCat} />
								<p>Tenho um gato persa bonitão.</p>
							</td>
						</tr>
					</tbody>
				</AboutTable>
			</AboutContainer>
			<ImageHolder type='button' onClick={toggleCatAudio} onFocus={accessiblyGoToPreviousView} tabIndex={10} aria-label='Esse é meu gato. Pressione para ouvir seu miado.'>
				<img src={catPicture} alt='Meu gato persa' />
			</ImageHolder>
		</AboutSection>
	);
};

export default About;
