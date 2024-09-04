import './homepage-about.css';

export default function About() {
    return  (
        <div id='about'>
            <div id='about-title-section'>
                <div className="scroll-wrapper under">
                    <div className="scroll-text">
                        <span>GET TO KNOW ME &nbsp;&nbsp;GET TO KNOW ME &nbsp;&nbsp;GET TO KNOW ME &nbsp;&nbsp;GET TO KNOW ME &nbsp;&nbsp;</span>
                        <span>GET TO KNOW ME &nbsp;&nbsp;GET TO KNOW ME |&nbsp;&nbsp;GET TO KNOW ME &nbsp;&nbsp;GET TO KNOW ME &nbsp;&nbsp;</span>
                    </div>
                </div>
                <div className='content over'>
                    <div className='section-title hz-section-title title fade-in' id='about-title'>ABOUT<span className='accent-color'>.</span></div>
                    <div className='inside-content fade-in'>
                        <p>
                        From an early interest in animation, my passion for creating grew into a love for coding and game development. What started as a desire to bring my own video games to life led me to take my first programming class in high school. I was immediately captivated by the world of software development, which motivated me to pursue a degree in computing.
                        </p><p>
                        While studying at university, I gained a solid foundation in computer science and enhanced my skills in design through a variety of classes. Now, as a commercial software developer, I continue to combine my technical expertise with my creative interests. Alongside my professional work, I'm actively developing my own game and exploring graphic design projects, always driven to blend creativity with technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};