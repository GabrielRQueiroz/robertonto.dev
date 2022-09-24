import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import ViewContextProvider from './contexts/ViewContext';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from './styles/Global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ViewContextProvider>
			<Toaster />
			<GlobalStyles />
			<App />
		</ViewContextProvider>
	</React.StrictMode>
);

reportWebVitals(console.log);
