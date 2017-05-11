import React, {Component} from 'react';

class ColorBlock extends Component{ // Abstract class

    constructor(props) { 
        super();
        if (new.target === ColorBlock) {
            throw new TypeError("Cannot construct ColorBlock instances directly");
        }
        if (this.renderContent === undefined) {
            throw new TypeError("Must override renderContent");
        }
        if (this.getColor === undefined) {
            throw new TypeError("Must override getColor");
        }
    };

    render(){
        return (
            <div style={{backgroundColor:this.getColor(), zIndex:'-2'}}>
                {(this.renderBackground !== undefined)? this.renderBackground():""}
                <div style={{
                        minWidth:'50em',
                        maxWidth:'60em',
                        margin:'1em auto'
                        }}>
                    {this.renderContent()}
                </div>
            </div>
        );
    }

}
export default ColorBlock;
