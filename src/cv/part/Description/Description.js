import React from 'react';
import style from './style.css';
import Title from '../Title/Title.js';
class Description extends React.Component{
    render(){
        return(
            <div className={style.global}>
                <Title iconeName='quote-right' />
                <div className={style.content}>{this.props.description}</div>
            </div>
        );
    }
}

export default Description;
