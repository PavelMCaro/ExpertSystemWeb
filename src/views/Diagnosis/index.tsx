import * as React from 'react';
import { Header, Segment, Grid, Dropdown, Label, Button } from 'semantic-ui-react';

const options = [
    {
        key: 's1',
        value: 's1',
        flag: 's1',
        text: 'Síntoma 1'
    },
    {
        key: 's2',
        value: 's2',
        flag: 's2',
        text: 'Síntoma 2'
    },
    {
        key: 's3',
        value: 's3',
        flag: 's3',
        text: 'Síntoma 3'
    }
]

export const Diagnosis = () => (
    <React.Fragment>
        <Header as='h2' textAlign='center'>DIAGNÓSTICO</Header>
        <Segment placeholder> 
            <Grid columns={2} stackable>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>Síntomas</Header>
                        <Label pointing='below'>Bucales</Label>
                        <Dropdown placeholder='Seleccione síntoma' fluid search selection options={options}/>
                        <Label pointing='below'>Dentales</Label>
                        <Dropdown placeholder='Seleccione síntoma' fluid search selection options={options}/>
                        <Label pointing='below'>Antecedentes</Label>
                        <Dropdown placeholder='Seleccione síntoma' fluid search selection options={options}/>
                        <Label pointing='below'>Otros</Label>
                        <Dropdown placeholder='Seleccione síntoma' fluid search selection options={options}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>Resumen</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br/>
            <br/>
            <Button primary>Realizar diagnóstico</Button>
            <br/>
        </Segment>
    </React.Fragment>
);