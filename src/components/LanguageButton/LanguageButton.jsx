import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageButtonBtn, LanguageButtonHolder, ViewButtonFace } from './LanguageButton.styled';

const LanguageButton = () => {
	const { t, i18n } = useTranslation();

	const handleLanguageChange = () => {
		// Ask user to confirm language change
		if (window.confirm(t('Language.confirmation'))) {
			if (i18n.language === 'en') {
				localStorage.setItem('language', 'pt-br');
				window.location.reload();
			} else {
				localStorage.setItem('language', 'en');
				window.location.reload();
			}
		}
	};

	return (
		<LanguageButtonHolder>
			<FontAwesomeIcon icon={faLanguage} />
			<div></div>
			<LanguageButtonBtn
				aria-label={`Mudar lingua para ${i18n.language === 'en' ? 'portuguese' : 'inglês'}`}
				title={`Mudar lingua para ${i18n.language === 'en' ? 'portuguese' : 'inglês'}`}
				tabIndex={1}
				onClick={handleLanguageChange}
			>
				<ViewButtonFace>{i18n.language === 'en' ? '🇧🇷' : '🇺🇸'}</ViewButtonFace>
			</LanguageButtonBtn>
		</LanguageButtonHolder>
	);
};

export default LanguageButton;
