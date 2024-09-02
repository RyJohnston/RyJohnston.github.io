import Logo from '../assets/logo.png';

export default function Menu() {
    return (
        <div className='menu'>
            <img src={Logo} className='float-left' id='logo'/>
            <ul>
                <li className='menu-item hover'><a href="#contact">Contact</a></li>
                {/* <li className='menu-item'><a href="#career">Projects</a></li> */}
                <li className='menu-item hover'><a href="#career">Work</a></li>
                <li className='menu-item hover'><a href="#about">About</a></li>
            </ul>
        </div>
    );
}