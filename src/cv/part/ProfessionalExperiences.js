import React, {Component} from 'react';
import ProfessionnalExperience from './ProfessionalExperience';
import style from './css/ProfessionalExperiences.css';

class ProfessionnalExperiences extends Component {
    render() {
        return (
            <div style={{marginTop: '4em'}}>
                <div style={{fontSize: '2em',color: '#657A84',textAlign: 'center'}}>Expériences professionnelles</div>
                <div className={style.organizer}>
                {this.props.expProfessionals.map((expPro, index) => 
                    <ProfessionnalExperience key={index}
                        companyName={expPro.companyName}
                        role={expPro.role}
                        startDate={expPro.startDate}
                        endDate={expPro.endDate}
                        mission={expPro.mission}
                        environnementTechnique={expPro.environnementTechnique}
                        logo={expPro.logo}
                            />)}
                </div>
            </div>
        );
    }
}

export default ProfessionnalExperiences;