import React, {Component} from 'react';

class ProfessionnalExperience extends Component {
    render() {

        var mainBlockStyle = {
            boxShadow: '0em 0em 0.5em #000000',
            backgroundColor: 'white',
            marginTop: '2em',
            padding: '1em 2em 1em 2em',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-around'
        }

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
                <div style={mainBlockStyle}></div>
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