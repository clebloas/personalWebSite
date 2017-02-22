import React, {Component} from 'react';
import MainBlockStyle from './css/common/MainBlock.css';

class MainBlock extends Component {
    getHeaderClass(){
        if(this.props.showHeader){
            return MainBlockStyle.header;
        }
        return ;
    }
     getFooterClass(){
        if(this.props.showFooter){
            return MainBlockStyle.footer;
        }
        return ;
    }

    render(){
        return (
            <div className={MainBlockStyle.mainBlockStyle}>
                <div className={this.getHeaderClass()}>{this.props.header}</div>

                <div className={MainBlockStyle.marginBlock}>
                    {this.props.children}
                </div>
                
                <div className={this.getFooterClass()}>{this.props.footer}</div>
            </div>
        );
    }
}

export default MainBlock;