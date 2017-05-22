import React, {Component} from 'react';
import GlobalInfo from './part/GlobalInfo/GlobalInfo';
//import Title from './part/Title';
import ProfessionalExperiences from './part/ProfessionalExperiences/ProfessionalExperiences';
import ProfessionalSkills from './part/ProfessionalSkills/ProfessionalSkills';
import Formations from './part/Formations/Formations';
//import Skills from './part/Skills';
//import PersonalActivities from './part/PersonalActivities'
import Description from './part/Description/Description';
import cvDatas from '../mycv.json';
import './fonts.css';
import Menu from './menu/Menu';
import style from './style.css';
import List from './list/List';

class CV extends Component {

  constructor(props){
    super(props);
    this.state={activeContentId:"default", focusContentId:'default'};
    this.handleChangeContent=this.handleChangeContent.bind(this);
    this.handleFocusContent=this.handleFocusContent.bind(this);
  }


  createContentList(){
    var expProfessionals = cvDatas.professionalExperiences;
    var formations = cvDatas.formations;
    return [
            <Description 
              id='item_Description'
              key='item_Description'
              menu_text='Description'
              description={cvDatas.description}
              focusContentId={this.state.focusContentId}/>,
            <ProfessionalSkills
              id='item_ProfessionalSkills'
              key='item_ProfessionalSkills'
              menu_text='Compétences'
              focusContentId={this.state.focusContentId}/>,
            <ProfessionalExperiences
              id='item_ProfessionalExperiences'
              expProfessionals={expProfessionals}
              key='item_ProfessionalExperiences'
              menu_text='Expériences'
              focusContentId={this.state.focusContentId}/>,
            <Formations 
              id='item_Formations'
              formations={formations}
              key='item_Formations'
              menu_text='Formations'
              focusContentId={this.state.focusContentId}/>
    ];
  }

  renderContentList(contentList){
    return(
          <List activeContentId={this.state.activeContentId}>
            {contentList}
          </List>
    );
  }

  handleChangeContent(contentId){
    this.setState({activeContentId: contentId});
  }

  handleFocusContent(contentId){
    this.setState({focusContentId: contentId});
  }

  render() {
    var contentList=this.createContentList();
    this.contentContainer=this.renderContentList(contentList);
    return (
    <div>
     <div className={style.globalInfo}>
      <GlobalInfo 
        globalInformations={cvDatas.globalInformations}
        menu_text='Général'
        title={cvDatas.title}/>
      </div>  
      {/*<div className={style.menu}>
        <div className={style.menuContent}>
          <Menu onChangeContentId={this.handleChangeContent} 
            onMouseOver={this.handleFocusContent} 
            list={contentList.concat([{props:{id:'default', menu_text:'Tout montrer'}}])}/>
        </div>
      </div>*/}
     
      <div className={style.main} >
        <div className={style.content}>
          {this.contentContainer}
        </div>
      </div>
    </div>
    );
  }
}

export default CV;
