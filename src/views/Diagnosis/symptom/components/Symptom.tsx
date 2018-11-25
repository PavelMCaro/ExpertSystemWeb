import * as React from 'react';
import { connect } from 'react-redux'
import { Header, Segment, Grid, Dropdown, Label } from 'semantic-ui-react';
import { addSymptom, getBuccalOptions, getOralOptions, clearSymptom } from '../state/symptoms';

interface Props {
    buccalOptions: any;
    dentalOptions: any;
    handleAddSymptom: any;
    clearSymptom: any;
}
class Symptom extends React.Component<Props>{

    componentDidMount() {
        this.props.clearSymptom();
    }

    render(): JSX.Element {
        return (
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
                                ...this.props.buccalOptions
                            ]}
                            onChange={(e, { value }) => {
                                this.props.handleAddSymptom(value);
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
                                ...this.props.dentalOptions
                            ]}
                            onChange={(e, { value }) => {
                                this.props.handleAddSymptom(value);
                            }} 
                        />
                        <br/>
                     </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}

const mapState = state => ({
    buccalOptions: getBuccalOptions(state),
    dentalOptions: getOralOptions(state)
});

const mapDispatch =  dispatch => ({
    handleAddSymptom: (value) => {
        dispatch(addSymptom(value));
    },
    clearSymptom: () => dispatch(clearSymptom())
});

export default connect(
    mapState,
    mapDispatch
)(Symptom)