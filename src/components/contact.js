import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { aboutMe } from './data/data';
import './contact.scss'
import { PhoneOutlined, MailOutlined, HomeOutlined, GithubOutlined } from '@ant-design/icons';

const AnyReactComponent = ({ text }) =>
  <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>{text}</div>;

export class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 27.2046,
      lng: 77.4977
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div>
        <div className="box_1620">
          <div className="banner_inner d-flex align-items-center">
            <div className="container">
              <div className="banner_content text-center">
                <h2>Contact Me</h2>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '100vh', width: '100%' }} className="container map">
      {false && <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={27.2046}
              lng={77.4977}
              text="I am here"
            />
          </GoogleMapReact>
      }
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div class="contact_info">
                <div class="info_item">
                  <HomeOutlined className="ant__icons"></HomeOutlined>
                  <h6>{aboutMe.address1}</h6>
                  <p>{aboutMe.address2}</p>
                </div>
                <div className="info_item">
                  <PhoneOutlined className="ant__icons"></PhoneOutlined>
                  <h6><a href="#">{aboutMe.phoneno}</a></h6>
                  <p>{aboutMe.time}</p>
                </div>
                <div className="info_item">
                  <MailOutlined className="ant__icons"></MailOutlined>
                  <h6><a href="#">{aboutMe.mail}</a></h6>
                  <p>{aboutMe.content}</p>
                </div>
                <div className="info_item">
                  <GithubOutlined className="ant__icons"></GithubOutlined>
                  <h6><a href="#">{aboutMe.gitHub}</a></h6>
                  <p>Check my GitHub here!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
