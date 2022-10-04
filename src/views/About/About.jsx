import { useContext } from 'react';

import catPicture from '../../assets/images/right-willow.jpg';
import catAudio from '../../assets/sounds/meow.mp3';

import { ViewContext } from '../../contexts/ViewContext';
import useSoundFX from '../../hooks/useSoundFX';

import { faCat, faDice, faHatWizard, faMusic, faPersonChalkboard, faSquareRootVariable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useTranslation } from 'react-i18next';
import { AboutContainer, AboutSection, AboutTable, ImageHolder } from './About.styled';

const About = () => {
	const { nextView, previousView, currentView } = useContext(ViewContext);
	const toggleCatAudio = useSoundFX(catAudio);
	const { t } = useTranslation();

	const accessiblyGoToNextView = () => currentView.props.view !== 'About' && nextView();

	const accessiblyGoToPreviousView = () => currentView.props.view !== 'About' && previousView();

	return (
		<AboutSection>
			<AboutContainer title={t('About.title')}>
				<AboutTable role='presentation' onFocus={accessiblyGoToNextView} tabIndex={8} aria-label={t("About.table.aria")}>
					<tbody>
						<tr>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faHatWizard} />
								<p>{t('About.table1')}</p>
							</td>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faSquareRootVariable} />
								<p>{t('About.table2')}</p>
							</td>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faMusic} />
								<p>
									{t('About.table3')}
								</p>
							</td>
						</tr>
						<tr>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faDice} />
								<p>{t('About.table4')}</p>
							</td>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faPersonChalkboard} />
								<p>{t('About.table5')}</p>
							</td>
							<td tabIndex={9}>
								<FontAwesomeIcon icon={faCat} />
								<p>{t('About.table6')}</p>
							</td>
						</tr>
					</tbody>
				</AboutTable>
			</AboutContainer>
			<ImageHolder type='button' onClick={toggleCatAudio} onFocus={accessiblyGoToPreviousView} tabIndex={10} aria-label={t('About.cat.aria')}>
				<img src={catPicture} alt={t('About.cat.alt')} />
			</ImageHolder>
		</AboutSection>
	);
};

export default About;
