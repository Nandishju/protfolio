import react from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { skillsData, bdSkills, blSkils, misc } from '../components/data/data.js'
require('./skills.scss');
const generateBgColor = () => {
    const hashLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const generateSingle = () => hashLetters[Math.ceil(Math.random() * (hashLetters.length - 1))];
    let hashCode = "#";
    for (let i = 0; i < 6; i++) {
        hashCode = hashCode.concat(generateSingle())
    }
    return hashCode;

}
export const Skills = (props) => {
    const skillsDataSet = [{
        groupName: "Frontend",
        data: skillsData
    }, {
        groupName: "Database",
        data: bdSkills
    }, {
        groupName: "Business logic technologies",
        data: blSkils
    }]
    return (<div className="min_height_Xpx skills-page">
        <div className="content">
            <h1>My Skills</h1>
            <Container className="skils_container">
                <Row>
                    {false && skillsDataSet.map(skillGrp => {
                        return (<Col xs={12} sm={12} md={6} lg={4} className={"skills_grp"}>
                            <h3 className="border_btm_2p_solid_black">{skillGrp.groupName}</h3> {skillGrp.data.map(item => {
                                return (<div><h5>{item.name}</h5>
                                    <div className="skill-container">
                                        <div className={`skills`} style={{ width: `${item.rating}`, backgroundColor: `${generateBgColor()}` }}>
                                            {item.rating}
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </Col>
                        )
                    })
                    }
                    {skillsDataSet.map(skillGrp => {
                        return (<div className='skills_grp'>
                            <h3 className="border_btm_2p_solid_black">{skillGrp.groupName}</h3>
                            <div className='skills_flex_container '>
                                {skillGrp.data.map((item, index) => {
                                    return (<div className={`  skills_flex_item item_${index} skills`} style={{
                                        backgroundColor: `${generateBgColor()}`
                                    }} onClick={(e) => { alert('Comming soon') }}>
                                        {item.name}
                                    </div>)
                                })}
                            </div>
                        </div>)
                    })}
                </Row>
                <Row style={{ marginTop: '30px', marginLeft: "30px" }}>
                    <h5>Software process / Version control :</h5>
                    <div style={{
                        // width: "90%",
                        "margin": "0px 5px",
                        "textAlign": "center",
                        "display": "flex", " flexDirection": "row", "flexWrap": "wrap",
                        "justifyContent": "space-evenly",
                    }} >
                        {misc.map(x => (<div className="misc_skills">
                            {x.name}
                        </div>))}
                    </div>
                </Row>
            </Container>

        </div>
    </div>
    )
}