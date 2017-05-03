import React, {Component} from 'react';
import GlobalInfo from './part/GlobalInfo';
//import Title from './part/Title';
import ProfessionalExperiences from './part/ProfessionalExperiences';
import ProfessionalSkills from './part/ProfessionalSkills';
import Formations from './part/Formations';
//import Skills from './part/Skills';
//import PersonalActivities from './part/PersonalActivities'
import Description from './part/Description';
import cvDatas from '../mycv.json';
import './fonts.css';

class CV extends Component {
  render() {
    var expProfessionals = cvDatas.professionalExperiences;
    var formations = cvDatas.formations;
    return (
    <div>
        <img src="https://vignette1.wikia.nocookie.net/eastenders/images/f/f6/Under-construction.png/revision/latest?cb=20141120185311" 
              alt="Page en cours de construction"
              height='200em'
              style={{
                position:'absolute',
                left:'5em',
                top:'2em',
                display:'block', 
                zIndex: '10'
              }}/>
        <div style={{left:'0', top:'0', width:'100%', height:'27em', backgroundColor:'#455A64', margin:'auto', position:'absolute', zIndex:'-1'}}/>
        <div style={{
          display:'flex',
          alignItems:'stretch',
          margin:'4em auto auto auto',
          minWidth:'50em',
          maxWidth:'60em',
          flexDirection:'column',
        }}>
          <GlobalInfo 
            globalInformations={cvDatas.globalInformations}
            title={cvDatas.title}/>
          <Description description={cvDatas.description}/>
          <ProfessionalSkills />
          <ProfessionalExperiences expProfessionals={expProfessionals}/>
          <Formations formations={formations}/>
        </div>
      </div>
    );
  }
}

export default CV;
