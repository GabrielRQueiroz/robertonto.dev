import { useEffect, useState } from 'react';
import { ButtonBody, ButtonFace } from './SpringButton.styled';

const buttonColorScheme = {
	blue: {
		bodyBackground: 'hsl(226deg 40% 30%) 0%, hsl(226deg 33% 51%) 4%, hsl(226deg 33% 51%) 96%, hsl(226deg 40% 30%) 100%',
		faceBackground: '#738ad8',
	},
	green: {
		bodyBackground: 'hsl(172deg 78% 18%) 0%, hsl(173deg 86% 22%) 4%, hsl(173deg 86% 22%) 96%, hsl(172deg 78% 18%) 100%',
		faceBackground: '#128c7e',
	},
	pink: {
		bodyBackground: 'hsl(326deg 57% 25%) 0%, hsl(326deg 57% 48%) 4%, hsl(326deg 57% 48%) 96%, hsl(326deg 57% 25%) 100%',
		faceBackground: '#e1306c',
	},
	black: {
		bodyBackground: 'hsl(0deg 0% 10%) 0%, hsl(0deg 0% 11%) 4%, hsl(0deg 0% 11%) 96%, hsl(0deg 0% 10%) 100%',
		faceBackground: '#232222',
	},
	lightBlue: {
		bodyBackground: 'hsl(210deg 100% 30%) 0%, hsl(210deg 100% 40%) 4%, hsl(210deg 100% 40%) 96%, hsl(210deg 100% 30%) 100%',
		faceBackground: '#0077b5',
	},
	red: {
		bodyBackground: 'hsl(0deg 100% 30%) 0%, hsl(0deg 100% 40%) 4%, hsl(0deg 100% 40%) 96%, hsl(0deg 100% 30%) 100%',
		faceBackground: '#e63946',
	},
	amethyst: {
		bodyBackground: 'hsl(245deg 50% 30%) 0%, hsl(245deg 50% 40%) 4%, hsl(245deg 50% 40%) 96%, hsl(245deg 50% 30%) 100%',
		faceBackground: '#4a47a3',
	},
};

const SpringButton = (props) => {
	const [{ bodyBackground, faceBackground }, setBackgroundColor] = useState(buttonColorScheme[props.color || 'blue']);

	useEffect(() => {
		setBackgroundColor(buttonColorScheme[props.color] || buttonColorScheme['blue']);
	}, [bodyBackground, faceBackground, props.color]);

	return (
		<ButtonBody type='button' bodyBackground={bodyBackground} {...props}>
			<ButtonFace disabled={props.disabled} faceBackground={faceBackground}>
				{props.children}
			</ButtonFace>
		</ButtonBody>
	);
};

export default SpringButton;
