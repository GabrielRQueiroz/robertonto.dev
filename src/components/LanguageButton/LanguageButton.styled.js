import styled from 'styled-components';

export const LanguageButtonHolder = styled.div`
	display: flex;
	flex-direction: column;

	padding: 0.5em;

	gap: 1em;

	align-items: center;
	justify-content: space-between;

	background-color: rgb(50, 54, 54);
	border-radius: 8px 8px 0 0;

	box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);

	position: fixed;

	bottom: -5em;
	right: clamp(0.1vw, 2vw, 5vw);

	transition: all 250ms cubic-bezier(0.25, 0.8, 0.25, 1);

	z-index: 999;
	cursor: pointer;

	:hover,
	:focus,
	:focus-within {
		bottom: 0;
	}

	> svg {
		font-size: clamp(1.5em, 4vw, 2em);
	}

	> div {
		height: 0;
		width: 100%;

		background-color: transparent;

		border: 1px dashed rgb(255, 255, 255);
	}
`;

export const LanguageButtonBtn = styled.button`
	cursor: pointer;

	border: none;

	width: 48px;
	height: 48px;

	border-radius: 10%;

	background-image: linear-gradient(to left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);
	background-image: -ms-linear-gradient(left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);
	background-image: -moz-linear-gradient(left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);
	background-image: -o-linear-gradient(left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);
	background-image: -webkit-linear-gradient(left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);

	display: flex;
	justify-content: center;
	align-items: center;
	outline-offset: 4px;

	box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);

	:hover > div {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	:active > div {
		transform: translateY(-2px);
	}
`;

export const LanguageButtonFace = styled.div`
	width: 100%;
	height: 100%;

	padding: 1em;

	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 10%;
	background-color: rgb(43, 45, 45);

	font-size: clamp(1em, 4vw, 1.5em);
	text-align: center;

	will-change: transform;
	transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	transform: translateY(-4px);
`;
