import { keyframes } from 'styled-components';

export const rotateClipPath = keyframes`
   0% {
		clip-path: polygon(57% 2%, 85% 13%, 94% 39%, 94% 61%, 84% 85%, 54% 94%, 27% 92%, 11% 70%, 3% 34%, 19% 10%);
	}
   
	10% {
		clip-path: polygon(85% 13%, 94% 39%, 94% 61%, 84% 85%, 54% 94%, 27% 92%, 11% 70%, 3% 34%, 19% 10%, 57% 2%);
	}
   
	20% {
		clip-path: polygon(94% 39%, 94% 61%, 84% 85%, 54% 94%, 27% 92%, 11% 70%, 3% 34%, 19% 10%, 57% 2%, 85% 13%);
	}
   
	30% {
		clip-path: polygon(94% 61%, 84% 85%, 54% 94%, 27% 92%, 11% 70%, 3% 34%, 19% 10%, 57% 2%, 85% 13%, 94% 39%);
	}
   
	40% {
		clip-path: polygon(84% 85%, 54% 94%, 27% 92%, 11% 70%, 3% 34%, 19% 10%, 57% 2%, 85% 13%, 94% 39%, 94% 61%);
	}
   
	50% {
		clip-path: polygon(54% 94%, 27% 92%, 11% 70%, 3% 34%, 19% 10%, 57% 2%, 85% 13%, 94% 39%, 94% 61%, 84% 85%);
	}
   
	60% {
		clip-path: polygon(27% 92%, 11% 70%, 3% 34%, 19% 10%, 57% 2%, 85% 13%, 94% 39%, 94% 61%, 84% 85%, 54% 94%);
	}
   
	70% {
		clip-path: polygon(11% 70%, 3% 34%, 19% 10%, 57% 2%, 85% 13%, 94% 39%, 94% 61%, 84% 85%, 54% 94%, 27% 92%);
	}
   
	80% {
		clip-path: polygon(3% 34%, 19% 10%, 57% 2%, 85% 13%, 94% 39%, 94% 61%, 84% 85%, 54% 94%, 27% 92%, 11% 70%);
	}
   
	90% {
		clip-path: polygon(19% 10%, 57% 2%, 85% 13%, 94% 39%, 94% 61%, 84% 85%, 54% 94%, 27% 92%, 11% 70%, 3% 34%);
	}
   
	100% {
		clip-path: polygon(57% 2%, 85% 13%, 94% 39%, 94% 61%, 84% 85%, 54% 94%, 27% 92%, 11% 70%, 3% 34%, 19% 10%);
	}
`;

export const shakingEffect = keyframes`
   10%,
   90% {
      transform: translate3d(-1px, 0, 0) rotate(5deg);
   }

   20%,
   80% {
      transform: translate3d(2px, 0, 0) rotate(5deg);
   }

   30%,
   50%,
   70% {
      transform: translate3d(-4px, 0, 0) rotate(5deg);
   }

   40%,
   60% {
      transform: translate3d(4px, 0, 0) rotate(5deg);
   }
`;

export const implodeEffect = keyframes`
	0% {
		transform: translateY(-50%) scale(1);
	}

	40%  {
		transform: translateY(-50%) scale(1.1);
	}

	100% {
		transform: translateY(-50%) scale(0);
	}
`;

export const appearEffect = keyframes`
	0% {
		transform: translateY(-50%) scale(0);
	}

	60%  {
		transform: translateY(-50%) scale(1.1);
	}

	100% {
		transform: translateY(-50%) scale(1);
	}
`;
