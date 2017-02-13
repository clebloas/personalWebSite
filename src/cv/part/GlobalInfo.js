import React, {Component} from 'react';

import Linkedin from './logos/linkedin.svg';
import Github from './logos/github.svg';
import Facebook from './logos/facebook.svg';
import style from './css/GlobalInfo.css';

class GlobalInfo extends Component {
  calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  
  render() {
    var globalInfo = this.props.globalInformations;
    var contentList=[
      {type:'Age', cont:this.calculateAge(globalInfo.dateOfBirth)},
      {type:'Mobile', cont:globalInfo.mobile},
      {type:'Email', cont:globalInfo.email},
      {type:'Adresse', cont:globalInfo.address},
      {type:'Permis', cont:globalInfo.complementaryInformation},
      {type:'Regions', cont:globalInfo.regions},
    ]

    return (
      <div className={style.mainBlockStyle}>
        <div className={style.marginBlock}>
          <img alt="My self" src="./moiLowResolution.jpg" className={style.imgCss}/>
          <div style={{marginLeft:'2em', flex:'auto'}}>
            <div className={style.descriptionBloc}>
              <div style={{fontSize:'1.8em'}}><span style={{fontWeight:'bolder'}}>{globalInfo.firstname + " " + globalInfo.lastname}</span></div>
              <div style={{fontSize:'1.4em'}}>{this.props.title}</div>
            </div>
            <div>
              <ul className={style.listInfo}>
                {contentList.map((element, index) => 
                     <li key={index} className={style.listInfoItem}><span className={style.contTypeStyle}>{element.type}</span><span className={style.contStyle}>{element.cont}</span></li>
                  )}
              </ul>
            </div>
          </div>
        </div>
        
        <div className={style.footer}>
          <a className={style.icone} href="https://www.linkedin.com/in/christopher-le-bloas-b3b49465/"><Linkedin height='2em' width='2em'/></a>
          <a className={style.icone} href="https://github.com/clebloas"><Github height='2em' width='2em'/></a>
          <a className={style.icone} href="https://www.facebook.com/clebloas"><Facebook height='2em' width='2em'/></a>
        </div>
      </div>
    )
  }
};

export default GlobalInfo;