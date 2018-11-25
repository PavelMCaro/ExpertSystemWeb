import * as React from 'react';
import { Header, Segment, Grid, Button, Image } from 'semantic-ui-react';

const diseaseOptions = [
    {
        text: 'CARIES DENTAL',
        value: 'CADTL',
        treatment: 'El tratamiento puede ayudar a impedir que el daño a los dientes lleve a caries dentales. El tratamiento puede involucrar: Obturaciones, Coronas, Tratamiento de conductos. Los odontólogos obturan los dientes eliminando el material dental cariado con el uso de una fresa dental y reemplazándolo con un material como las aleaciones de plata, oro, porcelana o resina compuesta. Las coronas o "fundas dentales" se usan si la caries es extensa y hay una estructura dental limitada, la cual puede ocasionar dientes debilitados. Las obturaciones grandes y los dientes débiles aumentan el riesgo de ruptura de estos. Un tratamiento de conductos se recomienda si el nervio del diente muere como consecuencia de una caries o de una lesión. ',
    },
    {
        text: 'GINGIVITIS',
        value: 'GGVTS',
        treatment: 'Es necesaria una higiene oral cuidadosa después de una limpieza dental profesional. El odontólogo o el higienista oral le mostrarán a usted cómo cepillarse y usar el hilo dental apropiadamente. Además de lavarse los dientes y usar el hilo dental, se recomienda: -	Hacerse una limpieza dental profesional dos veces al año, o más a menudo para casos peores de enfermedad periodontal, -	El uso de enjuagues bucales antibacterianos u otro tipo de ayudas.',
    },
    {
        text: 'BRUXISMO',
        value: 'BRXSM',
        treatment: 'Los objetivos del tratamiento son reducir el dolor, prevenir el daño dental permanente y disminuir el rechinamiento de los dientes lo más que se pueda. Para evitar daño a los dientes, a menudo se utilizan protectores bucales o aparatos (férulas) para el tratamiento del rechinamiento y apretamiento de los dientes y de los trastornos de la articulación temporomandibular. Una férula puede ayudar a proteger los dientes de la presión del rechinamiento.',
    },
    {
        text: 'PERIODONTITIS',
        value: 'PRDTT',
        treatment: 'El objetivo del tratamiento es reducir la inflamación, eliminar las bolsas en las encías y tratar cualquier causa subyacente de la enfermedad periodontal. Se deben reparar las superficies ásperas de los dientes o los aparatos dentales. Tenga una limpieza dental completa. Ésta puede involucrar el uso de diversos instrumentos o aparatos para aflojar y remover la placa y el sarro de los dientes. Siempre se necesita el uso del cepillado y uso de hilo dental apropiados, incluso después de realizarse una limpieza dental profesional.',
    },
    {
        text: 'FLUOROSIS',
        value: 'FLRSS',
        treatment: 'Los blanqueamientos dentales profesionales son la primera opción para tratar casos de fluorosis, aunque no siempre la más adecuada, porque los dientes siguen manchándose y es necesario repetir periódicamente el tratamiento. Para solucionar de forma permanente las manchas marrones en los dientes típicos de este problema, muchos odontólogos recomiendan las carillas dentales o las coronas de porcelana o de zirconio, que devuelvan al frente estético de la sonrisa del paciente un aspecto higiénico y saludable.',
    }
]

const getDisease = (value) => {
    return diseaseOptions.filter(a => a.value == value)
}

interface Props {
    match: any;
    history: any;
}

export const Treatment: React.SFC<Props> = ({match, history}) => (
    <React.Fragment>
        {console.log(match.params.alias)}
        <Grid centered columns={2}>
            <Grid.Column>
                <br/><Segment>
                <br/><Header as='h2' textAlign='center'>TRATAMIENTO DE {getDisease(match.params.alias)[0].text}</Header><br/>
                    <Grid centered columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    {getDisease(match.params.alias)[0].treatment}
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Button primary fluid onClick={() => history.push('/')}>Volver al inicio</Button>
                                <br/><br/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Grid.Column>
        </Grid>
    </React.Fragment>
)