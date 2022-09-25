import React, { useCallback, useContext, useEffect, useState } from 'react';

import { Fade, Perspective } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';

import projects from '../../constants/projects';

import { faBootstrap, faEthereum, faGithub, faHtml5, faJs, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faBoxesStacked, faComputer, faDatabase } from '@fortawesome/free-solid-svg-icons';
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
	PortfolioSlideTitle,
} from './Portfolio.styled';

const techIcons = {
	React: {
		icon: faReact,
		color: '#61dafb',
	},
	ReactNative: {
		icon: faReact,
		color: '#61dafb',
	},
	Javascript: {
		icon: faJs,
		color: '#f7df1e',
	},
	Firebase: {
		icon: faDatabase,
		color: '#ffca28',
	},
	SCSS: {
		icon: faSass,
		color: '#cc6699',
	},
	HTML: {
		icon: faHtml5,
		color: '#e34c26',
	},
	Bootstrap: {
		icon: faBootstrap,
		color: '#563d7c',
	},
	Solidity: {
		icon: faEthereum,
		color: '#3c3c3d',
	},
	Redux: {
		icon: faReact,
		color: '#764abc',
	},
};

const Portfolio = () => {
	const { nextView, currentView } = useContext(ViewContext);
	const [plugins, setPlugins] = useState([new Fade(), new Perspective()]);
	const accessiblyGoToNextView = useCallback(() => {
		currentView.props.view !== 'Portfolio' && nextView();
	}, [currentView, nextView]);

	useEffect(() => {
		setPlugins([new Fade('', 1.2), new Perspective({ rotate: -0.5, scale: 0.2 })]);
	}, []);

	return (
		<PortfolioSection>
			<PortfolioSlider tabIndex={11} changeOnHold={true} onFocus={accessiblyGoToNextView} plugins={plugins} circular={true} horizontal={false} preventClickOnDrag={true}>
				{projects.map(({ projectName, projectType, techStack, printscreen, key, repo, live }, index) => (
					<PortfolioSlide tabIndex={12 + index * 6} key={key}>
						<PortfolioSlideFigure>
							<PortfolioSlideImage tabIndex={13 + index * 6} aria-label={`${projectName}, ${projectType}`} src={printscreen} alt='Printscreen do projeto' />
							<div>
								<PortfolioProjectType>{projectType}</PortfolioProjectType>
								<PortfolioSlideTitle>{projectName}</PortfolioSlideTitle>
							</div>
							<PortfolioSlideLinksWrapper>
								{live && (
									<a href={live} tabIndex={14 + index * 6} aria-label={'Acessar página de demonstração desse projeto'} rel='noreferrer' target='_blank'>
										<FontAwesomeIcon icon={faComputer} />
										Página
									</a>
								)}
								<a href={repo} tabIndex={15 + index * 6} aria-label={'Acessar repositório desse projeto'} rel='noreferrer' target='_blank'>
									<FontAwesomeIcon icon={faGithub} />
									Repositório
								</a>
							</PortfolioSlideLinksWrapper>
						</PortfolioSlideFigure>
						<PortfolioSlideDetails>
							<h6>
								<FontAwesomeIcon icon={faBoxesStacked} /> Tech stack:
							</h6>
							<ul tabIndex={16 + index * 6} aria-label={'Stack utilizada nesse projeto'}>
								{techStack.map(({ tech }) => (
									<PortfolioSlideDetail tabIndex={17 + index * 6} aria-label={tech} hoverColor={techIcons[tech].color} key={tech}>
										<FontAwesomeIcon icon={techIcons[tech].icon} />
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
