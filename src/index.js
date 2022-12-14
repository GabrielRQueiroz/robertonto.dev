import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App';
import ViewContextProvider from './contexts/ViewContext';
import { GlobalStyles } from './styles/Global';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ViewContextProvider>
			<GlobalStyles />
			<Toaster />
			<App />
		</ViewContextProvider>
	</React.StrictMode>
);
