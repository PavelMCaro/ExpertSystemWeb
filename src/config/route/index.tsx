import * as React from 'react';
import { App } from '../../views';
import { Home } from '../../views/Home';
import { Diagnosis } from '../../views/Diagnosis';
import { Results } from '../../views/Results';

const NotFound:React.SFC<{}> = () =><div>Not found</div>;
const pathBase = process.env.PATH_BASE || '';

export const Routes = [
  {
    component: App,
    routes: [
      {
        path: `${pathBase}/`,
        component: Home,
        exact: true,
      },
      {
        path: `${pathBase}/diagnostico`,
        component: Diagnosis,
        exact: true,
      },
      {
        path: `${pathBase}/resultados`,
        component: Results,
        exact: true,
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
