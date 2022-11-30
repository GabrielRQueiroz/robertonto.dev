import { faLaptopCode, faMobileAndroidAlt, faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ServicesContainer, ServicesSection, ServiceWrapper } from './Services.styled';

const Services = () => {
	const { t } = useTranslation();
	const viewPaginationIndex = 2;

	return (
		<ServicesSection>
			<ServicesContainer tabIndex={viewPaginationIndex * 100 + 1} aria-label={t('Service.title')}>
				<ServiceWrapper>
					<FontAwesomeIcon icon={faLaptopCode} />
					<h3 tabIndex={viewPaginationIndex * 100 + 2}>{t('Service.heading.web')}</h3>
					<p tabIndex={viewPaginationIndex * 100 + 3}>{t('Service.paragraph.web')} 📈</p>
				</ServiceWrapper>
				<ServiceWrapper>
					<FontAwesomeIcon icon={faMobileAndroidAlt} />
					<h3 tabIndex={viewPaginationIndex * 100 + 4}>{t('Service.heading.mobile')}</h3>
					<p tabIndex={viewPaginationIndex * 100 + 5}>{t('Service.paragraph.mobile')} 🤩</p>
				</ServiceWrapper>
				<ServiceWrapper>
					<FontAwesomeIcon icon={faServer} />
					<h3 tabIndex={parseInt(viewPaginationIndex) * 100 + 6}>{t('Service.heading.backend')}</h3>
					<p tabIndex={parseInt(viewPaginationIndex) * 100 + 7}>{t('Service.paragraph.backend')} 📊</p>
				</ServiceWrapper>
			</ServicesContainer>
		</ServicesSection>
	);
};

export default Services;
