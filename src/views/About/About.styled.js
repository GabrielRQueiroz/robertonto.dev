import styled from 'styled-components';
import { shakingEffect } from '../../styles/Animations';

export const AboutSection = styled.section`
	gap: calc(8px + 2vw);

	@media screen and (max-width: 576px) {
		padding-top: 24px;
		gap: 24px;
	}
`;

export const AboutContainer = styled.div`
	display: flex;

	position: relative;

	flex-direction: column;
	justify-content: center;
	align-items: center;

	border: 2px #fafafa;
	border-style: dashed;
	border-radius: 16px;

	position: relative;

	height: 100%;
	max-height: 100%;
	width: 55vw;

	::after {
		content: 'Sobre mim';
		position: absolute;

		top: 0;
		left: 50%;

		padding: 0 4px;

		border-bottom: 1px solid #fff;
		border-top: 1px solid #fff;

		transform: translateY(-50%) translateX(-50%);

		width: auto;
		height: auto;
		background-color: #1d1f1f;

		font-size: clamp(1.2rem, 5vw, 1.5rem);

		text-align: center;
	}

	@media screen and (max-width: 576px) {
		height: 50%;
		width: 85%;
	}
`;

export const ImageHolder = styled.button`
	flex-grow: 0;

	width: 20%;
	position: relative;

	background-color: transparent;
	border: none;

	cursor: pointer;

	img {
		height: auto;
		width: 100%;

		border-radius: 16px;

		transform: rotate(5deg);
	}

	&:hover img {
		animation: ${shakingEffect} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
		transform: translate3d(0, 0, 0) rotate(5deg);
		perspective: 1000px;
	}

	::before {
		content: 'Willow! 😺';
		position: absolute;

		height: auto;
		width: 100%;

		text-align: center;

		font-size: clamp(1.3rem, 5vw, 2rem);
		font-family: 'Qwitcher Grypen', cursive;

		color: #fff;

		top: 75%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);

		transition: all 250ms ease-in-out;
	}

	&:hover::before {
		top: 115%;
	}

	@media screen and (max-width: 576px) {
		height: 15%;
		width: auto;

		img {
			height: 100%;
			width: auto;
		}
	}
`;

export const AboutTable = styled.table`
	height: 100%;
	width: 100%;

	tbody {
		height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	tr {
		display: flex;

		justify-content: space-evenly;
		align-items: center;

		flex-grow: 1;

		height: 50%;
		width: 100%;
	}

	tr:first-child {
		border-bottom: 1px dashed #fafafa;
	}

	td:not(:last-child) {
		border-right: 1px dashed #fafafa;
	}

	td {
		display: flex;
		flex-direction: column;

		gap: 8px;

		justify-content: center;
		align-items: center;

		text-align: center;

		height: 100%;
		width: 50%;
		padding: clamp(8px, 10vw, 12px);
	}

	td p {
		position: relative;
	}

	td p::after {
		content: '';
		position: absolute;

		height: 2px;
		width: 0;
		background-color: #fafafa;

		bottom: -2px;
		left: 50%;
		transform: translateX(-50%);

		transition: all 500ms cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	td:hover p::after {
		width: 80%;
	}

	td svg {
		font-size: 1.5rem;
	}

	@media screen and (max-width: 576px) {
		tbody {
			flex-direction: row;
		}

		tr {
			flex-direction: column;
			height: 100%;
		}

		tr:first-child {
			border-right: 1px dashed #fafafa;
			border-bottom: none;
		}

		td {
			flex-direction: row;
			width: 100%;
			font-size: clamp(0.8rem, 2vw, 0.9rem);
			padding: 8px;
		}

		td:not(:last-child) {
			border-right: none;
			border-bottom: 1px dashed #fafafa;
		}

		td svg {
			font-size: clamp(1.2rem, 5vw, 1.5rem);
		}
	}
`;
