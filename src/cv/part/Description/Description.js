import React from 'react';
import ColorBlock from '../ColorBlock/ColorBlock';

class Description extends ColorBlock{
    getColor(){
        return 'white';
    }

    renderContent(){
        var mainBlockStyle = {
            fontSize:'1.5em',
            textAlign:'center',
            color:'black'
        }
        return(
            <div style={mainBlockStyle}>{this.props.description}</div>
        );
    }
}

export default Description;
