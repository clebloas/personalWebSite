import React, {Component} from 'react';

import style from './style.css';
import gridview from '../gridview.css'
class Menu extends Component{
    handleClick(item, test){
        console.log(item);
        this.props.list.setActiveId(item.target.id);
    }
    render(){
        var self = this;
        return (
            <div className={gridview.row}>
                <div className={style.menu}>
                    <ul>
                        <li id='item_ProfessionalSkills' onClick={self.handleClick}>
                            Compétences Professionelles
                        </li>
                        <li id='item_ProfessionalExperiences' onClick={self.handleClick}>
                            Expériences Professionelles
                        </li>
                        <li id='item_Formations' onClick={self.handleClick}>
                            Formations
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Menu;