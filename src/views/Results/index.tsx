import * as React from 'react';
import { Header, Segment, Grid, Dropdown,  Button } from 'semantic-ui-react';

export const Results = () => {
    return (
    <React.Fragment>
        <Grid centered columns={2}>
            <Grid.Column>
                <Segment>
                    <Header as='h2' textAlign='center'>RESULTADOS</Header>
                    <Grid centered columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Button primary fluid href='/'>Acerca de la enfermedad</Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button primary fluid href='/'>Tratamiento</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </React.Fragment>
    );
}