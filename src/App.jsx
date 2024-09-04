import './App.css'
import Menu from './components/menu'
import gsap from 'gsap' 
import Header from './sections/homepage-header/homepageHeader'
import About from './sections/homepage-about/homepageAbout'
import Career from './sections/homepageCareer'
import Contact from './sections/homepageContact'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);


function App() {
  const root = useRef();
  let body = gsap.utils.selector('body');

  useEffect(() => {
    // Cursor Animation
    window.addEventListener('mousemove', (e) => {
      gsap.to(body('.cursor__ball--big'), { 
        duration:1,
        ease: 'power3',
        x: e.pageX - 24,
        y: e.pageY - 25,
        overwrite: 'auto',
      });
      gsap.to(body('.cursor__ball--small'), { 
        duration: 0.2,
        ease: 'power3',
        x: e.pageX - 14 ,
        y: e.pageY - 20,
        overwrite: 'auto',
      });
    });

    // Menu Hover Animation
    const hoverables = document.querySelectorAll('.hover');
    const hoverAnimation = gsap.timeline({ paused: true }).to(body('.cursor__ball--big'), {
      scale: 4,
      duration: 0.3
    });
    hoverables.forEach((item) => {
      item.addEventListener('mouseenter', () => hoverAnimation.play());
      item.addEventListener('mouseleave', () => hoverAnimation.reverse());
    });


    // Hover Menu Animation
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
      const tl = gsap.timeline({ paused: true }).to(item.querySelector('a'), {
        y: -18,
        scale: 1.2,
        rotation: 3,
        duration: 0.2,
      });
      item.addEventListener('mouseenter', () => tl.play());
      item.addEventListener('mouseleave', () => tl.reverse());
    });


    // Gradient BG Animation
    let bg1 = 'linear-gradient(30deg, rgba(252,239,212,1) 0%, rgba(229,245,206,1) 49%, rgba(239,250,232,1) 86%)';
    let bg2 = 'linear-gradient(247deg, rgba(252,239,212,1) 0%, rgba(229,245,206,1) 49%, rgba(239,250,232,1) 86%)';
    gsap.timeline({repeat:-1, yoyo:"true", repeatDelay:0})
      .add(gsap.set("body", { height: '200dvh', width: '100dvw', background: bg1 }))
      .add(gsap.to("body", {ease: "none", duration: 10, background: bg2}))
      .play(0);

    // Scroll Animations
    const jobs = gsap.utils.toArray('.job-container');
    jobs.forEach(job => {
      gsap.to(job, {
        opacity: 0,
        scrollTrigger: {
          start: 'top 5%',
          trigger: job,
          scrub: true,
        }
      });
    });

    // Contact Me Hover Animation
    const contact = document.querySelector('.contact-text');
    const contactAnimation = gsap.timeline({ paused: true }).to('.email-prompt', {
      opacity: 1,
      duration: 0.3
    }).to('.hover-text', {
      scale: 1.1,
      rotation: -3,
      duration: 0.5,
    });
    contact.addEventListener('mouseenter', () => contactAnimation.play());
    contact.addEventListener('mouseleave', () => contactAnimation.reverse());


    // Contact Me Click
    const contactClick = gsap.timeline({ paused: true }).to('.contact-text', {
      color: '#7fb069',
      duration: 0.1
    }).to('.contact-text', {
      color: '#3c5a14',
      duration: 4
    });
    contact.addEventListener('click', () => {
      contactClick.play(0);
    });
    
    // Fade in Titles
    gsap.utils.toArray('.fade-in').forEach((section, i) => {
      gsap.to(section, {
        opacity: 1,
        duration: 1.4,
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom",
          end: "+=100",
          toggleActions: "play none none none"
        }
      });
    });
  });

  return (
    <div>
      <div className="cursor">
        <div className="cursor__ball cursor__ball--big">
          <svg height="30" width="30">
            <circle cx="15" cy="15" r="12" strokeWidth="0"></circle>
          </svg>
        </div>
        <div className="cursor__ball cursor__ball--small">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" strokeWidth="2"></circle>
          </svg>
        </div>
      </div>
      <div className="bg"></div>
      <Menu />
      <Header />
      <About className='section' />
      <Career className='section' />
      <Contact className='section' />
    </div>
  )
}

export default App
