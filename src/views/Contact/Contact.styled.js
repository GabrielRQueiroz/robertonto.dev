import styled from 'styled-components';
import { spinning } from '../../styles/Animations';

export const ContactSection = styled.section`
	height: auto;
	width: 100vw;
`;

export const ContactContainer = styled.div`
	height: 100%;
	width: 50vw;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	gap: 2em;

	background-color: rgb(27, 29, 30);

	z-index: 996;

	> button {
		> div {
			> svg {
				animation: ${({ loading }) => (loading ? spinning : 'none')} 1s linear infinite;
			}
		}
	}

	@media screen and (max-width: 992px) {
		gap: 1em;
		width: 60vw;
	}

	@media screen and (max-width: 768px) {
		width: 70vw;
	}

	@media screen and (max-width: 576px) {
		width: 85vw;
	}
`;

export const ContactForm = styled.form`
	width: 100%;
	flex-grow: 1;

	position: relative;

	display: flex;

	align-items: center;
	flex-wrap: wrap;

	padding: 1.5em;

	gap: 8px;

	border: 2px dashed #fff;
	border-radius: 8px;

	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

	> div {
		flex-grow: 1;

		display: flex;
		flex-direction: column;

		gap: 8px;

		:last-of-type {
			width: 100%;
		}

		> label {
			font-size: clamp(1.1em, 4vw, 1.25em);
			font-weight: 600;

			width: 100%;

			display: flex;

			flex-direction: column;

			align-items: flex-start;
			justify-content: center;
		}

		> input {
			background-color: rgb(30, 32, 34);

			width: 100%;
			height: 40px;

			font-size: 1em;

			padding: 0 1em;

			border: 1px solid #ccc;
			border-radius: 4px;
		}

		> textarea {
			background-color: rgb(30, 32, 34);

			width: 100%;
			min-height: 25vh;

			font-size: 1em;

			padding: 1.25em;

			border: 1px solid #ccc;
			border-radius: 4px;

			resize: none;

			font-family: 'Roboto', sans-serif;

			color: #fff;

			::-webkit-scrollbar {
				width: 0.4em;

				padding: 0.25em;

				background-color: transparent;
				border-radius: 4px;

				box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

				overflow: hidden;
				scrollbar-color: #000 #fff;
			}

			::-webkit-scrollbar-thumb {
				background-color: rgb(365, 365, 365);

				border-radius: 4px;
				border: rgb(30, 32, 34) 1px solid;

				box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
			}
		}
	}

	@media screen and (max-width: 576px) {
		padding: 16px;
	}
`;
