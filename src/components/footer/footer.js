import {
    FacebookFilled,
    HeartOutlined,
    Html5Filled, InstagramFilled, LinkedinFilled
} from '@ant-design/icons';
import react from 'react';
import { aboutMe } from '../data/data';
import ScrollToTop from '../scrolltotop/scrolltotop'
import './footer.scss'
export const Footer = () => {
    return (
        <div className="footer__class">
            <div id="contact-wave" class="css-12m8vx3 ehoxvtz0">
                <svg viewBox="0 0 1695 57" preserveAspectRatio="none">
                    <path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z" fill="rgba(255,255,255,1)" fill-rule="evenodd"></path>
                </svg>
            </div>
            <div className="footer__content">
                <div className="container" style={{ boxShadow: "none" }}>
                    <div className="row">
                        <div className="col-lg-4 f_widget ab_widget">
                            <div class="f_title">
                                <h4 style={{ textAlign: "left" }}>Get in touch!</h4>
                            </div>
                            <p style={{ textAlign: "left", fontSize: "13px" }}>
                                Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,the more you succeed.</p>
                            <p>
                                Copyright © 2021 All rights reserved | This template is made with <HeartOutlined></HeartOutlined> by <a href={aboutMe.linkedIn} target="_blank">{aboutMe.name}</a>
                            </p>

                        </div>
                        <div className="col-lg-4">
                            <aside class="f_widget social_widget">
                                <div class="f_title">
                                    <h4>Technologies</h4>
                                </div>
                                <p>Know About Technologies</p>
                                <ul class="list">
                                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">
                                        <Html5Filled></Html5Filled>
                                    </a></li>
                                    <li><a href="https://www.facebook.com/">
                                        <FacebookFilled style={{ color: "#fff" }}></FacebookFilled>
                                    </a></li>
                                    <li><a href="https://www.instagram.com/">
                                        <InstagramFilled style={{ color: "#fff" }}></InstagramFilled>
                                    </a></li>

                                </ul>
                            </aside>
                            {/* <p> Created Using React Framework</p> */}
                        </div>
                        <div class="col-lg-4">
                            <aside class="f_widget social_widget">
                                <div class="f_title">
                                    <h4>Follow Me</h4>
                                </div>
                                <p>Let us be social</p>
                                <ul class="list">
                                    <li><a href={aboutMe.linkedIn} target="blank">
                                        <LinkedinFilled style={{ color: "#fff" }}></LinkedinFilled>
                                    </a></li>
                                    <li><a href={aboutMe.facebook} target="blank">
                                        <FacebookFilled style={{ color: "#fff" }}></FacebookFilled>
                                    </a></li>
                                    <li><a href={aboutMe.insta} target="blank">
                                        <InstagramFilled style={{ color: "#fff" }}></InstagramFilled>
                                    </a></li>

                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTop />
        </div>
    )
}