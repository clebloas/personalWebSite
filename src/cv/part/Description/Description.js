import React from 'react';
import ColorBlock from '../ColorBlock/ColorBlock';
import style from './style.css';
class Description extends ColorBlock{
    getColor(){
        return 'white';
    }

    renderContent(){
        return(
            <div className={style.content}>{this.props.description}</div>
        );
    }
}

export default Description;
