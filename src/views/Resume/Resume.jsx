import { useContext } from 'react';

import events from '../../constants/events';

import { ViewContext } from '../../contexts/ViewContext';
import { ResumeEvent, ResumeEventDate, ResumeEventDescription, ResumeEventLocation, ResumeEventTitle, ResumeSection, ResumeTimeline } from './Resume.styled';

import { Fade, Perspective } from '@egjs/flicking-plugins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Resume = () => {
	const { currentView, nextView, previousView } = useContext(ViewContext);
	const _plugins = [new Fade('', 1.2), new Perspective({ rotate: 0.25, scale: 0.25 })];

	const accessiblyGoToNextView = () => currentView.props.view !== 'Resume' && nextView();

	const accessiblyGoToPreviousView = () => currentView.props.view !== 'Resume' && previousView();

	return (
		<ResumeSection>
			<ResumeTimeline tabIndex={11} onFocus={accessiblyGoToNextView} changeOnHold={true} plugins={_plugins} circular={false} horizontal={false} moveType={['strict', 1]}>
				{events.map(({ id, icon, title, location, period, description }, index) => (
					<ResumeEvent tabIndex={12 + index * 5} key={id}>
						<FontAwesomeIcon icon={icon} />
						<ResumeEventTitle tabIndex={13 + index * 5}>{title}</ResumeEventTitle>
						<div>
							<ResumeEventLocation tabIndex={14 + index * 5}>{location}</ResumeEventLocation>
							<ResumeEventDate tabIndex={15 + index * 5}>{period}</ResumeEventDate>
						</div>
						<ResumeEventDescription tabIndex={16 + index * 5} onFocus={events.length - 1 === index ? accessiblyGoToPreviousView : null}>
							{description}
						</ResumeEventDescription>
					</ResumeEvent>
				))}
			</ResumeTimeline>
		</ResumeSection>
	);
};

export default Resume;
