import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Routes } from './config/route';

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(
    <React.Fragment>
        <Router>
            {renderRoutes(Routes)}
        </Router>
    </React.Fragment>,
    root
)