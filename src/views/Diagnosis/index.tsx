import * as React from 'react';
import { Header, Segment, Grid, Dropdown, Label, Button } from 'semantic-ui-react';
import { dentalSymptoms, oralSymptoms } from '../../data';

function onAddItemSelect (e, {value}) {
    console.log('value data', dentalSymptoms[0].value),
    console.log('value', value);
    let valueSelected = oralSymptoms.filter(option => option.value == value)
    console.log(valueSelected);
}

const options = []

export const Diagnosis = () => {
    console.log(dentalSymptoms);
    console.log(oralSymptoms);
    return (
    <React.Fragment>
        <Header as='h2' textAlign='center'>DIAGNÓSTICO</Header>
        <Segment placeholder> 
            <Grid columns={2} stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Grid centered columns={1}>
                            <Grid.Column>
                                <Header as='h3' textAlign='center'>Síntomas</Header>
                                <Segment raised>
                                    <Label as='a' color='blue' ribbon>
                                        Bucales
                                    </Label>
                                    <Dropdown placeholder='Seleccione síntoma' fluid search selection options={oralSymptoms} onChange={onAddItemSelect}/>
                                    <br/>
                                    <Label as='a' color='blue' ribbon>
                                        Dentales
                                    </Label>
                                    <Dropdown placeholder='Seleccione síntoma' fluid search selection options={dentalSymptoms}/>
                                    <br/>
                                    <Label as='a' color='blue' ribbon>
                                        Antecedentes
                                    </Label>
                                    <Dropdown placeholder='Seleccione síntoma' fluid search selection options={options}/>
                                    <br/>
                                    <Label as='a' color='blue' ribbon>
                                        Otros
                                    </Label>
                                    <Dropdown placeholder='Seleccione síntoma' fluid search selection options={options}/>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>Resumen</Header>
                        <Grid centered columns={3}>
                            <Grid.Column textAlign='center'>
                                <Label pointing='below' color='teal' size='large'>Síntomas seleccionados</Label>
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br/>
            <br/>
            <Grid centered columns={2}>
                <Grid.Column>
                    <Button primary href='/resultados'>Realizar diagnóstico</Button>
                </Grid.Column>
            </Grid>
            <br/>
        </Segment>
    </React.Fragment>
    );
}