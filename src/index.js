import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { HashRouter } from 'reaect-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'

ReactDOM.render(<Provider store={store}>
<HashRouter><App /></HashRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();

