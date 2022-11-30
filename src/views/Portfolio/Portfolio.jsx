import { useContext, useEffect, useState } from 'react';

import { Fade, Perspective } from '@egjs/flicking-plugins';

import projects from '../../constants/projects';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComputer, faCubesStacked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { ViewContext } from '../../contexts/ViewContext';
import useViewportDimensions from '../../hooks/useViewportDimensions';
import {
	PortfolioProjectType,
	PortfolioSection,
	PortfolioSlide,
	PortfolioSlideDetail,
	PortfolioSlideDetails,
	PortfolioSlideFigure,
	PortfolioSlideImage,
	PortfolioSlideLinksWrapper,
	PortfolioSlider,
	PortfolioSlideTitle,
} from './Portfolio.styled';

const Portfolio = () => {
	const { nextView, currentView, previousView } = useContext(ViewContext);
	const [onScreen, setOnScreen] = useState(false);
	const [perspective, setPerspective] = useState(0.1);
	const [fade, setFade] = useState(1.25);
	const [width] = useViewportDimensions();
	const { t } = useTranslation();
	const _plugins = [new Fade('', fade), new Perspective({ rotate: perspective, scale: perspective })];
	const viewPaginationIndex = 4;

	const accessiblyGoToNextView = () => currentView.props.view !== 'Portfolio' && nextView();
	const accessiblyGoToPreviousView = () => currentView.props.view !== 'Portfolio' && previousView();

	useEffect(() => {
		// Seems useless but it's a hack to avoid unexpected view bugs on the
		// slider by resizing the Flicking component when it enters the screen.
		currentView.props.view !== 'Portfolio' && setOnScreen(false);
		currentView.props.view === 'Portfolio' && setOnScreen(true);
	}, [currentView]);

	useEffect(() => {
		if (width > 768) {
			setPerspective(0.2);
		} else if (width > 576) {
			setPerspective(0.3);
		} else {
			setPerspective(0.4);
		}
	}, [width]);

	useEffect(() => {
		if (width > 768) {
			setFade(1.1);
		} else if (width > 576) {
			setFade(1.25);
		} else {
			setFade(1.4);
		}
	}, [width]);

	return (
		<PortfolioSection>
			<PortfolioSlider
				tabIndex={viewPaginationIndex * 100 + 1}
				onScreen={onScreen}
				onFocus={accessiblyGoToNextView}
				plugins={_plugins}
				circular={true}
				horizontal={false}
				preventClickOnDrag={true}
				interruptable={false}
				changeOnHold={false}
				moveType={['strict', 1]}
			>
				{projects.map(({ projectName, projectType, techStack, printscreen, key, repo, live }, index) => (
					<PortfolioSlide tabIndex={viewPaginationIndex * 100 + 2 + index * 6} key={key}>
						<PortfolioSlideFigure>
							<PortfolioSlideImage
								tabIndex={viewPaginationIndex * 100 + 3 + index * 6}
								draggable={false}
								aria-label={`${projectName}, ${projectType}`}
								src={printscreen}
								alt={t('Portfolio.image.alt')}
							/>
							<div>
								<PortfolioProjectType>{projectType}</PortfolioProjectType>
								<PortfolioSlideTitle>{projectName}</PortfolioSlideTitle>
							</div>
							<PortfolioSlideLinksWrapper>
								{live && (
									<a
										href={live}
										tabIndex={viewPaginationIndex * 100 + 4 + index * 6}
										aria-label={`${t('Portfolio.demo.aria1')} ${projectName} ${t('Portfolio.demo.aria2')}`}
										rel='noreferrer'
										target='_blank'
									>
										<FontAwesomeIcon icon={faComputer} />
										{t('Portfolio.demo')}
									</a>
								)}
								<a
									href={repo}
									tabIndex={viewPaginationIndex * 100 + 5 + index * 6}
									aria-label={`${t('Portfolio.repo.aria1')} ${projectName} ${t('Portfolio.repo.aria2')}`}
									rel='noreferrer'
									target='_blank'
								>
									<FontAwesomeIcon icon={faGithub} />
									{t('Portfolio.repo')}
								</a>
							</PortfolioSlideLinksWrapper>
						</PortfolioSlideFigure>
						<PortfolioSlideDetails>
							<h6>
								<FontAwesomeIcon icon={faCubesStacked} /> Tech stack:
							</h6>
							<ul tabIndex={viewPaginationIndex * 100 + 6 + index * 6} aria-label={t('Portfolio.stack.aria')}>
								{techStack.map(({ tech, faIcon, color }) => (
									<PortfolioSlideDetail
										onFocus={projects.length - 1 === index ? accessiblyGoToPreviousView : null}
										tabIndex={viewPaginationIndex * 100 + 7 + index * 6}
										aria-label={tech}
										hoverColor={color}
										key={tech}
									>
										<FontAwesomeIcon icon={faIcon} />
										<p>{tech}</p>
									</PortfolioSlideDetail>
								))}
							</ul>
						</PortfolioSlideDetails>
					</PortfolioSlide>
				))}
			</PortfolioSlider>
		</PortfolioSection>
	);
};

export default Portfolio;
