import styled from 'styled-components';

export const ServicesSection = styled.section`
	width: 100vw;

	max-height: 70vh;
`;

export const ServicesContainer = styled.div`
	display: flex;
	flex-direction: row;

	width: 100%;
	height: 100%;

	gap: 1rem;

	padding: 0 clamp(3em, 10vw, 5em);

	@media screen and (max-width: 576px) {
		flex-direction: column;

		gap: 0;

		> div {
			text-align: center;
		}
	}
`;

export const ServiceWrapper = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100%;

	padding: 0 clamp(0.25em, 15vw, 1.2em);

	border-right: 2px dashed #fff;

	:last-child {
		border-right: none;
	}

	> svg {
		font-size: clamp(2rem, 7.5vw, 10rem);
		transition: 0.25s ease-in-out;

		cursor: pointer;

		&:hover {
			transform: scale(1.1) rotate(5deg);
		}
	}

	> h3 {
		font-size: clamp(1.25em, 2.5vw, 1.5em);
		text-align: center;

		margin: 0.2em 0 0.5em;
	}

	> p {
		font-size: clamp(0.8em, 2.5vw, 1.2em);
	}

	@media screen and (max-width: 576px) {
		padding: 0.75em 0 1em;

		border-right: none;

		border-bottom: 2px dashed #fff;

		&:last-child {
			border-bottom: none;
		}
	}
`;
