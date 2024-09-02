import GithubIcon from '../assets/github-icon.svg'

export default function Contact() {
    return  (
        <div id="contact" className='background.gradient'>
            <div className="center fade-in">
                <div className="hover-text">
                    <span className='primary-color contact-text hover' onClick={() => {navigator.clipboard.writeText('ry.jcjohnston@gmail.com')}}>CONTACT ME</span>
                </div>
                <div className="email-prompt">Click to copy my email to your clipboard<span className='accent-color'>.</span></div>
            </div>
            <div className="footer">
                <a href='https://github.com/RyJohnston' className='hover-effect hover' target='_blank'>
                    <img src={GithubIcon} className='github-icon' />
                </a>
                <div className="name">Ryan</div>
                <div className="header-date">@ 2024</div>
            </div>
        </div>
    );
};