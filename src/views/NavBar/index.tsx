import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
    <React.Fragment>
        <Menu pointing secondary>
          <Menu.Menu position='right'>
            <Menu.Item>
                <Link to='/'>Inicio</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/diagnostico'>Diagnóstico</Link>
            </Menu.Item>
            <Menu.Item href='/informacion'>
                Información
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    </React.Fragment>
)