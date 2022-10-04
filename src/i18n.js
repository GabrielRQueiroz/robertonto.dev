import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en-US',
		debug: true,
		backend: {
			loadPath: process.env.REACT_APP_I18N_PATH,
		},
		ns: [process.env.REACT_APP_NAMESPACE],
		defaultNS: process.env.REACT_APP_NAMESPACE,
		keySeparator: false,
		interpolation: {
			escapeValue: false,
			formatSeparator: ',',
		},
		react: {
			wait: true,
		},
	});

export default i18n;
