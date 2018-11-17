import { stat } from "fs";

// actionTypes
const ADD_SYMPTOM = 'ADD_SYMPTOM';
const DELETE_SYMPTOM = 'DELETE_SYMPTOM';

// action
export const addSymptom = value => ({
    type: ADD_SYMPTOM,
    value
});

export const deleteSymptom = value => ({
    type: DELETE_SYMPTOM,
    value
});

// reducer
const initialState = [
    {
        text: 'Dolor dental',
        value: 'DD',
        key: 'DD',
        type: 'dental',
        selected: false
    },
    {
        text: 'Sensibilidad dental al consumir alimentos',
        value: 'SD',
        key: 'SD',
        type: 'dental',
        selected: false
    },
    {
        text: 'Hoyuelos visibles en los dientes',
        value: 'HD',
        key: 'HD',
        type: 'dental',
        selected: false
    },
    {
        text: 'Manchas de color oscuro en los dientes',
        value: 'MD',
        key: 'MD',
        type: 'dental',
        selected: false
    },{
        text: 'Sangrado de encías',
        value: 'SE',
        key: 'SE',
        type: 'oral',
        selected: false
    },{
        text: 'Encías rojas brillantes',
        value: 'ER',
        key: 'ER',
        type: 'oral'
    },{
        text: 'Encías sensibles al tacto',
        value: 'ES',
        key: 'ES',
        type: 'oral',
        selected: false
    },{
        text: 'Encías inflamadas',
        value: 'EI',
        key: 'EI',
        type: 'oral',
        selected: false
    },{
        text: 'Dientes desalineados',
        value: 'DDL',
        key: 'DDL',
        type: 'dental',
        selected: false
    },{
        text: 'Dolor de mandíbula',
        value: 'DM',
        key: 'DM',
        type: 'oral',
        selected: false
    },{
        text: 'Desgaste dental',
        value: 'DDT',
        key: 'DDT',
        type: 'dental',
        selected: false
    },{
        text: 'Chasquidos dentales',
        value: 'CHD',
        key: 'CHD',
        type: 'dental',
        selected: false
    },{
        text: 'Mal aliento',
        value: 'MA',
        key: 'MA',
        type: 'oral',
        selected: false
    },{
        text: 'Dientes flojos',
        value: 'DF',
        key: 'DF',
        type: 'dental',
        selected: false
    },{
        text: 'Áreas blancas y opacas en la superficie del esmalte dental',
        value: 'ABO',
        key: 'ABO',
        type: 'dental',
        selected: false
    },{
        text: 'Pequeñas grietas y estrías en la superficie de los dientes',
        value: 'PGE',
        key: 'PGE',
        type: 'dental',
        selected: false
    }
];

const toogleSymptopm = (state, action) => {
    return state.map(symptom => {
        if(symptom.value === action.value) {
            let updateSymptom = {
                ...symptom,
                selected: !symptom.selected
            }
            return updateSymptom;
        }
        return symptom
    });
};

export const symptoms = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SYMPTOM:
            return toogleSymptopm(state, action);
        case DELETE_SYMPTOM:
            return toogleSymptopm(state, action);
        default:
            return state;
    }
}

// selectors
export const getBuccalOptions = state => {
    return state.symptoms.filter(sypmtom => sypmtom.type === 'oral' && !sypmtom.selected);
}

export const getOralOptions = state => {
    return state.symptoms.filter(sypmtom => sypmtom.type === 'dental' && !sypmtom.selected);
}

export const getSymptomsSelected = state => {
    return state.symptoms.filter(sypmtom => sypmtom.selected);
}