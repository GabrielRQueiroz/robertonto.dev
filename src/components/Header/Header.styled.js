import styled from 'styled-components';

export const PageHeader = styled.header`
	position: fixed;

	left: 0;

	width: 100vw;
	height: 56px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-size: clamp(0.9em, 576px, 1em);

	z-index: 999;
	transition: all 525ms ease-in-out;

	& > * {
		flex: 1;
		text-align: center;
	}
`;

export const SocialButtonWrapper = styled.div`
	position: absolute;

	display: flex;

	justify-content: center;

	gap: 24px;

	top: 100%;
	right: 0;

	width: 100vw;
	height: auto;

	z-index: 1;
`;

export const SocialButton = styled.a`
	width: auto;
	height: auto;

	border-radius: 50%;
	background-color: transparent;
	color: #fff;

	border: none;

	cursor: pointer;

	font-size: clamp(1.5em, 4vw, 1.75em);
	text-align: center;
`;
