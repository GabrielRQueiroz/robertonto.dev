import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageButtonBtn, LanguageButtonFace, LanguageButtonHolder } from './LanguageButton.styled';

const LanguageButton = () => {
	const { t, i18n } = useTranslation();

	const handleLanguageChange = () => {
		if (window.confirm(t('Language.confirmation'))) {
			if (i18n.language === 'en-US') {
				i18n.changeLanguage('pt-BR'); 
				window.location.reload()
			} else {
				i18n.changeLanguage('en-US');
				window.location.reload()
			}
		}
	};

	return (
		<LanguageButtonHolder>
			<FontAwesomeIcon icon={faLanguage} />
			<div></div>
			<LanguageButtonBtn
				type='button'
				aria-label={`Mudar lingua para ${i18n.language === 'en-US' ? 'portuguese' : 'inglês'}`}
				title={`Mudar lingua para ${i18n.language === 'en-US' ? 'portuguese' : 'inglês'}`}
				tabIndex={1}
				onClick={handleLanguageChange}
			>
				<LanguageButtonFace>{i18n.language === 'en-US' ? '🇧🇷' : '🇺🇸'}</LanguageButtonFace>
			</LanguageButtonBtn>
		</LanguageButtonHolder>
	);
};

export default LanguageButton;
