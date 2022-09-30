import { useContext, useEffect, useState } from 'react';

import { Fade, Perspective } from '@egjs/flicking-plugins';

import projects from '../../constants/projects';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComputer, faCubesStacked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
	PortfolioSlideTitle
} from './Portfolio.styled';

const Portfolio = () => {
	const { nextView, currentView } = useContext(ViewContext);
	const [onScreen, setOnScreen] = useState(false);
	const [perspective, setPerspective] = useState(0.1);
	const [fade, setFade] = useState(1.25);
	const [width] = useViewportDimensions();
	const _plugins = [new Fade('', fade), new Perspective({ rotate: perspective, scale: perspective })];

	const accessiblyGoToNextView = () => currentView.props.view !== 'Portfolio' && nextView();

	useEffect(() => {
		// Seems useless but it's a hack to avoid unexpected view bugs on the slider.
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
			<PortfolioSlider tabIndex={100} onScreen={onScreen} onFocus={accessiblyGoToNextView} plugins={_plugins} circular={true} horizontal={false} preventClickOnDrag={true}>
				{projects.map(({ projectName, projectType, techStack, printscreen, key, repo, live }, index) => (
					<PortfolioSlide tabIndex={101 + index * 6} key={key}>
						<PortfolioSlideFigure>
							<PortfolioSlideImage tabIndex={102 + index * 6} draggable={false} aria-label={`${projectName}, ${projectType}`} src={printscreen} alt='Printscreen do projeto' />
							<div>
								<PortfolioProjectType>{projectType}</PortfolioProjectType>
								<PortfolioSlideTitle>{projectName}</PortfolioSlideTitle>
							</div>
							<PortfolioSlideLinksWrapper>
								{live && (
									<a href={live} tabIndex={103 + index * 6} aria-label={'Acessar página de demonstração desse projeto'} rel='noreferrer' target='_blank'>
										<FontAwesomeIcon icon={faComputer} />
										Página
									</a>
								)}
								<a href={repo} tabIndex={104 + index * 6} aria-label={'Acessar repositório desse projeto'} rel='noreferrer' target='_blank'>
									<FontAwesomeIcon icon={faGithub} />
									Repositório
								</a>
							</PortfolioSlideLinksWrapper>
						</PortfolioSlideFigure>
						<PortfolioSlideDetails>
							<h6>
								<FontAwesomeIcon icon={faCubesStacked} /> Tech stack:
							</h6>
							<ul tabIndex={105 + index * 6} aria-label={'Stack utilizada nesse projeto'}>
								{techStack.map(({ tech, faIcon, color }) => (
									<PortfolioSlideDetail tabIndex={106 + index * 6} aria-label={tech} hoverColor={color} key={tech}>
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
