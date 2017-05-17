import React from 'react';

import Linkedin from './logos/linkedin.svg';
import Github from './logos/github.svg';
import Facebook from './logos/facebook.svg';
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
      {type:'mobile', cont:this.obscurate(globalInfo.mobile)},
      {type:'envelope', cont:this.obscurate(globalInfo.email)},
      {type:'map-marker', cont:globalInfo.address},
      {type:'car', cont:globalInfo.complementaryInformation},
      {type:'building-o', cont:globalInfo.regions},
    ];

    return (
      <ShadowBox>
        <div className={style.global}>
            <div>
              <img alt="My self" src="./moiLowResolution.jpg" className={style.imgCss}/>
            </div>
            <div className={style.infos}>
              <div className={style.descriptionBloc}>
                <span className={style.names}>
                  {globalInfo.firstname + " " + globalInfo.lastname}
                </span>
                <div className={style.jobTitle}>{this.props.title}</div>
              </div>
              <div>
                <ul className={style.listInfo}>
                  {contentList.map((element, index) => 
                      <li key={index} className={style.listInfoItem}>
                        <FontAwesome className={style.contTypeStyle}
                          name={element.type} size='1x' />
                        <span className={style.contStyle}>{element.cont}</span>
                      </li>
                    )}
                </ul>
              </div>
            </div>
            <div className={style.icones}>
              <a className={style.iconeLink} href="https://www.linkedin.com/in/christopher-le-bloas-b3b49465/">
                <Linkedin height='2em' width='2em' />
              </a>
              <a className={style.iconeLink} href="https://github.com/clebloas">
                <Github height='2em' width='2em'/>
              </a>
              <a className={style.iconeLink} href="https://www.facebook.com/clebloas">
                <Facebook height='2em' width='2em'/>
              </a>
            </div>
          </div>
           
      </ShadowBox>
    );
  }
};

export default GlobalInfo;