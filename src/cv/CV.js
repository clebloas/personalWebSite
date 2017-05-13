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
<<<<<<< 4f24d9495b8977843937d8c9baf819b84782f67f
  constructor(props){
    super(props);
    this.state={activeContentId:"default"};
    this.handleChangeContent=this.handleChangeContent.bind(this);
  }
=======
>>>>>>> ajout d'un menu
  renderContentList(){
    var expProfessionals = cvDatas.professionalExperiences;
    var formations = cvDatas.formations;
    return(
<<<<<<< 4f24d9495b8977843937d8c9baf819b84782f67f
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
    this.contentList=this.renderContentList();
=======
          <List activeId='item_GlobalInfo'
           items={[
            <GlobalInfo 
              key='item_GlobalInfo'
              globalInformations={cvDatas.globalInformations}
              title={cvDatas.title}/>,
            <Description 
              key='item_Description'
              description={cvDatas.description}/>,
            <ProfessionalSkills
              key='item_ProfessionalSkills'/>,
            <ProfessionalExperiences
              expProfessionals={expProfessionals}
              key='item_ProfessionalExperiences'/>,
            <Formations 
              formations={formations}
              key='item_Formations'/>]}/>
    );
  }

  render() {
    var contentList=this.renderContentList();
>>>>>>> ajout d'un menu
    return (
    <div>
      <div className={style.menu}>
        <div className={style.menuContent}>
<<<<<<< 4f24d9495b8977843937d8c9baf819b84782f67f
          <Menu onChangeContentId={this.handleChangeContent} />
=======
          <Menu list={contentList}/>
>>>>>>> ajout d'un menu
        </div>
      </div>
     
      <div className={style.main} >
        <div className={style.content}>
<<<<<<< 4f24d9495b8977843937d8c9baf819b84782f67f
          {this.contentList}
=======
          {contentList}
>>>>>>> ajout d'un menu
        </div>
      </div>
    </div>
    );
  }
}

export default CV;
