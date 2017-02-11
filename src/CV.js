import React, { Component } from 'react';
import logo from './logo.svg';
import './CV.css';

import cvDatas from './mycv.json';

class CV extends Component {
  render() {
  console.log(cvDatas);
    var expProfessionals = cvDatas.professionalExperiences;
    var formations = cvDatas.formations;
    var skills = cvDatas.skillsAndLang;
    var personnalActivities = cvDatas.personnalActivities;
    return (
      <div className="CV">
        <div className="globalInformations">
          <img src={logo} className="App-logo" alt="logo"/>
          <div id="fullname">
            <span id="firstname">{cvDatas.globalInformations.firstname} </span>
            <span id="lastname">{cvDatas.globalInformations.lastname}</span>
          </div>
          <div id="adress">{cvDatas.globalInformations.address}</div>
          <div id="mobile">{cvDatas.globalInformations.mobile}</div>
          <div id="dateOfBirth">{cvDatas.globalInformations.dateOfBirth}</div>
          <div id="complementaryInfo">{cvDatas.globalInformations.complementaryInformation}</div>
        </div>
        <div class="title">
          <div id="mainTitle">{cvDatas.title}</div>
          <div id="secondaryTitle">{cvDatas.title2}</div>
        </div>
        <div id="professionalExperience">
          {expProfessionals.map((expPro, index) => 
           
            <div key={index}>
              <div class="professionalExperience">{expPro.companyName}</div>
              <div class="role">{expPro.role}</div>
              <div class="dateRange"><span class="startDate">{expPro.startDate}</span><span class="endDate">{expPro.endDate}</span></div>
              <div class="mission">{expPro.mission}</div>
              <div class="environnementTechnique">{expPro.environnementTechnique}</div>
            </div>
          )}
        </div>
        <div id="formations">
          {formations.map((formation, index) =>
            <div key={index}>
              <div class="formationTitle">{formation.title}</div>
              <div class="dateRange"><span class="startDate">{formation.startDate}</span><span class="endDate">{formation.endDate}</span></div>
              <div class="school">{formation.school}</div>
              <div class="city">{formation.city}</div>
            </div>
          )}
        </div>
        <div id="skillsAndLang">
          {skills.map((skill, index) => 
            <div key={index}>
              <div class="categoryName">{skill.categoryName}</div>
              <div class="skillDescription">{skill.skills}</div>
            </div>
          )}
        </div>
        <div id="personnalActivities">
          {personnalActivities.map((activity, index) => 
            <div key={index}>
              <div class="activityTitle">{activity.title}</div>
              <div class="activityDescription">{activity.description}</div>
              <div class="url">{activity.url}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CV;
