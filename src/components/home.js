import react from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { CalendarOutlined, PhoneOutlined, MailOutlined, HomeOutlined, GithubOutlined,FacebookFilled,InstagramFilled, LinkedinFilled } from '@ant-design/icons';
import { aboutMe } from '../components/data/data';
import './home.scss'

export const Home = (props) => {
    return (
        <div className="min_height_Xpx">
            <Container className="container__blog">
                <Row>
                    <Col>
                        <Image
                            width={1000}
                            height={64}
                            className="mr-3"
                            src={aboutMe.myImg}
                            alt="Generic placeholder"
                        />
                    </Col>
                    <Col>
                        <p>Hello everybody, I am</p>
                        <h1>{aboutMe.name}</h1>
                        <p> {aboutMe.role}</p>
                        <p>{aboutMe.notes}</p>
                        <ul className="list basic_info">
                            <li>
                                <a href="#">
                                    <CalendarOutlined />
                                    <span className="ul__list__content">{aboutMe.dob}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <PhoneOutlined />
                                    <span className="ul__list__content">{aboutMe.phoneNum}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <MailOutlined />
                                    <span className="ul__list__content">{aboutMe.mail}</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <HomeOutlined />
                                    <span className="ul__list__content">{aboutMe.currentLoc}</span>
                                </a>
                            </li>
                            <li>
                                <a href={aboutMe.gitHub}>
                                    <GithubOutlined />
                                    <span className="ul__list__content">{aboutMe.gitHub}</span>
                                </a>
                            </li>
                        </ul>
                        <ul class="list personal_social">
                        <li>
                                <a href="#">
                                    <LinkedinFilled className="linkedin_color" title="LinkedIn"></LinkedinFilled>
                                </a>
                            </li>
                            <li>
                                <a href="#" title="Facebook"><FacebookFilled style={{color: 'rgb(24, 119, 242)' }}  className="facebook_color"/></a>
                            </li>
                            <li>
                                <a href="#" title="Instagram"><InstagramFilled className="insta_color" /></a>
                            </li>
                           
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}