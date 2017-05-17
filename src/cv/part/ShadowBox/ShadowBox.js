import React, {Component} from 'react';
import style from './style.css';

class MainBlock extends Component {
    getHeaderClass(){
        if(this.props.showHeader){
            return style.header;
        }
        return ;
    }
     getFooterClass(){
        if(this.props.showFooter){
            return style.footer;
        }
        return ;
    }

    render(){
        return (
            <div className={style.shadowBox}>
                <div className={this.getHeaderClass()}>{this.props.header}</div>

                <div className={style.marginBlock}>
                    {this.props.children}
                </div>
                
                <div className={this.getFooterClass()}>{this.props.footer}</div>
            </div>
        );
    }
}

export default MainBlock;