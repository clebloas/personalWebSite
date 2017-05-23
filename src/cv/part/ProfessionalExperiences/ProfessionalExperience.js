import React, {Component} from 'react';
import style from './ProfessionalExperience.css';
import FontAwesome from 'react-fontawesome';

class ProfessionalExperience extends Component {
    formatDate(mmyyyy){
        return new Date(mmyyyy).toLocaleDateString("fr-FR", {month:'long', year:'numeric'});
    }

    getHeader(){
        var isActual=this.props.endDate==="Actuel";
        
        return (
            <div className={style.header}>
                <div className={style.rolecompany}>
                    <span className={style.role}>{this.props.role}</span>
                    <FontAwesome className={style.atIcon} name='at' size='lg' />
                    <span className={style.companyName}>{this.props.companyName}</span>
                </div>
                <div className={style.dateBloc}>
                    <FontAwesome className={style.calendarIcon} name='calendar' size='lg' />
                    <span>
                        <span className={style.date}>{this.formatDate(this.props.startDate)}</span>
                        <FontAwesome className={style.dateDelimitor} name='arrows-h' size='lg' />
                        <span className={isActual?style.actual + ' ' + style.date:style.date}>{isActual?this.props.endDate:this.formatDate(this.props.endDate)}</span>
                    </span>
                </div>
            </div>
        );
    }
    getEnvironment(){
        if(this.props.environnementTechnique === undefined){
            return ;
        }
        return (
            <div className={style.environment}>
                {this.props.environnementTechnique
                    .map( (techno, index) => <span key={index}>{techno}</span>)}
            </div>
        );
    }

    getContent(){
        return (
            <ul className={style.liste}>
                    {this.props.mission.map((task,index) => {
                        return (<li key={index}>{task.trim()}</li>);
                    })}
            </ul>)
    }

    render(){
        return (
            <div className={style.block}>
                <div>
                    {this.getHeader()}
                    {this.getContent()}
                    {this.getEnvironment()}
                </div>
                <div className={style.logo}>
                    {/*<img alt={this.props.school} src={this.props.logo}/>*/}
                </div>
            </div>
        );
    }
}

export default ProfessionalExperience;