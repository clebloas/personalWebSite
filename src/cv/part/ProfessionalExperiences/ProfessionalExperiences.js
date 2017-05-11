import React from 'react';
import ProfessionnalExperience from './ProfessionalExperience';
import style from './ProfessionalExperiences.css';
import ColorBlock from '../ColorBlock/ColorBlock';
import Title from '../Title/Title';

class ProfessionnalExperiences extends ColorBlock {
    getColor(){
        return 'white';
    }
    renderContent() {
        return (
            <div style={{marginTop: '4em'}}>
                <Title value='Expériences professionnelles'/>
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