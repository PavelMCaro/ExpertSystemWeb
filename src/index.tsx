import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Routes } from './config/route';
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
const store = configureStore();
const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {renderRoutes(Routes)}
        </Router>
    </Provider>,
    root
)