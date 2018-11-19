import * as React from 'react';
import { Header, Grid, Label, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteSymptom, getSymptomsSelected } from '../../symptom/state/symptoms';

const Summary = ({ options, handleDeleteSymptom }) => (
    <React.Fragment>
        <Header as='h3' textAlign='center'>Resumen</Header>
        <Grid centered>
            <Grid.Column textAlign='left'>
                <Label pointing='below' color='teal' size='large'>Síntomas seleccionados</Label>
                <Label.Group size="medium">
                    {options.map(option => (
                        <Label as={option.id} key={option.value}>
                            {option.text}
                            <Icon name='close' onClick={( e => {
                                handleDeleteSymptom(option.value);
                            })} />
                        </Label>
                    ))}
                </Label.Group>
            </Grid.Column>
        </Grid>
    </React.Fragment>
)

const mapSate = state => ({
    options: getSymptomsSelected(state)
});

const mapDispatch = dispatch => ({
    handleDeleteSymptom: (value) => {
        dispatch(deleteSymptom(value));
    }
});

export default connect(
    mapSate,
    mapDispatch
)(Summary)