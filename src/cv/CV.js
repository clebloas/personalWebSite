import React, {Component} from 'react';
import GlobalInfo from './part/GlobalInfo';
//import Title from './part/Title';
import ProfessionalExperiences from './part/ProfessionalExperience';
import ProfessionalSkills from './part/ProfessionalSkills';
//import Formations from './part/Formations';
//import Skills from './part/Skills';
//import PersonalActivities from './part/PersonalActivities'
import Description from './part/Description';
import cvDatas from '../mycv.json';
import './fonts.css';

class CV extends Component {
  render() {
    var expProfessionals = cvDatas.professionalExperiences;
    //var formations = cvDatas.formations;
    //var skills = cvDatas.skillsAndLang;
    //var personnalActivities = cvDatas.personnalActivities;
    return (
    <div>
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
        </div>
      </div>
    );
  }
}

/*
        <Title title={cvDatas.title} title2={cvDatas.title2}/>
        <Formations formations={formations}/>
        <Skills skills={skills}/>
        <PersonalActivities personnalActivities={personnalActivities}/>

 */
export default CV;
