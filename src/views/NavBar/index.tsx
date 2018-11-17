import * as React from 'react';
import { Menu } from 'semantic-ui-react';

export const NavBar = () => (
    <React.Fragment>
        <Menu pointing secondary>
          <Menu.Menu position='right'>
            <Menu.Item href='/'>
                Inicio
            </Menu.Item>
            <Menu.Item href='/diagnostico'>
                Diagnóstico
            </Menu.Item>
            <Menu.Item href=''>
                Información
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    </React.Fragment>
)