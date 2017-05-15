import React, {Component} from 'react';
import style from './style.css';
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
            <div className={style.fade} >
                {(this.renderBackground !== undefined)? this.renderBackground():""}
                <div>
                    {this.renderContent()}
                </div>
            </div>
        );
    }

}
export default ColorBlock;
