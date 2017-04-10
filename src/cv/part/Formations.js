import React, {Component} from 'react';
import Formation from './Formation';

class Formations extends Component {
    render() {
        return (
            <div id="formations">
                {this
                    .props
                    .formations
                    .map((formation, index) =>
                     <Formation key={index}
                            title={formation.title}
                            date={formation.startDate + "-" + formation.endDate}
                            school={formation.school}
                            city={formation.city} />)}
            </div>
        );
    }
}
export default Formations;