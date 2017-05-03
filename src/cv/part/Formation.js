import React, {Component} from 'react';
import style from './css/Formation.css';

class Formation extends Component{
    getIcon(){
        return (
            <a href={this.props.link} style={{ margin:'auto', display:'block'}}>
                <img alt={this.props.school} src={this.props.logo} className={style.logo}/>
            </a>
        );
    }

    render(){
        return (
            <div className={style.shadowBlock}>
                <div className={style.content}>
                    <div>
                        <span className={style.date}>{this.props.obtentionDate}</span>
                        <span className={style.school}>{this.props.school}</span>
                    </div>
                    <div className={style.title}>{this.props.title}</div>
                </div>
                <div style={{display:'flex'}} >{this.getIcon()}</div>
            </div>
        );
    }
}

export default Formation;