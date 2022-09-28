import { useContext } from 'react';

import { Fade, Perspective } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/pagination.css';
import '@egjs/react-flicking/dist/flicking.css';

import projects from '../../constants/projects';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComputer, faCubesStacked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ViewContext } from '../../contexts/ViewContext';
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
	const _plugins = [new Fade('', 1.25), new Perspective({ rotate: 0.25, scale: 0.25 })];

	const accessiblyGoToNextView = () => currentView.props.view !== 'Portfolio' && nextView();

	return (
		<PortfolioSection>
			<PortfolioSlider tabIndex={100} onFocus={accessiblyGoToNextView} plugins={_plugins} circular={false} horizontal={false} preventClickOnDrag={true} moveType={['strict', 1]}>
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
