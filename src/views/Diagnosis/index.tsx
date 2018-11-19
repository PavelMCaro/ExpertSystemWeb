import * as React from 'react';
import { Header, Segment, Grid, Button } from 'semantic-ui-react';
import SymptomContainer from './symptom/components/Symptom';
import SummaryContainer from './summary/components/Summary';

export const Diagnosis = (props) => (
    <React.Fragment>
        {console.log(props)}
        <Header as='h2' textAlign='center'>DIAGNÓSTICO</Header>
        <Segment placeholder> 
            <Grid columns={2} stackable>
                <Grid.Row>
                    <Grid.Column>
                        <SymptomContainer />
                    </Grid.Column>
                    <Grid.Column>
                        <SummaryContainer />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <br/>
            <br/>
            <Grid centered columns={2}>
                <Grid.Column>
                    <Button primary onClick={() => props.history.push('/resultados')}>Realizar diagnóstico</Button>
                </Grid.Column>
            </Grid>
            <br/>
        </Segment>
    </React.Fragment>
);
