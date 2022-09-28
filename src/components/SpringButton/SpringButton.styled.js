import styled from 'styled-components';

export const ButtonBody = styled.button`
	position: relative;

	width: 100%;
	height: 100%;
	border-radius: 8px;
	background-image: ${({ bodyBackground }) => bodyBackground};
	outline-offset: 4px;

	border: none;

	transition: all 0.1s ease-in-out;
	cursor: pointer;

	&:focus:not(:focus-visible) {
		outline: none;
	}
`;

export const ButtonFace = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

	display: flex;
	justify-content: center;
	gap: 8px;

	padding: 12px 4px;

	border-radius: 8px;
	background-color: ${({ faceBackground }) => faceBackground};
	color: #fff;

	font-size: clamp(1.25em, 3vw, 1.5em);
	text-align: center;

	will-change: transform;
	transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	transform: translateY(-4px);

	&:hover {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	&:active {
		transform: translateY(-2px);
	}
`;
