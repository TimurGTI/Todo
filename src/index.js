import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

import './mainstyle/index.css';
import App from './App';

let root = ReactDOMClient.createRoot(document.getElementById('app1'));
root.render(<App />);
