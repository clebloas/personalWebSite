import React from 'react';
import ColorBlock from '../ColorBlock/ColorBlock';
import style from './style.css';
import FontAwesome from 'react-fontawesome';

class ProfessionnalSkills extends ColorBlock {
    renderContent() {
        var comps=[
            {type:'Java', eval:'80%'},
            {type:'Spring', eval:'70%'},
            {type:'JavaScript', eval:'40%'},
            {type:'Intégration continue', eval:'80%'}
        ];
        return (
            <div>
                <div className={style.content}>
                    <div className={style.title}>
                        <FontAwesome className={style.icone} name='cogs' size='lg' />
                        <span className={style.titleName}>Compétences</span>
                    </div>
                {comps.map((comp, index) => 
                    <div key={index} className={style.skill}>
                        <div className={style.skillName}>{comp.type}</div>
                        <div className={style.barBox}>
                            <div style={{width:comp.eval}}>{comp.eval}</div>
                        </div>
                    </div>
                )}
                </div>
            </div>);
    }
}

export default ProfessionnalSkills;