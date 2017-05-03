import React, {Component} from 'react';
import style from './css/ProfessionalExperience.css';

class ProfessionalExperience extends Component {
    getHeader(){
        return (
            <div className={style.header}>
                <div>
                    <div className={style.datecompany}>
                        <div className={style.date}>{this.props.startDate}/{this.props.endDate}</div>
                        <div className={style.companyName}>{this.props.companyName}</div>
                    </div>
                    <div className={style.role}>{this.props.role}</div>
                </div>
                <img alt={this.props.school} src={this.props.logo} className={style.logo}/>
            </div>
        );
    }
    getEnvironment(){
        return (
            <div className={style.environment}><div>{this.props.environnementTechnique}</div></div>
        );
    }

    getContent(){
        return (
            <ul className={style.liste}>
                    {this.props.mission.split('|').map((task,index) => {
                        return (<li key={index}>{task}</li>);
                    })}
            </ul>)
    }

    render(){
        return (
            <div className={style.shadowBlock}>
                {this.getHeader()}
                {this.getContent()}
                {this.getEnvironment()}
            </div>
        );
    }
}

export default ProfessionalExperience;