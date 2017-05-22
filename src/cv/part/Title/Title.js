import React from 'react';
import style from'./style.css';
import FontAwesome from 'react-fontawesome';

class Title extends React.Component{
    render(){
        return (
        <div className={style.title}>
                <FontAwesome className={style.icone} name={this.props.iconeName} size='2x' />
                <span>{this.props.value}</span>
        </div>);
    }
}
export default Title;
