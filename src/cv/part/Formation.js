import React, {Component} from 'react';
import style from './css/Formation.css';

class Formation extends Component{
    getHeader(){
    return (
            <div className={style.header}>
                <div>
                    <span className={style.school}>{this.props.school}</span>
                    <span className={style.title}>{this.props.title}</span>
                    <span className={style.date}>{this.props.obtentionDate}</span>
                </div>
            </div>
        );
    }
    getBody(){
        return (
        <ul className={style.liste}>{
            //this.props.mission.split('|').map((task,index) => (<li key={index}>{task}</li>))
        }
        </ul>);
    }
    render(){
        return (
            <div className={style.shadowBlock}>
                {this.getHeader()}
                {this.getBody()}
            </div>
        );
    }
}

export default Formation;