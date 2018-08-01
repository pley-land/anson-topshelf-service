import React from 'react';
import ReactDom from 'react-dom';
import App from './components/renderApp';

const restName = location.pathname.slice(5, location.pathname.length - 1);
ReactDom.render(<App name={restName} />, document.getElementById('topshelf'));
