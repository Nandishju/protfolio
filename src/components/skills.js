import react from 'react';
require('./skills.scss');
const skillsData = [{
  "name": "HTML",
  "classWord": "html",
  "rating": "90%"
},
{
  "name": "Css",
  "classWord": "css",
  "rating": "70%"
}, {
  "name": "Javascript",
  "classWord": "js",
  "rating": "70%"
},
{
  "name": "React",
  "classWord": "react",
  "rating": "80%"
},
{
  "name": "Redux",
  "classWord": "redux",
  "rating": "50%"
}]
export const Skills = (props) => {
  return (<div className="skills-page">
    <div className="content">
      <h1>My Skills</h1>
      {skillsData.map(item => {
        return (<><h4>{item.name}</h4>
          <div className="skill-container">
            <div className={`skills ${item.classWord}`}>{item.rating}
            </div>
          </div>
        </>)
      })}
    </div>
  </div>)
}