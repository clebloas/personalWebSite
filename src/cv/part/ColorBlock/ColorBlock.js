import React, {Component} from 'react';

class ColorBlock extends Component{ // Abstract class

    constructor(props) { 
        super();
        // if (new.target === ColorBlock) {
        //     throw new TypeError("Cannot construct ColorBlock instances directly");
        // }
        if (this.renderContent === undefined) {
            throw new TypeError("Must override renderContent");
        }
        if (this.getColor === undefined) {
            throw new TypeError("Must override getColor");
        }
    };

    render(){
        return (
            <div style={{backgroundColor:this.getColor()}}>
                {(this.renderBackground !== undefined)? this.renderBackground():""}
                <div>
                    {this.renderContent()}
                </div>
            </div>
        );
    }

}
export default ColorBlock;
