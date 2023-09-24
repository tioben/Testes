import React from 'react';

export default function Footer(props) {
  return (
    <footer id="footer" className="footer">
      <div className="footer-social">
        <div className="footer-profile-picture">
          <a href="https://github.com/tioben" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          <span className="footer-circle-spin"></span>
        </div>
        <div className="footer-profile-picture">
          <a href="https://www.linkedin.com/in/gustavo-martins-211669159/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <span className="footer-circle-spin"></span>
        </div>
        <div className="footer-profile-picture">
          <a href="https://www.instagram.com/tioben_gh/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <span className="footer-circle-spin"></span>
        </div>
      </div>
      <div className="footer-contact">
        <a href="tel:+5511931507860" className="contact-icon"><i className="fas fa-phone"></i> +55 11 93150-7860</a>
        <a href="mailto:tioben@outlook.com.br" className="contact-icon"><i className="fas fa-envelope"></i> tioben@outlook.com.br</a>
      </div>
    </footer>
  );
}
