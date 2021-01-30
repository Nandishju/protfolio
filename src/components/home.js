import react from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { CalendarOutlined, PhoneOutlined, MailOutlined, HomeOutlined } from '@ant-design/icons';
import { aboutMe } from '../components/data/data'

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
                        <ul class="list basic_info">
                            <li>
                                <a href="#"><CalendarOutlined />
                                    <span className="ul__list__content">{aboutMe.dob}</span></a>
                            </li>
                            <li>
                                <a href="#"><PhoneOutlined />
                                    <span className="ul__list__content">{aboutMe.phoneNum}</span></a>
                            </li>
                            <li>
                                <a href="#"><MailOutlined />
                                    <span className="ul__list__content">{aboutMe.mail}</span></a>
                            </li>
                            <li>
                                <a href="#"><HomeOutlined />
                                    <span className="ul__list__content">{aboutMe.currentLoc}</span></a>
                            </li>
                        </ul>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}