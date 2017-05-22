import React         from 'react';
import Formation from './Formation';
import ColorBlock from '../ColorBlock/ColorBlock';
import Title from '../Title/Title';
import ShadowBox from '../ShadowBox/ShadowBox.js';
import style from './style.css';

class Formations extends ColorBlock {
    renderContent() {
        return (
            <ShadowBox>
                <Title iconeName="graduation-cap" value="Formations"/>
                <div className={style.content}>
                    {this
                        .props
                        .formations
                        .map((formation, index) =>
                        <Formation key={index}
                                title={formation.title}
                                obtention={formation.startDate + "-" + formation.endDate}
                                school={formation.school}
                                city={formation.city}
                                obtentionDate={formation.obtentionDate}
                                logo={formation.logo}
                                link={formation.link}
                                />)}
                </div>
            </ShadowBox>
        );
    }
}
export default Formations;