import * as React from 'react';
import { Header, Segment, Grid, Button, Image } from 'semantic-ui-react';

const diseaseOptions = [
    {
        text: 'CARIES DENTAL',
        value: 'CADTL',
        information: 'La caries dental es un trastorno común, que le sigue en frecuencia al resfriado común. Suele aparecer en los niños y en los adultos jóvenes, pero puede afectar a cualquier persona. Es una causa común de pérdida de los dientes en las personas más jóvenes.',
        img: '../../Images/Enfermedades/Caries.png'
    },
    {
        text: 'GINGIVITIS',
        value: 'GGVTS',
        information: 'La gingivitis es una forma de enfermedad periodontal. La enfermedad periodontal es la inflamación e infección que destruyen los tejidos de soporte de los dientes. Esto puede incluir las encías, los ligamentos periodontales y los alvéolos dentales (hueso alveolar).',
        img: '../../Images/Enfermedades/Gingivitis.png'
    },
    {
        text: 'BRUXISMO',
        value: 'BRXSM',
        information: 'Es cuando una persona aprieta los dientes (sujeta fuertemente los dientes superiores e inferiores) o los hace rechinar (deslizar o frotar los dientes de atrás hacia adelante uno sobre el otro). Las personas pueden apretar y rechinar los dientes inconscientemente. Esto puede suceder durante el día y la noche.',
        img: '../../Images/Enfermedades/Bruxismo.png'
    },
    {
        text: 'PERIODONTITIS',
        value: 'PRDTT',
        information: 'Es una inflamación e infección de los ligamentos y huesos que sirven de soporte a los dientes. La periodontitis ocurre cuando se presenta inflamación o la infección de las encías (gingivitis) y no es tratada. La infección e inflamación se diseminan desde las encías (gingiva) hasta los ligamentos y el hueso que sirven de soporte a los dientes. La pérdida de soporte hace que los dientes se aflojen y finalmente se caigan. La periodontitis es la causa principal de la caída de los dientes en los adultos. Este trastorno no es común en los niños pequeños, pero se incrementa durante los años de adolescencia.',
        img: '../../Images/Enfermedades/Periodontitis.png'
    },
    {
        text: 'FLUOROSIS',
        value: 'FLRSS',
        information: 'La fluorosis es una anomalía en la formación del esmalte, causada por una excesiva exposición al flúor en la etapa de formación de los dientes. A pesar de que se manifiesta con unas características manchas y pequeños puntos en los dientes, la fluorosis no es un problema de higiene bucal.',
        img: '../../Images/Enfermedades/Fluorosis.png'
    }
]

const getDisease = (value) => {
    return diseaseOptions.filter(a => a.value == value)
}

interface Props {
    match: any;
    history: any;
}

export const Information: React.SFC<Props> = ({match, history}) => (
    <React.Fragment>
        {console.log(match)}
        {console.log(history)}
        <Grid centered columns={2}>
            <Grid.Column>
                <br/><Segment>
                <br/><Header as='h2' textAlign='center'>{getDisease(match.params.alias)[0].text}</Header><br/>
                    <Grid centered columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    {getDisease(match.params.alias)[0].information}
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={getDisease(match.params.alias)[0].img}/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button primary fluid onClick={() => { const disease = getDisease(match.params.alias)[0].value; history.push(`/tratamiento/${disease}`)}}>Tratamiento</Button>
                                <br/><br/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </React.Fragment>
)