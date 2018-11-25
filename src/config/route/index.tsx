import * as React from 'react';
import { App } from '../../views';
import { Home } from '../../views/Home';
import  Diagnosis  from '../../views/Diagnosis';
import  Results  from '../../views/Results';
import  { Search }  from '../../views/Search';
import  { Information }  from '../../views/Information';
import  { Treatment }  from '../../views/Treatment';

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
        path: `${pathBase}/informacion`,
        component: Search,
        exact: true,
      },
      {
        path: `${pathBase}/informacion/:alias`,
        component: Information,
        exact: true,
      },
      {
        path: `${pathBase}/tratamiento/:alias`,
        component: Treatment,
        exact: true,
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
