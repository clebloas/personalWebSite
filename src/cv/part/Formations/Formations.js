import React         from 'react';
import Formation from './Formation';
import ColorBlock from '../ColorBlock/ColorBlock';
import Title from '../Title/Title';

class Formations extends ColorBlock {
    getColor(){
        return '#ffffff';
    }
    renderContent() {
        return (
            <div style={{marginTop: '4em'}}>
                <Title value="Formations"/>
                <div id="formations">
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
            </div>
        );
    }
}
export default Formations;