import React, {Component} from 'react';
import Formation from './Formation';

class Formations extends Component {
    render() {
        return (
            <div style={{marginTop: '4em'}}>
                <div style={{fontSize: '2em',color: '#657A84',textAlign: 'center'}}>Formations</div>
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