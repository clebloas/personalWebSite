import React from 'react';
import ColorBlock from '../ColorBlock/ColorBlock';
import style from './style.css';
import Title from '../Title/Title.js';
class Description extends ColorBlock{
    renderContent(){
        return(
            <div className={style.global}>
                <Title iconeName='quote-right' />
                <div className={style.content}>{this.props.description}</div>
            </div>
        );
    }
}

export default Description;
