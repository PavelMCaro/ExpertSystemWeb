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
    text: string;
    alias: string;
}
class Results extends React.Component<Props, State> {

    state = {
        disease: '',
        text: '',
        alias: ''
    }
    
    orDenarArray (arreglo) {
        let aux;
		for (var i=0;i<arreglo.length;i++){
			for(var j=i+1;j<arreglo.length;j++){
				if(arreglo[i].count>arreglo[j].count){
					aux=arreglo[i];
					arreglo[i]=arreglo[j];
					arreglo[j]=aux;
				}
			}
        }
        console.log('arreglo ordenado', arreglo);
		return arreglo;	
    }

    componentDidMount() {
        let diseaseCounts = [ 
            {
                value: 'CADTL',
                text: 'Caries Dental',
                count: 0
            },
            {
                value: 'GGVTS',
                text: 'Gingivitis',
                count: 0
            },
            {
                value: 'PRDTT',
                text: 'Periodontitis',
                count: 0
                
            },
            {
                value: 'BRXSM',
                text: 'Bruxismo',
                count: 0
            },
            {
                value: 'FLRSS',
                text: 'Fluorosis',
                count: 0
            }
        ]

        for(let i=0; i<this.props.symptomsSelected.length; i++){
            for(let j=0; j<CariesDentalSymptoms.length; j++){
                if(this.props.symptomsSelected[i].value == CariesDentalSymptoms[j].value){
                    diseaseCounts[0].count += 1;
                }
            }
            for(let j=0; j<GingivitisSymptoms.length; j++){
                if(this.props.symptomsSelected[i].value == GingivitisSymptoms[j].value){
                    diseaseCounts[1].count += 1;
                }
            }
            for(let j=0; j<PeriodontitisSymptoms.length; j++){
                if(this.props.symptomsSelected[i].value == PeriodontitisSymptoms[j].value){
                    diseaseCounts[2].count += 1;
                }
            }
            for(let j=0; j<BruxismoSymptoms.length; j++){
                if(this.props.symptomsSelected[i].value == BruxismoSymptoms[j].value){
                    diseaseCounts[3].count += 1;
                }
            }
            for(let j=0; j<FluorosisSymptoms.length; j++){
                if(this.props.symptomsSelected[i].value == FluorosisSymptoms[j].value){
                    diseaseCounts[4].count += 1;
                }
            }
        }

        this.orDenarArray(diseaseCounts);

        console.log('ENFERMEDADES', diseaseCounts);
              
        if (diseaseCounts[4].value == 'CADTL' || diseaseCounts[4].value == 'BRXSM') {
            if(diseaseCounts[4].count == 4) {
                if(diseaseCounts[3].count == 4) {
                    if((diseaseCounts[3].value == 'GGVTS' || diseaseCounts[3].value == 'PRDTT')) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + 'Gingivitis',
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                } else if (diseaseCounts[3].count == 3) {
                    if((diseaseCounts[3].value == 'GGVTS' || diseaseCounts[3].value == 'PRDTT')) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y probabilidad de padecer' + ' ' + 'Gingivitis',
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        })  
                    } else {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        })  
                    }
                }   else if (diseaseCounts[3].count == 2) {
                    if((diseaseCounts[3].value == 'GGVTS' || diseaseCounts[3].value == 'PRDTT')) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + 'Gingivitis',
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                }   else if (diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                            this.setState({
                                disease: diseaseCounts[4].text,
                                text: 'El paciente tiene altas probabilidades de padecer ',
                                alias: diseaseCounts[0].value
                            })
                }
            } else if (diseaseCounts[4].count == 3) {
                if (diseaseCounts[3].count == 3) {
                    if((diseaseCounts[3].value == 'GGVTS' || diseaseCounts[3].value == 'PRDTT')) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + 'Gingivitis',
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                    
                } else if (diseaseCounts[3].count == 2) {
                    if((diseaseCounts[3].value == 'GGVTS' || diseaseCounts[3].value == 'PRDTT')) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + 'Gingivitis',
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                } else if (diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                    this.setState({
                        disease: diseaseCounts[4].text,
                        text: 'El paciente tiene probabilidades de padecer ',
                        alias: diseaseCounts[0].value
                    }) 
                }
            } else if (diseaseCounts[4].count == 2) {
                if (diseaseCounts[3].count == 2) {
                    if((diseaseCounts[3].value == 'GGVTS' || diseaseCounts[3].value == 'PRDTT')) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + 'Gingivitis',
                            text: 'El paciente tiene baja probabilidade de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene baja probabilidade de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                } else if (diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                    this.setState({
                        disease: diseaseCounts[4].text,
                        text: 'El paciente tiene baja probabilidad de padecer ',
                        alias: diseaseCounts[0].value
                    }) 
                }
            } else if (diseaseCounts[4].count == 1) {
                this.setState({
                    disease: '',
                    text: 'No hay información suficiente para poder brindar un diagnóstico',
                    alias: ''
                })
            }
        } else if (diseaseCounts[4].value == 'GGVTS') {
            if(diseaseCounts[3].value == 'PRDTT') {
                if (diseaseCounts[4].count == 5) {
                    this.setState({
                        disease: diseaseCounts[4].text,
                        text: 'El paciente tiene altas probabilidades de padecer',
                        alias: diseaseCounts[4].value
                    }) 
                } else if (diseaseCounts[4].count == 4) {
                    this.setState({
                        disease: 'Gingivitis',
                        text: 'El paciente tiene probabilidades de padecer',
                        alias: 'GGVTS'
                    }) 
                } else if (diseaseCounts[4].count == 3) {
                    this.setState({
                        disease: 'Gingivitis',
                        text: 'El paciente tiene bajas probabilidades de padecer',
                        alias: 'GGVTS'
                    }) 
                } else if (diseaseCounts[4].count == 2 || diseaseCounts[4].count == 1 || diseaseCounts[4].count == 0) {
                    this.setState({
                        disease: '',
                        text: 'No hay información suficiente para poder brindar un diagnóstico',
                        alias: ''
                    }) 
                }
            } else {
                if (diseaseCounts[4].count == 5) {
                    if(diseaseCounts[3].count == 4) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if(diseaseCounts[3].count == 3) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if(diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if(diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: diseaseCounts[4].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                } else if (diseaseCounts[4].count == 4) {
                    if (diseaseCounts[3].count == 4) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y alta probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if (diseaseCounts[3].count == 3) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if (diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if(diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: diseaseCounts[4].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                } else if (diseaseCounts[4].count == 3) {
                    if (diseaseCounts[3].count == 3) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene bajas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }else  if (diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene bajas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if(diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: diseaseCounts[4].text,
                            text: 'El paciente tiene bajas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                } else if (diseaseCounts[4].count == 2) {
                    if (diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: diseaseCounts[3].text,
                            text: 'El paciente tiene bajas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if(diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: '',
                            text: 'No hay información suficiente para poder brindar un diagnóstico',
                            alias: ''
                        }) 
                    }
                } else if (diseaseCounts[4].count == 1 ||diseaseCounts[4].count == 0) {
                    this.setState({
                        disease: '',
                        text: 'No hay información suficiente para poder brindar un diagnóstico',
                        alias: ''
                    }) 
                }
            }
        } else if (diseaseCounts[4].value == 'PRDTT') {
            if(diseaseCounts[3].value == 'GGVTS') {
                if (diseaseCounts[4].count == 7) {
                    this.setState({
                        disease: diseaseCounts[4].text,
                        text: 'El paciente tiene altas probabilidades de padecer',
                        alias: diseaseCounts[4].value
                    }) 
                } else if (diseaseCounts[4].count == 6) {
                    this.setState({
                        disease: diseaseCounts[4].text,
                        text: 'El paciente tiene probabilidades de padecer',
                        alias: diseaseCounts[4].value
                    }) 
                } else if (diseaseCounts[4].count == 5) {
                    this.setState({
                        disease: 'Gingivitis',
                        text: 'El paciente tiene altas probabilidades de padecer',
                        alias: 'GGVTS'
                    }) 
                } else if (diseaseCounts[4].count == 4) {
                    this.setState({
                        disease: 'Gingivitis',
                        text: 'El paciente tiene probabilidades de padecer',
                        alias: 'GGVTS'
                    }) 
                } else if (diseaseCounts[4].count == 3) {
                    this.setState({
                        disease: 'Gingivitis',
                        text: 'El paciente tiene bajas probabilidades de padecer',
                        alias: 'GGVTS'
                    }) 
                } else if (diseaseCounts[4].count == 2 || diseaseCounts[4].count == 1 || diseaseCounts[4].count == 0) {
                    this.setState({
                        disease: '',
                        text: 'No hay información suficiente para poder brindar un diagnóstico',
                        alias: ''
                    }) 
                }
            } else {
                if (diseaseCounts[4].count == 7) {
                    if (diseaseCounts[3].count == 4) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }else if (diseaseCounts[3].count == 3) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if (diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if (diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: diseaseCounts[4].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                } else if (diseaseCounts[4].count == 6) {
                    if (diseaseCounts[3].count == 4) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y alta probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }else if (diseaseCounts[3].count == 3) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if (diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    } else if (diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: diseaseCounts[4].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                    }
                } else if (diseaseCounts[4].count == 5) {
                    if(diseaseCounts[3].count == 4) {
                        this.setState({
                            disease: 'Gingivitis' + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    } else if(diseaseCounts[3].count == 3) {
                        this.setState({
                            disease: 'Gingivitis' + ' ' + 'y probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    } else if(diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: 'Gingivitis' + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    } else if(diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: 'Gingivitis',
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    }
                } else if (diseaseCounts[4].count == 4) {
                    if (diseaseCounts[3].count == 4) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y alta probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    } else if (diseaseCounts[3].count == 3) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    } else if (diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    } else if(diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: diseaseCounts[4].text,
                            text: 'El paciente tiene probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    }
                } else if (diseaseCounts[4].count == 3) {
                    if (diseaseCounts[3].count == 3) {
                        this.setState({
                            disease: 'Gingivitis' + ' ' + 'y probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene bajas probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    }else  if (diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: 'Gingivitis' + ' ' + 'y' + ' ' + diseaseCounts[3].text,
                            text: 'El paciente tiene bajas probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    } else if(diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: 'Gingivitis',
                            text: 'El paciente tiene bajas probabilidades de padecer',
                            alias: 'GGVTS'
                        }) 
                    }
                } else if (diseaseCounts[4].count == 2) {
                    if (diseaseCounts[3].count == 2) {
                        this.setState({
                            disease: diseaseCounts[3].text,
                            text: 'El paciente tiene bajas probabilidades de padecer',
                            alias: diseaseCounts[3].value
                        }) 
                    } else if(diseaseCounts[3].count == 1 || diseaseCounts[3].count == 0) {
                        this.setState({
                            disease: '',
                            text: 'No hay información suficiente para poder brindar un diagnóstico',
                            alias: ''
                        }) 
                    }
                } else if (diseaseCounts[4].count == 1 ||diseaseCounts[4].count == 0) {
                    this.setState({
                        disease: '',
                        text: 'No hay información suficiente para poder brindar un diagnóstico',
                        alias: ''
                    }) 
                }
            }

        } else if (diseaseCounts[4].value == 'FLRSS') {
            if(diseaseCounts[4].count == 3) {
                if(diseaseCounts[3].count == 3) {
                    this.setState({
                        disease: diseaseCounts[4].text + ' ' + 'y probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                        text: 'El paciente tiene altas probabilidades de padecer',
                        alias: diseaseCounts[4].value
                    }) 
                } else if (diseaseCounts[3].count == 2) {
                    this.setState({
                        disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                        text: 'El paciente tiene altas probabilidades de padecer',
                        alias: diseaseCounts[4].value
                    })  
                }   else if (diseaseCounts[3].count == 1) {
                        this.setState({
                            disease: diseaseCounts[4].text,
                            text: 'El paciente tiene altas probabilidades de padecer',
                            alias: diseaseCounts[4].value
                        }) 
                }
            } else if(diseaseCounts[4].count == 2) {
                if(diseaseCounts[3].count == 2) {
                    this.setState({
                        disease: diseaseCounts[4].text + ' ' + 'y baja probabilidad de padecer' + ' ' + diseaseCounts[3].text,
                        text: 'El paciente tiene probabilidades de padecer',
                        alias: diseaseCounts[4].value
                    }) 
                } else  if(diseaseCounts[3].count == 1) {
                    this.setState({
                        disease: diseaseCounts[4].text,
                        text: 'El paciente tiene probabilidades de padecer',
                        alias: diseaseCounts[4].value
                    }) 
                }
            } else if(diseaseCounts[4].count == 1) {
                this.setState({
                    disease: diseaseCounts[4].text,
                    text: 'El paciente tiene bajas probabilidades de padecer',
                    alias: diseaseCounts[4].value
                }) 
            }
        }
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
                                            {this.state.text}{' '}{this.state.disease}
                                        </Segment>
                                    </Grid.Column>
                                </Grid.Row>
                                { (this.state.text !== 'No hay información suficiente para poder brindar un diagnóstico')? 
                                 <React.Fragment>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Button primary fluid onClick={() => this.props.history.push(`/informacion/${this.state.alias}`)}>Acerca de la enfermedad</Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Button primary fluid onClick={() => this.props.history.push(`/tratamiento/${this.state.alias}`)}>Tratamiento</Button>
                                            <br/><br/><br/>
                                        </Grid.Column>
                                    </Grid.Row>
                                </React.Fragment>
                                 : null
                                }
                                <br/>
                                <br/>
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

export default connect(
    mapSate,
    null
)(Results)