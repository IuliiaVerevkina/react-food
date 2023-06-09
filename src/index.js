import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './scss/style.scss';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter basename='/react-food'>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

