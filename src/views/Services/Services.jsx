import React from 'react';
import { ServiceIconWrapper, ServicesContainer, ServicesSection } from './Services.styled';

const Services = () => {
	return (
		<ServicesSection>
			<ServicesContainer>
				<ServiceIconWrapper>🖥️</ServiceIconWrapper>
				<ServiceIconWrapper>📱</ServiceIconWrapper>
				<ServiceIconWrapper>🌐</ServiceIconWrapper>
			</ServicesContainer>
		</ServicesSection>
	);
};

export default Services;
