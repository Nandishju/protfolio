import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { contactUs } from './data/data';
import './contact.scss'
import { PhoneOutlined,MailOutlined,HomeOutlined, GithubOutlined } from '@ant-design/icons';
 
const AnyReactComponent = ({ text }) => 
<div  style={{
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
      lat: 59.95,
      lng: 30.33
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
                <h2>Contact Us</h2>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '100vh', width: '100%' }} className="container map">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div class="contact_info">
                  <div class="info_item">
                    <HomeOutlined className="ant__icons"></HomeOutlined>
                    <h6>{contactUs.address1}</h6>
                      <p>{contactUs.address2}</p>
                  </div>
                  <div className="info_item">
                    <PhoneOutlined className="ant__icons"></PhoneOutlined>
                    <h6><a href="#">{contactUs.phoneno}</a></h6>
                    <p>{contactUs.time}</p>
                  </div>
                  <div className="info_item">
                    <MailOutlined className="ant__icons"></MailOutlined>
                    <h6><a href="#">{contactUs.email}</a></h6>
                    <p>{contactUs.content}</p>
                  </div>
                  <div className="info_item">
                    <GithubOutlined  className="ant__icons"></GithubOutlined>
                    <h6><a href="#">{contactUs.gitHub}</a></h6>
                    <p>Please Check my GitHub</p>
                  </div>
              </div>
            </div>
            <div className="col-lg-3">
              123
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Contact;