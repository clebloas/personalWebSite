import React, {Component} from 'react';
import style from './Formation.css';

class Formation extends Component{
    
    render(){
        return (
            <div className={style.block}>
                <div className={style.content}>
                    <div>
                        <span className={style.date}>{this.props.obtentionDate}</span>
                        <span className={style.school}>{this.props.school}</span>
                    </div>
                    <div className={style.title}>{this.props.title}</div>
                </div>
                <div className={style.iconeBox}>
                    <a href={this.props.link} >
                        <img alt={this.props.school} src={this.props.logo} className={style.logo}/>
                    </a>
                </div>
            </div>
        );
    }
}

export default Formation;