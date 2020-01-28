import React,{ Component} from 'react';
import Exeperince from './Exeperince';
import Project from './Project';
import Skills from './Skills';
import Education from './Education';
import Language from './Language'; 
import './App.css';
import resume from './resume.json';

class App extends Component {
 
  readerExperinces(){
    let resultsArray =[];
  resume.experiences.map((item, i)=>{
     resultsArray.push(<Exeperince item={item} key={i}/>);
  });
  return resultsArray;

  }
  renderProject(){
    let resultsArray =[];
    resume.projects.map((item, i)=>{
       resultsArray.push(<Project item={item} key={i}/>);
    });
    return resultsArray;
    
  }
  renderSkills(){
    let resultsArray =[];
    resume.skills.map((item, i)=>{
       resultsArray.push(<Skills item={item} key={i}/>);
    });
    return resultsArray;
    
  }
  renderEducation(){
    let resultsArray =[];
    resume.education.map((item, i)=>{
       resultsArray.push(<Education item={item} key={i}/>);
    });
    return resultsArray;
    
  }
  Language(){
    let resultsArray =[];
    resume.languages.map((item, i)=>{
       resultsArray.push(<Language item={item} key={i}/>);
    });
    return resultsArray;
  }
  renderInterest(){
    let resultsArray =[];
    resume.interests.map((item, i)=>{
    resultsArray.push(<li key={i}>{item}</li>);
    });
    return resultsArray;
  }
  render(){
return (
  <div className="wrapper">
      <div className="sidebar-wrapper">
          <div className="profile-container">
              <img style={{width:'50px', height:'50px'}} className="profile" src={resume.image} alt="" />
              <h1 className="name">{resume.name}</h1>
              <h3 className="tagline">Full Stack Developer</h3>
          </div>
          
          <div className="contact-container container-block">
              <ul className="list-unstyled contact-list">
<li className="email"><i className="fas fa-envelope"></i><a href="mailto: yourname@email.com">{resume.email}</a></li>
<li className="phone"><i className="fas fa-phone"></i><a href="tel:0123 456 789">{resume.phone}</a></li>
                  <li className="website"><i className="fas fa-globe"></i><a href={resume.website} target="_blank">{resume.website}</a></li>
<li className="linkedin"><i className="fab fa-linkedin-in"></i><a href={resume.linkinUR} target="_blank">{resume.linkin}</a></li>
<li className="github"><i className="fab fa-github"></i><a href={resume.githubURL} target="_blank">{resume.github}</a></li>
<li className="twitter"><i className="fab fa-twitter"></i><a href={resume.twitterURL} target="_blank">{resume.twitter}</a></li>
              </ul>
          </div>
          <div className="education-container container-block">
              <h2 className="container-block-title">Education</h2>
              {this.renderEducation()}
            
          </div>
          
          <div className="languages-container container-block">
              <h2 className="container-block-title">Languages</h2>
              <ul className="list-unstyled interests-list">
              {this.Language()}
             </ul>
          </div>
          
          <div className="interests-container container-block">
              <h2 className="container-block-title">Interests</h2>
              <ul className="list-unstyled interests-list">
                {this.renderInterest()}
              </ul>
          </div>
          
      </div>
      
      <div className="main-wrapper">
          
          <section className="section summary-section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-user"></i></span>Career Profile</h2>
              <div className="summary">
                  <p>Summarise your career here lorem ipsum dolor sit amet, consectetuer adipiscing elit. You can <a href="mttp://reachcomp.top" target="_blank">download this resume/CV here</a>. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.</p>
              </div>
          </section>
          
          <section className="section experiences-section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-briefcase"></i></span>Experiences</h2>
              {this.readerExperinces()}

          </section>
          
          <section className="section projects-section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-archive"></i></span>Projects</h2>
              <div className="intro">
                  <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
              </div>
              {this.renderProject()}
          </section>
          
          <section className="skills-section section">
              <h2 className="section-title"><span className="icon-holder"><i className="fas fa-rocket"></i></span>Skills &amp; Proficiency</h2>
              <div className="skillset"> 
               {this.renderSkills()}     
                  
              </div>  
          </section>
          
      </div>
  </div>
  );
  }
}

export default App;
