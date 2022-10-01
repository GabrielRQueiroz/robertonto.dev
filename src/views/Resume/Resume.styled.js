import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import styled from 'styled-components';

export const ResumeSection = styled.section`
	display: flex;

	align-items: center;
	justify-content: center;

	width: 100vw;
	height: 100vh;
`;

export const ResumeTimeline = styled(Flicking)`
	height: 100%;
`;

export const ResumeEvent = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	gap: 12px;

	padding: 3em;

	width: 45vw;
	height: auto;

	background-color: rgb(27, 29, 30);

	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

	border: 2px dashed rgb(365, 365, 365);
	border-radius: 10px;

	> div {
		display: flex;
		flex-direction: column;

		font-size: 16px;

		gap: 4px;

		padding-left: 0.75em;
		padding-top: 0.25em;
		padding-bottom: 0.25em;

		width: 100%;

		border-left: 2px dashed rgb(365, 365, 365);
	}

	> svg {
		position: absolute;

		top: 0;
		left: 0;

		transform: translate(25%, -50%);

		width: 1em;
		height: 1em;
		font-size: clamp(1.5em, 4vw, 2em);

		padding: 0.4em;

		background-color: rgb(27, 29, 30);
		border-radius: 50%;

		border: 1px solid rgb(365, 365, 365);
	}

	@media screen and (max-width: 992px) {
		width: 60vw;
	}

	@media screen and (max-width: 768px) {
		padding: 2em;
		width: 70vw;
	}

	@media screen and (max-width: 576px) {
		padding: 1.75em;
		width: 85vw;
	}
`;

export const ResumeEventTitle = styled.h3`
	font-size: clamp(1.25em, 4vw, 1.75em);

	> svg {
		font-size: 1.1em;
		margin-right: 0.1em;
	}
`;

export const ResumeEventDate = styled.p`
	font-size: clamp(0.9em, 2vw, 1.1em);
	font-weight: 500;

	:before {
		content: ' 📅 ';
		font-size: 1.1em;
	}
`;

export const ResumeEventLocation = styled.p`
	font-size: clamp(0.9em, 3vw, 1.1em);
	font-weight: 700;

	:before {
		content: ' 📌 ';
		font-size: 1.1em;
	}
`;

export const ResumeEventDescription = styled.p`
	position: relative;

	font-size: clamp(1.1em, 3vw, 1.25em);
	text-align: left;

	width: 100%;

	margin-top: 1.25em;
	padding-top: 2em;

	:before {
		content: ' 📝 ';

		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);

		background-color: rgb(27, 29, 30);
		border: 2px solid rgb(365, 365, 365);
		border-radius: 50%;
		padding: 0.25em;

		z-index: 1;

		font-size: clamp(1.4em, 3vw, 1.5em);
	}

	:after {
		content: '';

		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 0;

		background-color: transparent;
		border: 1px dashed rgb(365, 365, 365);
	}
`;

export const ResumePagination = styled(ViewportSlot)`
	position: absolute;

	bottom: 0;
	left: 50%;

	transform: translateX(-50%);
	z-index: 1;
`;
