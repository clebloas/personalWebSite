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
    this.state={activeContentId:"default"};
    this.handleChangeContent=this.handleChangeContent.bind(this);
  }

  renderContentList(){
    var expProfessionals = cvDatas.professionalExperiences;
    var formations = cvDatas.formations;
    return(
          <List activeContentId={this.state.activeContentId}>
            <GlobalInfo 
              key='item_GlobalInfo'
              globalInformations={cvDatas.globalInformations}
              title={cvDatas.title}/>
            <Description 
              key='item_Description'
              description={cvDatas.description}/>
            <ProfessionalSkills
              key='item_ProfessionalSkills'/>
            <ProfessionalExperiences
              expProfessionals={expProfessionals}
              key='item_ProfessionalExperiences'/>
            <Formations 
              formations={formations}
              key='item_Formations'/>
          </List>
    );
  }

  handleChangeContent(contentId){
    this.setState({activeContentId: contentId});
  }

  render() {
    var contentList=this.renderContentList();
    return (
    <div>
      <div className={style.menu}>
        <div className={style.menuContent}>
          <Menu onChangeContentId={this.handleChangeContent} />
        </div>
      </div>
     
      <div className={style.main} >
        <div className={style.content}>
          {contentList}
        </div>
      </div>
    </div>
    );
  }
}

export default CV;
