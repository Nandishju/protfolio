import react from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { CalendarOutlined,PhoneOutlined,MailOutlined,HomeOutlined } from '@ant-design/icons';


export const Blogs = (props)=>{
    return(
    <div>
        <Container className="container__blog">
          <Row>
            <Col>
            <Image
              width={1000}
              height={64}
              className="mr-3"
              src="https://lh3.googleusercontent.com/ogw/ADGmqu92m5Qbp84BFU_dzG-GJOD6zmsAd2xRiRQ1sae-=s192-c-mo"
              alt="Generic placeholder"
            />
            </Col>
            <Col>
              <p>HELLO EVERYBODY, I AM</p>
              <h1>Nandish J U</h1>
              <p> UI DEVELOPER</p>
              <p>You will begin to realise why this exercise is called the Dickens Pattern (with reference to the ghost showing Scrooge some different futures)</p>
              <ul className="list basic_info">
                <li>
                  <a href="#"><CalendarOutlined />
                  <span className="ul__list__content">31st December, 1992</span></a>
                </li>
                <li>
                  <a href="#"><PhoneOutlined /> 
                  <span className="ul__list__content">44 (012) 6954 783</span></a>
                </li>
                <li>
                  <a href="#"><MailOutlined />
                  <span className="ul__list__content">businessplan</span></a>
                </li>
                <li>
                  <a href="#"><HomeOutlined />
                  <span className="ul__list__content">Santa monica bullevard</span></a>
                </li>
              </ul>
              
            </Col>
          </Row>
        </Container>
    </div>
)
}