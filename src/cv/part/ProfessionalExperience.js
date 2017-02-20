import React, {Component} from 'react';
import MainBlock from './MainBlock'
class ProfessionnalExperience extends Component {
    render() {


        return (
            <div style={{
                marginTop: '4em'
            }}>
                <div
                    style={{
                    fontSize: '2em',
                    color: '#657A84',
                    textAlign: 'center'
                }}>Expériences professionnelles</div>
                <MainBlock ></MainBlock>
            </div>
        );
        /*
        return (
            <div id="professionalExperience">
                {this
                    .props
                    .expProfessionals
                    .map((expPro, index) => <div key={index}>
                        <Card>
                            <CardTitle
                                title={expPro.companyName}
                                subtitle={expPro.role + " " + expPro.startDate + "-" + expPro.endDate}/>
                            <CardText>
                                <div className="mission">{expPro.mission}</div>
                                <div className="environnementTechnique">{expPro.environnementTechnique}</div>
                            </CardText>
                        </Card>
                    </div>)}
            </div>
        );*/
    }
}

export default ProfessionnalExperience;