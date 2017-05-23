import React, {Component} from 'react';
import GlobalInfo from './part/GlobalInfo/GlobalInfo';
import ProfessionalExperiences from './part/ProfessionalExperiences/ProfessionalExperiences';
import Formations from './part/Formations/Formations';
import Description from './part/Description/Description';
import cvDatas from '../mycv.json';
import './fonts.css';
import style from './style.css';
import List from './list/List';

import gridview from './gridview.css';

class CV extends Component {
  createContentList(){
    var expProfessionals = cvDatas.professionalExperiences;
    var formations = cvDatas.formations;
    return [
            <Description 
              key='item_Description'
              description={cvDatas.description}/>,
            <ProfessionalExperiences
              expProfessionals={expProfessionals}
              key='item_ProfessionalExperiences'/>,
            <Formations 
              formations={formations}
              key='item_Formations'/>
    ];
  }

  renderContentList(contentList){
    return(
          <List>
            {contentList}
          </List>
    );
  }

  render() {
    var contentList=this.createContentList();
    this.contentContainer=this.renderContentList(contentList);
    return (
    <div className={style.body}>
     <div className={gridview.colM4+ " "+ gridview.col3}>
      <GlobalInfo 
        globalInformations={cvDatas.globalInformations}
        menu_text='Général'
        title={cvDatas.title}/>
      </div>
     
      <div className={gridview.colM7+ " "+ gridview.col7} >
        <div className={style.content}>
          {this.contentContainer}
        </div>
      </div>
    </div>
    );
  }
}

export default CV;
