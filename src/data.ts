const symptoms = [
    {
        text: 'Dolor dental',
        value: 'DD',
        key: 'DD',
        type: 'dental'
    },
    {
        text: 'Sensibilidad dental al consumir alimentos',
        value: 'SD',
        key: 'SD',
        type: 'dental'
    },
    {
        text: 'Hoyuelos visibles en los dientes',
        value: 'HD',
        key: 'HD',
        type: 'dental'
    },
    {
        text: 'Manchas de color oscuro en los dientes',
        value: 'MD',
        key: 'MD',
        type: 'dental'
    },{
        text: 'Sangrado de encías',
        value: 'SE',
        key: 'SE',
        type: 'oral'
    },{
        text: 'Encías rojas brillantes',
        value: 'ER',
        key: 'ER',
        type: 'oral'
    },{
        text: 'Encías sensibles al tacto',
        value: 'ES',
        key: 'ES',
        type: 'oral'
    },{
        text: 'Encías inflamadas',
        value: 'EI',
        key: 'EI',
        type: 'oral'
    },{
        text: 'Dientes desalineados',
        value: 'DDL',
        key: 'DDL',
        type: 'dental'
    },{
        text: 'Dolor de mandíbula',
        value: 'DM',
        key: 'DM',
        type: 'oral'
    },{
        text: 'Desgaste dental',
        value: 'DDT',
        key: 'DDT',
        type: 'dental'
    },{
        text: 'Chasquidos dentales',
        value: 'CHD',
        key: 'CHD',
        type: 'dental'
    },{
        text: 'Mal aliento',
        value: 'MA',
        key: 'MA',
        type: 'oral'
    },{
        text: 'Dientes flojos',
        value: 'DF',
        key: 'DF',
        type: 'dental'
    },{
        text: 'Áreas blancas y opacas en la superficie del esmalte dental',
        value: 'ABO',
        key: 'ABO',
        type: 'dental'
    },{
        text: 'Pequeñas grietas y estrías en la superficie de los dientes',
        value: 'PGE',
        key: 'PGE',
        type: 'dental'
    }
]

export const dentalSymptoms = symptoms.filter(sypmtom => sypmtom.type === 'dental');
export const oralSymptoms = symptoms.filter(sypmtom => sypmtom.type === 'oral');