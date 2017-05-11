import React from 'react';

class Title extends React.Component{
    render(){
        return (
        <div style={{fontSize:'2em', color:'#657A84', textAlign:'center'}}>
            {this.props.value}
        </div>);
    }
}
export default Title;
