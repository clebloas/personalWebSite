import React from 'react';
import ShadowBox from '../ShadowBox/ShadowBox';
import ColorBlock from '../ColorBlock/ColorBlock';
import Title from '../Title/Title';
import style from './style.css';

class ProfessionnalSkills extends ColorBlock {
    renderContent() {
        var comps=[
            {type:'Java', eval:'80%'},
            {type:'Spring', eval:'70%'},
            {type:'JavaScript', eval:'40%'},
            {type:'Intégration continue', eval:'80%'}
        ];
        return (
            <ShadowBox>
                <Title iconeName='cogs' value='Compétences'/>
                <div className={style.content}>
                {comps.map((comp, index) => 
                    <div key={index} className={style.skill}>
                        <div className={style.skillName}>{comp.type}</div>
                        <div className={style.barBox}>
                            <div style={{width:comp.eval}}>{comp.eval}</div>
                        </div>
                    </div>
                )}
                </div>
            </ShadowBox>);
    }
}

export default ProfessionnalSkills;