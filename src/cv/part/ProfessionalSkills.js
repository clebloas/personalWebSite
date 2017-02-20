import React, {Component} from 'react';
import MainBlock from './MainBlock';
class ProfessionnalSkills extends Component {
    render() {
    var listeStyle = {
      padding:'1em 2em 1em 2em',
      display:'flex',
      flexFlow:'row wrap',
      justifyContent: 'space-around',
      width:'100%',
    }
    var comps=[
        {type:'Java', eval:'80%'},
        {type:'Spring', eval:'70%'},
        {type:'Javascript', eval:'40%'},
        {type:'Intégration continue', eval:'80%'}
    ];
        return (
        <div style={{marginTop:'4em'}}>
                <div style={{fontSize:'2em', color:'#657A84', textAlign:'center'}}>Compétences professionnelles</div>
                <MainBlock >
                    <div style={listeStyle}>
                    {comps.map((comp, index) => 
                        <div key={index} style={{width:'40%', margin:'1em 2em 1em 1em'}}>
                            <div style={{marginBottom:'0.3em'}}>{comp.type}</div>
                            <div style={{backgroundColor:'#ffcdd2', margin:'auto', height:'0.3em', width:'100%'}}>
                                <div style={{backgroundColor:'#c62828', height:'0.3em', width:comp.eval}}/>
                            </div>
                        </div>
                    )}
                    </div>
                </MainBlock>
        </div>);
    }
}

export default ProfessionnalSkills;