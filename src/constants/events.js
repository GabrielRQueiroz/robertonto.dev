import { faBriefcase, faChild, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const events = [
	{
		id: '1',
		icon: faChild,
		title: {
			'pr-br': 'O começo',
			en: 'The beginning',
		},
		location: {
			'pr-br': 'Em um galáxia muito, muito distante...',
			en: 'In a galaxy far, far away...',
		},
		period: {
			'pr-br': '2021',
			en: '2021',
		},
		description: {
			'pr-br': 'Comecei a estudar desenvolvimento Web quando percebi o potencial da programação para solucionar problemas.',
			en: 'I started studying Web development when I realized the potential of programming to solve problems.',
		},
	},
	{
		id: '2',
		icon: faGraduationCap,
		title: {
			'pr-br': 'Engenharia de Computação',
			en: 'Computer Engineering',
		},
		location: {
			'pr-br': 'Universidade de Brasília - UnB',
			en: 'University of Brasília - UnB',
		},
		period: {
			'pr-br': '2022 - Hoje',
			en: '2022 - Today',
		},
		description: {
			'pr-br': 'Ingressei no curso de engenharia de computação acreditando na possibilidade de adquirir conhecimentos além da área da computação.',
			en: 'I entered the computer engineering course believing in the possibility of acquiring knowledge beyond the computer area.',
		},
	},
	{
		id: '3',
		icon: faBriefcase,
		title: {
			'pr-br': 'Dev Full-Stack Trainee',
			en: 'Full-Stack Trainee Dev',
		},
		location: {
			'pr-br': 'CJR - UnB',
			en: 'CJR - UnB',
		},
		period: {
			'pr-br': '2022 - Hoje',
			en: '2022 - Today',
		},
		description: {
			'pr-br': 'Sou um desenvolvedor full-stack na CJR, EJ da UnB, atuando no desenvolvimento de serviços e aplicações Web em React e Node.',
			en: "I am a full-stack developer at CJR, UnB's student enterprise, working on the development of services and Web applications in React and Node.",
		},
	},
];

export default events;
