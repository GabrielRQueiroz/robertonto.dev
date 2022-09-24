import styled from 'styled-components';

export const ViewButtonWrapper = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	z-index: 1;

	border: none;

	width: clamp(40px, 7.5vw, 56px);
	height: clamp(40px, 7.5vw, 56px);
	border-radius: 50%;
	background-color: #1a1a1a;

	display: flex;
	justify-content: center;
	align-items: center;
	outline-offset: 4px;

	left: ${(props) => (props.direction === 'right' ? 'auto' : '16px')};
	right: ${(props) => (props.direction === 'right' ? '16px' : 'auto')};

	:hover > div {
		transform: ${({ isDisabled }) => !isDisabled && 'translateY(-6px)'};
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	:active > div {
		transform: ${({ isDisabled }) => !isDisabled && 'translateY(-2px)'};
	}
`;

export const ViewButtonFace = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 50%;
	background-color: ${({ isDisabled }) => (isDisabled ? '#3a3a3a' : '#26272a')};

	font-size: clamp(1rem, 4vw, 1.2rem);
	text-align: center;

	will-change: transform;
	transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	transform: ${({ isDisabled }) => !isDisabled && 'translateY(-4px)'};

	svg {
		transition: 500ms;
		filter: ${({ isDisabled }) => isDisabled && 'invert(70%)'};
	}
`;
