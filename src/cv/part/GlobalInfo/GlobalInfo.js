import React from 'react';

import style from './style.css';
import ShadowBox from '../ShadowBox/ShadowBox';
import ColorBlock from '../ColorBlock/ColorBlock';
import FontAwesome from 'react-fontawesome';


class GlobalInfo extends ColorBlock {
  calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  formatAge(age){
    return age + ' ans';
  }

  obscurate(string){
    return string
      .replace('@', '[at]')
      .replace(/\./g,'[dot]')
      .replace(/0/g,'[O]');
  }
  
  renderContent() {
    var globalInfo = this.props.globalInformations;
    var contentList=[
      {type:'birthday-cake', cont:this.formatAge(this.calculateAge(globalInfo.dateOfBirth))},
      {type:'phone', cont:this.obscurate(globalInfo.mobile)},
      {type:'envelope', cont:this.obscurate(globalInfo.email)},
      {type:'home', cont:globalInfo.address},
      {type:'car', cont:globalInfo.complementaryInformation},
      {type:'building-o', cont:globalInfo.regions},
    ];

    return (
      <ShadowBox>
        <div className={style.global}>
            <img alt="My self" src="./moiLowResolution.jpg" className={style.imgCss}/>
            <div className={style.infos}>
              <div className={style.descriptionBloc}>
                <span className={style.names}>
                  {globalInfo.firstname + " " + globalInfo.lastname}
                </span>
                <div className={style.jobTitle}>{this.props.title}</div>
              </div>
              <ul className={style.listInfo}>
                {contentList.map((element, index) => 
                    <li key={index} className={style.listInfoItem}>
                      <FontAwesome className={style.icone}
                        name={element.type} size='lg' />
                      <span className={style.contStyle}>{element.cont}</span>
                    </li>
                  )}
              </ul>
            </div>
            <div className={style.icones}>
              <a href="https://www.linkedin.com/in/christopher-le-bloas-b3b49465/">
                <FontAwesome className={style.icone} name='linkedin' size='2x' />
              </a>
              <a  href="https://github.com/clebloas">
                <FontAwesome className={style.icone} name='github' size='2x' />
              </a>
              <a href="https://www.facebook.com/clebloas">
                <FontAwesome className={style.icone} name='facebook' size='2x' />
              </a>
            </div>
          </div>
           
      </ShadowBox>
    );
  }
};

export default GlobalInfo;