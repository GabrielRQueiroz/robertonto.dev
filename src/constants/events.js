import { faBriefcase, faChild, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const events = [
	{
		id: '1',
		icon: faChild,
		title: {
			'pt-BR': 'O começo',
			'en-US': 'The beginning',
		},
		location: {
			'pt-BR': 'Em uma galáxia muito, muito distante...',
			'en-US': 'In a galaxy far, far away...',
		},
		period: {
			'pt-BR': '2021',
			'en-US': '2021',
		},
		description: {
			'pt-BR': 'Comecei a estudar desenvolvimento Web quando percebi o potencial da programação para solucionar problemas.',
			'en-US': 'I started studying Web development when I realized the potential of programming to solve problems.',
		},
	},
	{
		id: '2',
		icon: faGraduationCap,
		title: {
			'pt-BR': 'Engenharia de Computação',
			'en-US': 'Computer Engineering',
		},
		location: {
			'pt-BR': 'Universidade de Brasília - UnB',
			'en-US': 'University of Brasília - UnB',
		},
		period: {
			'pt-BR': '2022 - Hoje',
			'en-US': '2022 - Today',
		},
		description: {
			'pt-BR': 'Ingressei no curso de engenharia de computação acreditando na possibilidade de adquirir conhecimentos além da área da computação.',
			'en-US': 'I entered the computer engineering course believing in the possibility of acquiring knowledge beyond the computer area.',
		},
	},
	{
		id: '3',
		icon: faBriefcase,
		title: {
			'pt-BR': 'Dev Full-Stack Trainee',
			'en-US': 'Full-Stack Trainee Dev',
		},
		location: {
			'pt-BR': 'CJR - UnB',
			'en-US': 'CJR - UnB',
		},
		period: {
			'pt-BR': '2022 - Hoje',
			'en-US': '2022 - Today',
		},
		description: {
			'pt-BR': 'Sou um desenvolvedor full-stack na CJR, EJ da UnB, atuando no desenvolvimento de serviços e aplicações Web em React e Node.',
			'en-US': "I am a full-stack developer at CJR, UnB's student enterprise, working on the development of services and Web applications in React and Node.",
		},
	},
];

export default events;
