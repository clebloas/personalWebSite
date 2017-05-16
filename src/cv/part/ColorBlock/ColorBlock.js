import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ColorBlock extends Component{ // Abstract class

    constructor(props) { 
        super();
        // if (new.target === ColorBlock) {
        //     throw new TypeError("Cannot construct ColorBlock instances directly");
        // }
        if (this.renderContent === undefined) {
            throw new TypeError("Must override renderContent");
        }
    };

    render(){
        return (
            <div>
                {(this.renderBackground !== undefined)? this.renderBackground():""}
                <div>
                    {this.renderContent()}
                </div>
            </div>
        );
    }
    componentDidUpdate(){
        if(this.props.focusContentId===this.props.id){
            ReactDOM.findDOMNode(this).scrollIntoViewIfNeeded({behavior:'smooth', block:'start'});
        }
    }
}
export default ColorBlock;
