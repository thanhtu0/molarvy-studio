import ReactDOM from 'react-dom/client';
import App from '~/App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
);

reportWebVitals();
