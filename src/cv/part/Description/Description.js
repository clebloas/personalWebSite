import React from 'react';
import ColorBlock from '../ColorBlock/ColorBlock';
import style from './style.css';
class Description extends ColorBlock{
    renderContent(){
        return(
            <div className={style.content}>{this.props.description}</div>
        );
    }
}

export default Description;
