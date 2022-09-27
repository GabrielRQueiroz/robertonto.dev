import Flicking from '@egjs/react-flicking';
import styled from 'styled-components';

export const PortfolioSection = styled.section`
	display: flex;

	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100vh;
`;

export const PortfolioSlider = styled(Flicking)`
	height: 100%;
`;

export const PortfolioSlide = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 50vw;
	height: auto;

	border-radius: 10px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

	border: 2px dashed white;
	border-radius: 10px;

	:focus {
		& > figure > img {
			filter: brightness(0.8) contrast(0.8);
		}

		& figure > div > h3 {
			opacity: 1;
			transform: translateY(0);
		}

		& figure > div > p {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media screen and (max-width: 768px) {
		width: 70vw;
	}

	@media screen and (max-width: 576px) {
		width: 85vw;
	}
`;

export const PortfolioSlideFigure = styled.figure`
	position: relative;
	width: 100%;
	height: 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	& div:first-of-type {
		position: absolute;

		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;

		gap: 0.2rem;

		pointer-events: none;

		@media screen and (max-width: 768px) {
			transform: translateY(-10%);
		}
	}
`;

export const PortfolioSlideImage = styled.img`
	width: 100%;
	height: auto;

	object-fit: contain;

	border-radius: 10px 10px 0 0;

	filter: brightness(1);

	transition: filter 250ms ease-in-out;

	:hover,
	:focus {
		filter: brightness(0.8) contrast(0.8);

		& + div > h3 {
			opacity: 1;
			transform: translateY(0);
		}

		& + div > p {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

export const PortfolioSlideTitle = styled.h3`
	padding: 0.2rem 1rem;
	opacity: 0;

	transform: translateY(50%);

	font-size: clamp(1rem, 3.5vw, 1.3rem);
	font-weight: 700;
	text-align: center;
	border-radius: 10px;

	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

	background-color: #111111;

	transition: 250ms ease-in-out;
`;

export const PortfolioProjectType = styled.p`
	padding: 0.25rem 0.5rem;
	opacity: 0;

	transform: translateY(-50%);

	font-size: clamp(0.75rem, 4vw, 0.9rem);
	font-weight: 700;
	text-align: center;
	font-style: italic;
	text-transform: capitalize;

	border-radius: 10px;

	background-color: #11111190;
	color: #dedede;

	z-index: 20;

	transition: 250ms ease-in-out;
`;

export const PortfolioSlideLinksWrapper = styled.div`
	position: absolute;

	bottom: 0;
	right: 0;

	display: flex;
	justify-content: center;

	padding: 0.5rem;
	border-radius: 4px 0 0 0;

	gap: 1rem;

	background-color: #111111;

	font-size: clamp(0.8rem, 4vw, 1.2rem);

	& > a {
		transition: all 250ms ease-in-out;

		:hover {
			filter: brightness(0.8);
		}

		svg {
			font-size: clamp(0.9rem, 4vw, 1.2rem);
			margin-right: 0.25rem;
		}
	}
`;

export const PortfolioSlideDetails = styled.div`
	width: 100%;

	padding: 0 1rem 1rem;

	border-top: 1px solid white;

	& > h6 {
		margin: 1rem 0;
		font-size: clamp(1.25rem, 4vw, 1.5rem);
	}

	& > ul {
		display: flex;

		flex-wrap: wrap;
		gap: 0.5rem;

		padding: 0 0.5rem;

		list-style: none;
	}
`;

export const PortfolioSlideDetail = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 0.5rem;
	padding: 0.75rem;

	border-radius: 0.25rem;
	background-color: #0f0f0f90;
	color: #dedede;

	font-size: clamp(0.9rem, 4vw, 1rem);

	font-weight: 700;

	background-color: ${(props) => props.hoverColor}95;

	cursor: pointer;

	& > svg {
		font-size: clamp(1.25rem, 4vw, 1.5rem);
		transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	:hover {
		& > svg {
			transform: rotate(20deg);
		}
	}
`;
