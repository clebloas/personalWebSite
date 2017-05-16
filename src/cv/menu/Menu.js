import React, {Component} from 'react';

import style from './style.css';
import gridview from '../gridview.css'
class Menu extends Component{
    
    handleClick(item, test){
        this.props.onChangeContentId(item.target.id);
    }

    handleMouseOver(item){
        this.props.onMouseOver(item.target.id);
    }

    render(){
        return (
            <div className={gridview.row}>
                <div className={style.menu}>
                    <ul>
                        {this.props.list.map((content, index) => 
                            <li id={content.props.id}
                                key={index}
                                onMouseOver={this.handleMouseOver.bind(this)}
                                onClick={this.handleClick.bind(this)}>
                                {content.props.menu_text}
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default Menu;