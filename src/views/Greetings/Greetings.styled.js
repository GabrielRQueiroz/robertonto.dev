import styled from 'styled-components';
import { rotateClipPath } from '../../styles/Animations';

export const GreetingsSection = styled.section`
	@media screen and (max-width: 576px) {
		gap: 0;
	}
`;

export const ImageHolder = styled.figure`
	position: relative;

	height: clamp(40%, 40vw, 100%);
	width: auto;

	display: flex;

	align-items: center;
	justify-content: center;

	flex-grow: 0;

	img {
		height: clamp(70%, 50vw, 100%);
		width: auto;

		object-fit: contain;

		border-radius: 20px;
		animation-name: ${rotateClipPath};
		animation-play-state: ${(props) => (props.onScreen ? 'running' : 'paused')};
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		animation-duration: 15s;

		transition: all 200ms ease-in-out;
	}
`;

export const AudioButton = styled.button`
	position: absolute;

	height: 100%;
	width: 100%;

	background-color: #1d1f1f00;

	display: flex;
	justify-content: center;
	align-items: center;

	border: none;

	transition: all 200ms ease-in;

	z-index: 100;

	:hover,
	:focus {
		cursor: pointer;
		background-color: #1d1f1f90;
	}

	svg {
		opacity: 0;

		font-size: 4rem;
		color: #fff;

		border-radius: 50%;

		transition: all 200ms ease-in;
	}

	:hover svg,
	:focus svg {
		opacity: 1;
	}
`;

export const GreetingsContainer = styled.div`
	display: flex;

	flex-direction: column;

	justify-content: center;
	align-items: center;
	gap: 16px;

	width: calc(25vw + 16px);

	font-size: 1.5rem;

	@media screen and (max-width: 576px) {
		width: calc(50vw + 15vw);
	}
`;

export const GreetingsGreetings = styled.div`
	display: flex;
	flex-direction: column;

	text-align: center;

	align-items: center;
	justify-content: center;

	margin-bottom: 8px;

	h2 {
		font-size: clamp(1rem, 5vw, 2rem);
	}

	p {
		font-size: 1rem;
		font-style: italic;
		font-weight: 400;

		color: darkgray;
	}
`;

export const Separator = styled.p`
	font-size: 0.9rem;
	position: relative;
	background-color: #1d1f1f;

	::before,
	::after {
		content: '';
		width: 100%;
		height: 1px;

		background-color: #fff;
	}

	::before {
		position: absolute;
		top: 50%;
		left: -115%;
	}

	::after {
		position: absolute;
		top: 50%;
		left: 115%;
	}
`;

export const ButtonHolder = styled.div`
	display: flex;

	width: 100%;

	gap: 8px;

	justify-content: space-between;
	align-items: center;
`;