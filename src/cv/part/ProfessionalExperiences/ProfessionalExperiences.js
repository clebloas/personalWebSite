import React from 'react';
import ProfessionnalExperience from './ProfessionalExperience';
import style from './ProfessionalExperiences.css';
import Title from '../Title/Title';
import ShadowBox from '../ShadowBox/ShadowBox';
import FontAwesome from 'react-fontawesome';

class ProfessionnalExperiences extends React.Component {
    constructor(props){
        super(props);
        this.state = {showAll:false};
        this.showAllHandler = this.showAllHandler.bind(this);
    }
    componentDidMount(){
        this.state = {showAll:false};
    }

    getExperiencesToShow(){
        return this.state.showAll ? this.props.expProfessionals : this.props.expProfessionals.slice(0,4);
    }

    showAllHandler(){
        this.setState({showAll:!this.state.showAll});
    }

    getChevronIconName(){
        if(this.state.showAll)
            return 'chevron-up';
        else
            return 'chevron-down';
    }

    render() {
        return (
            <ShadowBox>
                <Title iconeName='flask' value='Expériences'/>
                <div className={style.organizer}>
                    <div>
                        {this.props.expProfessionals.slice(0,4).map((expPro, index) => 
                            <ProfessionnalExperience key={index}
                                companyName={expPro.companyName}
                                role={expPro.role}
                                startDate={expPro.startDate}
                                endDate={expPro.endDate}
                                mission={expPro.mission}
                                environnementTechnique={expPro.environnementTechnique}
                                logo={expPro.logo}
                                    />)}
                    </div>
                    <div className={this.state.showAll?style.extra + " "+ style.extra:style.extra + " "+ style.collapse}>
                        {this.props.expProfessionals.slice(4,).map((expPro, index) => 
                            <ProfessionnalExperience key={index}
                                companyName={expPro.companyName}
                                role={expPro.role}
                                startDate={expPro.startDate}
                                endDate={expPro.endDate}
                                mission={expPro.mission}
                                environnementTechnique={expPro.environnementTechnique}
                                logo={expPro.logo}
                                    />)}
                    </div>
                </div>
                <div onClick={this.showAllHandler}><FontAwesome className={style.chevron} name={this.getChevronIconName()} size='lg' /></div>
            </ShadowBox>
        );
    }
}

export default ProfessionnalExperiences;