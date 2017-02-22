import React, {Component} from 'react';

class ProfessionalExperience extends Component {
    render(){
        return (
            <div>
                <div>{this.props.companyName}</div>
                <div>{this.props.role}</div>
                <div><span>{this.props.startDate}</span><span>{this.props.endDate}</span></div>
                <div>{this.props.mission}</div>
                <div>{this.props.environnementTechnique}</div>
            </div>
        );
    }
}

export default ProfessionalExperience;