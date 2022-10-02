import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
	margin: 0;
	padding: 0;

	box-sizing: border-box;

   font-family: 'Twemoji Country Flags', 'Roboto', sans-serif !important;

	color: #fff;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-tap-highlight-color: transparent;
	-webkit-touch-callout: none;

	-webkit-text-size-adjust: none;
	-moz-text-size-adjust: none;
	-ms-text-size-adjust: none;
	-o-text-size-adjust: none;
	text-size-adjust: none;

	-webkit-tap-highlight-color: transparent;
   }

   html {
      height: 100%;
   }

   #root {
      height: 100%;
      width: 100vw;
      position: absolute;
      overflow: hidden;
   }

   body {
      height: 100%;
      background-color: rgb(27, 29, 30);
   }

   main > section {
      width: 100vw;
      height: 45vh;
      max-height: 100%;
      position: relative;
      
      flex: 1;

      display: flex;
      justify-content: center;
      align-items: center;

      gap: 16px;

      transition: all 500ms ease-in-out;
   }

   section > * {
      flex-grow: 0;
   }

   @media screen and (max-width: 576px) {
      main > section {
         flex-direction: column;

         height: 100%;
         width: 100vw;

         gap: 16px;
      }
   }  
`;

export const MainFrame = styled.main`
	position: absolute;
	top: 0;
	left: -${(props) => props.viewIndex * 100}vw;

	width: ${(props) => props.views.length * 100}vw;
	height: 100%;
	max-height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	transition: 500ms ease-in-out;
`;
