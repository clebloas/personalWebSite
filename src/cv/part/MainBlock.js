import React, {Component} from 'react';
import MainBlockStyle from './css/common/MainBlock.css';

class MainBlock extends Component {
    render(){
        return (
            <div className={MainBlockStyle.mainBlockStyle}>
                <div className={MainBlockStyle.header}>{this.props.header}</div>

                <div className={MainBlockStyle.marginBlock}>
                    {this.props.children}
                </div>
                
                <div className={MainBlockStyle.footer}>{this.props.footer}</div>
            </div>
        );
    }
}

export default MainBlock;