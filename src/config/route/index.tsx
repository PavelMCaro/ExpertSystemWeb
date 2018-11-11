import * as React from 'react';
import { App } from '../../views';
import { Home } from '../../views/Home';

const NotFound:React.SFC<{}> = () =><div>Not found</div>;

const pathBase = process.env.PATH_BASE;

export const Routes = [
  {
    component: App,
    routes: [
      {
        path: `${pathBase}/home`,
        component: Home,
        exact: true,
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
