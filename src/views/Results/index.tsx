import * as React from 'react';
import { Header, Segment, Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getOralOptions, getSymptomsSelected, getBuccalOptions } from '../Diagnosis/symptom/state/symptoms';
import  { CariesDentalSymptoms, BruxismoSymptoms, GingivitisSymptoms, PeriodontitisSymptoms, FluorosisSymptoms } from '../../data'

interface Props {
    symptomsSelected: any;
    sypmtomsList: any;
    BucalsypmtomsList: any;
    history: any;
}

interface State {
    disease: string;
    probability: string;
    alias: string;
}
class Results extends React.Component<Props, State> {

    state = {
        disease: '',
        probability: '',
        alias: ''
    }
    
    componentDidMount() {
        console.log('SINTOMAS', this.props.symptomsSelected);
        console.log('longiutd', this.props.symptomsSelected.length);

        let cariesCount = 0;

        for(let i=0; i<this.props.symptomsSelected.length; i++){
            for(let j=0; j<CariesDentalSymptoms.length; j++){
                if(this.props.symptomsSelected[i].value == CariesDentalSymptoms[j].value){
                    cariesCount += 1;
                }
            }
        }

        if (cariesCount >= 3){
            this.setState({
                disease: 'Caries Dental',
                probability: 'altas probabilidades',
                alias: 'CDTL'
            })
        }

        console.log('CONTADOR', cariesCount);

    }
    render (): JSX.Element {

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
                                            El paciente tiene {this.state.probability} de padecer <strong>{this.state.disease}</strong>
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Button primary fluid onClick={() => this.props.history.push(`/information/${this.state.alias}`)}>Acerca de la enfermedad</Button>
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
    sypmtomsList: getOralOptions(state),
    BucalsypmtomsList: getBuccalOptions(state)
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