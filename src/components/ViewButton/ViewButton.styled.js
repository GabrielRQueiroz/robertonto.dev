import styled from 'styled-components';
import { appearEffect, implodeEffect } from '../../styles/Animations';

export const ViewButtonWrapper = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	z-index: 999;

	border: none;

	width: clamp(40px, 15vw, 56px);
	height: clamp(40px, 15vw, 56px);
	border-radius: 50%;
	background-image: linear-gradient(to left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);
	background-image: -ms-linear-gradient(left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);
	background-image: -moz-linear-gradient(left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);
	background-image: -o-linear-gradient(left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);
	background-image: -webkit-linear-gradient(left, rgb(27, 30, 30) 0%, rgb(35, 38, 38) 15%, rgb(35, 38, 38) 85%, rgb(27, 30, 30) 100%);

	box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.2);

	display: flex;
	justify-content: center;
	align-items: center;
	outline-offset: 4px;

	left: ${({ direction }) => (direction === 'right' ? 'auto' : '0.75em')};
	right: ${({ direction }) => (direction === 'right' ? '0.75em' : 'auto')};

	animation: ${({ isDisabled }) => (isDisabled ? implodeEffect : appearEffect)} 0.5s ${({ isDisabled }) => (isDisabled ? 'cubic-bezier(0.215, 0.355, 0.6, 1)' : 'cubic-bezier(0.215, 0.6, 0.355, 1)')};
	animation-delay: 100ms;
	animation-fill-mode: ${({ isDisabled }) => (isDisabled ? 'forwards' : 'backwards')};

	:hover > div {
		transform: translateY(-6px);
		transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
	}

	:active > div {
		transform: translateY(-2px);
	}
`;

export const ViewButtonFace = styled.div`
	width: 100%;
	height: 100%;

	padding: 1em;

	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 50%;
	background-color: rgb(43, 45, 45);

	font-size: clamp(1em, 4vw, 1.2em);
	text-align: center;

	will-change: transform;
	transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
	transform: translateY(-4px);
`;
