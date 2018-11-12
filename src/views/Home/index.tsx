import * as React from 'react';
import { Header, Image } from 'semantic-ui-react';

export const Home = () => (
    <React.Fragment>
        <Header as='h2' textAlign='center'>SISTEMA EXPERTO DE</Header>
        <Header as='h2' textAlign='center'>DIAGNÓSTICO DE ENFERMEDADES BUCODENTALES</Header>
        <Image src='./Images/Home.jpg' centered/>
    </React.Fragment>
);