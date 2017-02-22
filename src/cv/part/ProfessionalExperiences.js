import React, {Component} from 'react';
import MainBlock from './MainBlock';
import ProfessionnalExperience from './ProfessionalExperience';

class ProfessionnalExperiences extends Component {
    render() {
        return (
            <div style={{marginTop: '4em'}}>
                <div style={{fontSize: '2em',color: '#657A84',textAlign: 'center'}}>Expériences professionnelles</div>
                <MainBlock showHeader='true' >
                    {this.props.expProfessionals.map((expPro, index) => 
                        <ProfessionnalExperience key={index}
                            companyName={expPro.companyName}
                            role={expPro.role}
                            startDate={expPro.startDate}
                            endDate={expPro.endDate}
                            mission={expPro.mission}
                            environnementTechnique={expPro.environnementTechnique}
                             />)}

                </MainBlock>
            </div>
        );
    }
}

export default ProfessionnalExperiences;