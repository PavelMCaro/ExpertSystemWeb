import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavBar } from './NavBar';

interface Props {
    route?:any;
}

export const App: React.SFC<Props> = (props) => {
    return(
        <React.Fragment>
            <NavBar />
            {renderRoutes(props.route.routes)}
        </React.Fragment>
    )
}