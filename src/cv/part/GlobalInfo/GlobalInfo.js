import React from 'react';

import Linkedin from './logos/linkedin.svg';
import Github from './logos/github.svg';
import Facebook from './logos/facebook.svg';
import style from './style.css';
import ShadowBox from '../ShadowBox/ShadowBox';
import ColorBlock from '../ColorBlock/ColorBlock';


class GlobalInfo extends ColorBlock {
  calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  obscurate(string){
    return string
      .replace('@', '[at]')
      .replace(/\./g,'[dot]')
      .replace(/0/g,'[O]');
  }
  
  getColor(){
    return 'transparent';
  }
  
  
  renderContent() {
    var globalInfo = this.props.globalInformations;
    var contentList=[
      {type:'Age', cont:this.calculateAge(globalInfo.dateOfBirth)},
      {type:'Mobile', cont:this.obscurate(globalInfo.mobile)},
      {type:'Email', cont:this.obscurate(globalInfo.email)},
      {type:'Adresse', cont:globalInfo.address},
      {type:'Permis', cont:globalInfo.complementaryInformation},
      {type:'Regions', cont:globalInfo.regions},
    ];

    return (
      <div>
        
        <ShadowBox showFooter='true' footer={(
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
          )}>
            <div className={style.leftPart}>
              <img alt="My self" src="./moiLowResolution.jpg" className={style.imgCss}/>
            </div>
            <div className={style.rightPart}>
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
                        <span className={style.contTypeStyle}>{element.type}</span>
                        <span className={style.contStyle}>{element.cont}</span>
                      </li>
                    )}
                </ul>
              </div>
            </div>
        </ShadowBox>
      </div>
    );
  }
};

export default GlobalInfo;