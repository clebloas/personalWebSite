import React, {Component} from 'react';
import style from './css/ProfessionalExperience.css';

class ProfessionalExperience extends Component {
    getHeader(){
        return (
            <div className={style.header}>
                <div>
                    <span className={style.companyName}>{this.props.companyName}</span>
                    <span className={style.role}>{this.props.role}</span>
                    <span className={style.date}><span>{this.props.startDate}</span><span>{this.props.endDate}</span></span>
                </div>
            </div>
        );
    }
    getFooter(){
        return (
            <div className={style.footer}><div>{this.props.environnementTechnique}</div></div>
        );
    }
    getBody(){
        return (<ul className={style.liste}>{this.props.mission.split('|').map((task,index) => {
                return (<li key={index}>{task}</li>);
            })
        }</ul>);
    }
    render(){
        return (
            <div className={style.shadowBlock}>
                {this.getHeader()}
                {this.getBody()}
                {this.getFooter()}
            </div>
        );
    }
}

export default ProfessionalExperience;