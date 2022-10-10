import { useContext, useEffect, useState } from 'react';

import events from '../../constants/events';

import { ViewContext } from '../../contexts/ViewContext';
import { ResumeEvent, ResumeEventDate, ResumeEventDescription, ResumeEventLocation, ResumeEventTitle, ResumeSection, ResumeTimeline } from './Resume.styled';

import { Fade, Perspective } from '@egjs/flicking-plugins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const Resume = () => {
	const { currentView, nextView, previousView } = useContext(ViewContext);
	const [onScreen, setOnScreen] = useState(false);
	const { i18n } = useTranslation();
	const _plugins = [new Fade('', 1.2), new Perspective({ rotate: 0.25, scale: 0.25 })];
	const viewPaginationIndex = 3;

	useEffect(() => {
		// Seems useless but it's a hack to avoid unexpected view bugs on the
		// slider by resizing the Flicking component when it enters the screen.
		currentView.props.view !== 'Resume' && setOnScreen(false);
		currentView.props.view === 'Resume' && setOnScreen(true);
	}, [currentView]);

	const accessiblyGoToNextView = () => currentView.props.view !== 'Resume' && nextView();

	const accessiblyGoToPreviousView = () => currentView.props.view !== 'Resume' && previousView();

	return (
		<ResumeSection>
			<ResumeTimeline
				onScreen={onScreen}
				tabIndex={viewPaginationIndex * 100 + 1}
				onFocus={accessiblyGoToNextView}
				changeOnHold={true}
				plugins={_plugins}
				circular={false}
				horizontal={false}
				moveType={['strict', 1]}
			>
				{events.map(({ id, icon, title, location, period, description }, index) => (
					<ResumeEvent tabIndex={viewPaginationIndex * 100 + 2 + index * 5} key={id}>
						<FontAwesomeIcon icon={icon} />
						<ResumeEventTitle tabIndex={viewPaginationIndex * 100 + 3 + index * 5}>{title[i18n.language]}</ResumeEventTitle>
						<div>
							<ResumeEventLocation tabIndex={viewPaginationIndex * 100 + 4 + index * 5}>{location[i18n.language]}</ResumeEventLocation>
							<ResumeEventDate tabIndex={viewPaginationIndex * 100 + 5 + index * 5}>{period[i18n.language]}</ResumeEventDate>
						</div>
						<ResumeEventDescription tabIndex={viewPaginationIndex * 100 + 6 + index * 5} onFocus={events.length - 1 === index ? accessiblyGoToPreviousView : null}>
							{description[i18n.language]}
						</ResumeEventDescription>
					</ResumeEvent>
				))}
			</ResumeTimeline>
		</ResumeSection>
	);
};

export default Resume;
