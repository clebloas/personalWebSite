import React, {Component} from 'react';

import style from './style.css';
import gridview from '../gridview.css'
class Menu extends Component{
    
    handleClick(item, test){
        this.props.onChangeContentId(item.target.id);
    }

    render(){
        var self = this;
        return (
            <div className={gridview.row}>
                <div className={style.menu}>
                    <ul>
                        <li id='item_ProfessionalSkills' onClick={self.handleClick.bind(this)}>
                            Compétences Professionelles
                        </li>
                        <li id='item_ProfessionalExperiences' onClick={self.handleClick.bind(this)}>
                            Expériences Professionelles
                        </li>
                        <li id='item_Formations' onClick={self.handleClick.bind(this)}>
                            Formations
                        </li>
                        <li id='default' onClick={self.handleClick.bind(this)}>
                            Tout afficher
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Menu;