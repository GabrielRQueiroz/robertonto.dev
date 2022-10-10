import styled from 'styled-components';

export const ServicesSection = styled.section`
	width: 100vw;
`;

export const ServicesContainer = styled.div`
	display: flex;
	flex-direction: row;

	width: 100%;
	height: auto;

	padding: 0 5rem;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;

export const ServiceIconWrapper = styled.div`
	flex: 1;

	display: flex;
	justify-content: center;
	align-items: center;

	height: 100%;
`;
