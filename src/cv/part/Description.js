import React, {Component} from 'react';


class Description extends Component{
    render(){
    var mainBlockStyle = {
      fontSize:'1.5em',
      marginTop:'2em',
      textAlign:'center'
    }
        return(
            <div style={mainBlockStyle}>{this.props.description}</div>
        );
    }
}

export default Description;



















