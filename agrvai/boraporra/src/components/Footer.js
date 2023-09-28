import React from 'react';

export default function Footer(props) {
  return (
    <footer id="footer" className="footer">
      <div className="footer-social">
        <div className="footer-profile-picture">
          <a href={props.git} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <span className="footer-circle-spin"></span>
        </div>
        <div className="footer-profile-picture">
          <a href={props.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <span className="footer-circle-spin"></span>
        </div>
        <div className="footer-profile-picture">
          <a href={props.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <span className="footer-circle-spin"></span>
        </div>
      </div>
      <div className="footer-contact">
      <a href={`tel: ${props.tel}`} className="contact-icon"><i className="fas fa-phone"></i>{props.tel}</a>
        <a href={`mailto: ${props.email}`} className="contact-icon"><i className="fas fa-envelope"></i>{props.email}</a>
      </div>
    </footer>
  );
}
