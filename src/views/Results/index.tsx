import * as React from 'react';
import { Header, Segment, Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getOralOptions, getSymptomsSelected } from '../Diagnosis/symptom/state/symptoms';

interface Props {
    result: any;
    symptomsSelected: any;
    sypmtomsList: any;
}

class Results extends React.Component<Props,{}> {

    render (): JSX.Element {

        console.log('SINTOMAS', this.props.symptomsSelected);
        console.log('ARRAY SINTOMAS', this.props.sypmtomsList);

        return (
            <React.Fragment>
                <Grid centered columns={2}>
                    <Grid.Column>
                        <br/><Segment>
                        <br/><Header as='h2' textAlign='center'>RESULTADOS</Header><br/>
                            <Grid centered columns={2}>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Segment>
                                            El paciente tiene altas probabilidades de padecer {this.props.result}
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Button primary fluid href='/'>Acerca de la enfermedad</Button>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Button primary fluid href='/'>Tratamiento</Button>
                                        <br/><br/><br/>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapSate = state => ({
    symptomsSelected: getSymptomsSelected(state),
    sypmtomsList: getOralOptions(state)
});

const mapDispatch = dispatch => ({
   // handleDeleteSymptom: (value) => {
     //   dispatch(deleteSymptom(value));
    //}
});

export default connect(
    mapSate,
    mapDispatch
)(Results)