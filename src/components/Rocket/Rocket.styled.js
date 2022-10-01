import styled from 'styled-components';

export const RocketContainer = styled.button`
	position: fixed;
	bottom: ${({ direction }) => (direction !== null ? '0' : '-50%')};
	left: 50%;
	transform: translateX(-50%);
	margin-bottom: 1em;

	background: transparent;
	border: none;

	font-size: 1rem;

	cursor: pointer;

	transition: bottom 0.25s ease-in-out;

	z-index: 990;

	&:hover :first-child {
		filter: brightness(1);
		transform: scale(1.2) ${({ direction }) => (direction === 'right' ? 'rotate(45deg)' : 'rotate(-135deg)')};
	}

	:hover > p + p::after {
		width: 80%;
	}
`;

export const RocketIcon = styled.p`
	font-size: clamp(1.75em, 4vw, 2em);
	text-align: center;
	margin-bottom: 0.1em;

	filter: brightness(0.9);
	transform: ${({ direction }) => (direction === 'right' ? 'rotate(45deg)' : 'rotate(-135deg)')};
	transition: all 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);

	pointer-events: none;

	+ p {
		position: relative;
		font-weight: 700;

		::after {
			content: '';
			position: absolute;

			height: 2px;
			width: 0;
			background-color: #fafafa;

			bottom: -4px;
			left: 50%;
			transform: translateX(-50%);

			transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
`;
