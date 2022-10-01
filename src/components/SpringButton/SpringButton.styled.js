import styled from 'styled-components';

export const ButtonBody = styled.button`
	position: relative;

	width: 100%;
	height: auto;

	border-radius: 8px;
	background-image: ${({ bodyBackground }) => `linear-gradient(to left, ${bodyBackground})`};
	background-image: ${({ bodyBackground }) => `-ms-linear-gradient(left, ${bodyBackground})`};
	background-image: ${({ bodyBackground }) => `-o-linear-gradient(left, ${bodyBackground})`};
	background-image: ${({ bodyBackground }) => `-moz-linear-gradient(left, ${bodyBackground})`};
	background-image: ${({ bodyBackground }) => `-webkit-linear-gradient(left, ${bodyBackground})`};
	outline-offset: 4px;

	box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);

	border: none;

	transition: all 0.1s ease-in-out;
	cursor: pointer;

	z-index: 1;

	filter: ${({ disabled }) => (disabled ? 'grayscale(100%)' : 'none')};

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
	transform: ${({ disabled }) => (disabled ? '' : 'translateY(-4px)')};

	z-index: 2;

	box-shadow: ${({ disabled }) => (disabled ? 'inset 0 2px 8px 2px rgba(0, 0, 0, 0.2)' : 'none')};

	&:hover {
		transform: ${({ disabled }) => (disabled ? '' : 'translateY(-6px)')};
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	&:active {
		transform: ${({ disabled }) => (disabled ? '' : 'translateY(-2px)')};
	}
`;
