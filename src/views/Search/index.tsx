import * as React from 'react';
import { Header, Segment, Grid, Button, Dropdown, Label } from 'semantic-ui-react';

const diseaseOptions = [
    {
        text: 'Caries dental',
        value: 'CADTL',
        key: 'CADTL',
        selected: false,
    },
    {
        text: 'Gingivitis',
        value: 'GGVTS',
        key: 'GGVTS',
        selected: false,
    },
    {
        text: 'Bruxismo',
        value: 'BRXSM',
        key: 'BRXSM',
        selected: false,
    },
    {
        text: 'Periodontitis',
        value: 'PRDTT',
        key: 'PRDTT',
        selected: false,
    },
    {
        text: 'Fluorosis',
        value: 'FLRSS',
        key: 'FLRSS',
        selected: false,
    }
]

export const Search = (props) => (
    <React.Fragment>
        <Grid centered columns={2}>
            <Grid.Column>
                <br/><Segment>
                <br/><Header as='h2' textAlign='center'>ENFERMEDAD</Header><br/>
                    <Grid centered columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                            <Label as='a' color='blue' ribbon>
                                Enfermedades
                            </Label>
                            <Dropdown
                                placeholder='Seleccione enfermedad'
                                fluid
                                search
                                selection       
                                options={[
                                    {text: 'Seleccione enfermedad', key: 'SE'},
                                    ...diseaseOptions
                                ]}
                                onChange={(e, { value }) => {
                                    if(value) {
                                        props.history.push(`/informacion/${value}`);
                                    }
                                }}
                            />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button primary fluid href='/'>Tratamiento</Button>
                                <br/><br/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </React.Fragment>
);