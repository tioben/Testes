//Footer
export default function Footer(props) {
    return (
    <footer class="footer">
        <div class="footer-social">
            <div class="footer-profile-picture">
                <a href="https://github.com/tioben" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
                <span class="footer-circle-spin"></span>
            </div>
            <div class="footer-profile-picture">
                <a href="https://www.linkedin.com/in/seu-usuario-do-LinkedIn" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
                <span class="footer-circle-spin"></span>
            </div>
            <div class="footer-profile-picture">
                <a href="https://www.instagram.com/seu-usuario-do-Instagram" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
                <span class="footer-circle-spin"></span>
            </div>
            </div>
        <div class="footer-contact">
            <a href="tel:+5511931507860" class="contact-icon"><i class="fas fa-phone"></i> +55 11 93150-7860</a>
            <a href="mailto:tioben@outlook.com.br" class="contact-icon"><i class="fas fa-envelope"></i> tioben@outlook.com.br</a>
        </div>
    </footer>
    );
}