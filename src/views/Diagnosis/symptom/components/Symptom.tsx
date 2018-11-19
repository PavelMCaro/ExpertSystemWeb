import * as React from 'react';
import { connect } from 'react-redux'
import { Header, Segment, Grid, Dropdown, Label } from 'semantic-ui-react';
import { addSymptom, getBuccalOptions, getOralOptions } from '../state/symptoms';

const options = []

const Symptom = ({ buccalOptions, dentalOptions, handleAddSymptom }) => (
    <Grid centered columns={1}>
        <Grid.Column>
            <Header as='h3' textAlign='center'>Síntomas</Header>
            <Segment raised>
                <Label as='a' color='blue' ribbon>
                    Bucales
                </Label>
                <Dropdown
                    placeholder='Seleccione síntoma'
                    fluid
                    search
                    selection
                    options={[
                        {text: 'Seleccione síntoma', key: 'SS'},
                        ...buccalOptions
                    ]}
                    onChange={(e, { value }) => {
                        handleAddSymptom(value);
                    }}
                />
                <br/>
                <Label as='a' color='blue' ribbon>
                    Dentales
                </Label>
                <Dropdown
                    placeholder='Seleccione síntoma'
                    fluid
                    search
                    selection
                    options={[
                        {text: 'Seleccione síntoma', key: 'SS'},
                        ...dentalOptions
                    ]}
                    onChange={(e, { value }) => {
                        handleAddSymptom(value);
                    }} 
                />
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
)

const mapState = state => ({
    buccalOptions: getBuccalOptions(state),
    dentalOptions: getOralOptions(state)
});

const mapDispatch =  dispatch => ({
    handleAddSymptom: (value) => {
        console.log(value);
        dispatch(addSymptom(value));
    }
});

export default connect(
    mapState,
    mapDispatch
)(Symptom)