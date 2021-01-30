import react from 'react';
import ScrollToTop from '../scrolltotop/scrolltotop'
import './footer.scss'
export const Footer = (props) => {
    return (
        <div className="footer__class">
            <div id="contact-wave" class="css-12m8vx3 ehoxvtz0">
                <svg viewBox="0 0 1695 57" preserveAspectRatio="none">
                    <path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z" fill="rgba(255,255,255,1)" fill-rule="evenodd"></path>
                </svg>
            </div>
            <div className="footer__content">
                <p> Created by : Nandish</p>
                <p> Using React Framework @2020</p>
           </div>
           
           
          <ScrollToTop />  
        </div>
    )
}