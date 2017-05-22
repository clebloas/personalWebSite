import React from 'react';
import ProfessionnalExperience from './ProfessionalExperience';
import style from './ProfessionalExperiences.css';
import ColorBlock from '../ColorBlock/ColorBlock';
import Title from '../Title/Title';
import ShadowBox from '../ShadowBox/ShadowBox';

class ProfessionnalExperiences extends ColorBlock {
    renderContent() {
        return (
            <ShadowBox>
                <Title iconeName='briefcase' value='Expériences'/>
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
            </ShadowBox>
        );
    }
}

export default ProfessionnalExperiences;