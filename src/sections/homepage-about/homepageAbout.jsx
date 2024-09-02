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
                        <p className='about-text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra malesuada dictum. Fusce vel augue vel nibh tempor vestibulum non et magna. Quisque pulvinar ac nibh ac imperdiet. Donec at urna eu urna porttitor tempor id ac justo. In eu nunc neque. Nullam vehicula dui ut pretium luctus. Nunc convallis eleifend ipsum, at bibendum eros placerat sed. 
                        </p>
                        <p>
                        Aliquam ac eros ut sem lacinia aliquet id quis erat. Etiam pulvinar leo blandit nisl maximus, ac sagittis dui laoreet. Praesent pharetra imperdiet nunc, tempor malesuada sapien laoreet id. Nullam viverra neque sem, eu viverra purus lacinia at. Quisque dignissim tincidunt diam et hendrerit. Nulla facilisi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};