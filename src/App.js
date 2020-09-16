import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';
import { Container, Row, Col, Card, CardBody, CardHeader, Button } from 'reactstrap';
import avatar1 from "./assets/img/avatars/myAvatar_1.png";
import avatar2 from "./assets/img/avatars/myAvatar_2.png";
import avatar3 from "./assets/img/avatars/myAvatar_3.png";
import avatar4 from "./assets/img/avatars/myAvatar_4.png";
import laravelIcon from "./assets/img/icons/laravel.png";
import reactIcon from "./assets/img/icons/react.png";
import javaIcon from "./assets/img/icons/java.png";
import jsIcon from "./assets/img/icons/js.png";
import androidIcon from "./assets/img/icons/android.png";
import htmlIcon from "./assets/img/icons/html.png";
import angularIcon from "./assets/img/icons/angular.png";
import ionicIcon from "./assets/img/icons/ionic.png";
import gitIcon from "./assets/img/icons/git.png";
import firebaseIcon from "./assets/img/icons/firebase.png";
import dockerIcon from "./assets/img/icons/docker.png";
import cssIcon from "./assets/img/icons/css.png";
import facebookIcon from "./assets/img/icons/facebook.png";
import twitterIcon from "./assets/img/icons/twitter.png";
import linkedinIcon from "./assets/img/icons/linkedin.png";
import instagramIcon from "./assets/img/icons/instagram.png";
import WorkHistory from './components/WorkHistory';
import FeaturedProjects from './components/FeaturedProjects';
import Typewriter from 'typewriter-effect/dist/core';
import { AiOutlineArrowRight } from "react-icons/ai";
import Navbar from './components/Navbar';
import Particles from 'react-particles-js';
import * as Scroll from 'react-scroll';

var { Link, Element, Events, scrollSpy } = Scroll

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIcon: 0,
      stacks: [
        {
          name: "Laravel",
          icon: laravelIcon,
          desc: "I fell in love with Laravel in 2018 and since then, I've applied my knowledge of this awesome framework to building an awesome collection of APIs and web apps."
        },
        {
          name: "React JS & Native",
          icon: reactIcon,
          desc: "My love for react and how it makes a programmer's life a whole lot easier when building web and mobile apps can never be over emphasized."
        },
        {
          name: "Java",
          icon: javaIcon,
          desc: "I've learned a lot working on a good number of JAVA projects including servelets."
        },
        {
          name: "Node JS",
          icon: jsIcon,
          desc: "This is one runtime environment that I'm fascinated by, its rise in the programming sphere was jaw-dropping, and now it's taking over, if you ask me."
        },
        {
          name: "Android",
          icon: androidIcon,
          desc: "Building native Android applications has always been on my todo list. Imagine my excietment when I built my first native Android app. -I smiled all day my lips were almost touching my ears. :)"
        },
        {
          name: "HTML 5",
          icon: htmlIcon,
          desc: "I remember the very first webpage I built back then... It wasn't as pretty but I was so proud of myself, I showed it to every one of my course mates in class."
        },
        {
          name: "Angular",
          icon: angularIcon,
          desc: "The concept of SPAs, two-way data binding, dependency injection was highly appreciated when I learned Angular."
        },
        {
          name: "Ionic",
          icon: ionicIcon,
          desc: "I got introduced to Ionic through a friend and I wasn't disappointed. I was intrigued by the fact that I was able to build cross-platform apps with my knowledge of web development."
        },
        {
          name: "Git Version Control",
          icon: gitIcon,
          desc: "During the early stages of my career, Version control seemed like a daunting concept, but after taking a course on it, it has since then become a part of me."
        },
        {
          name: "CSS",
          icon: cssIcon,
          desc: "I am all about the UI/UX of an app, and that would be incomplete without CSS. My exposure to it has drastically changed the entire look of my apps."
        },
        {
          name: "Firebase",
          icon: firebaseIcon,
          desc: "This is one cloud service that I love so much, mostly because of their ease-of-use, efficiency and seamless integration."
        },
        {
          name: "Docker",
          icon: dockerIcon,
          desc: "Using Docker has given me a whole new perspective and insight into deploying applications"
        }
      ]
    }
  }

  componentDidMount() {
    this.loopIcons();
    Events.scrollEvent.register('begin', function (to, element) {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function (to, element) {
      console.log('end', arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  loopIcons() {
    const index = this.state.activeIcon;
    this.setState({ activeIcon: index })
    let stack = this.state.stacks[index];
    if (!stack) return;
    new Typewriter('#typewriter', {
      strings: stack.desc,
      autoStart: true,
    })
      .deleteAll()
      .pauseFor(1500)
      .callFunction(() => {
        if (this.state.activeIcon > this.state.stacks.length) return;
        this.setState({ activeIcon: index + 1 }, () => this.loopIcons())
      });
  }

  render() {
    return (
      <div className="m-0  bg-grey-deep">
        <Navbar />
        <section className="mt-5">
          <Element name="home">
            <Row>
              <Col md={12} className="hero m-0 p-0">
                <Row className="overlay m-0 aligner-container">
                  <Col md={5} className="h-100 p-5 justify-center" style={{ flexDirection: "column" }}>
                    <div>
                      <p className="white-text mb-0 fa-2x" style={{ fontSize: 30, fontFamily: "monospace", fontWeight: 'bold' }}>Hey, I'm Efezino</p>
                    </div>
                    <div className="py-2">
                      <h4 className="white-ic font-weight-bold" style={{ fontSize: 55 }}>Full Stack<br /><span className="info-text">Developer</span></h4>
                      {this.state.stacks.map((stack, index) => (<img onClick={() => this.setState({ activeIcon: index }, () => this.loopIcons())} key={index} src={stack.icon} title={stack.name} alt={`${stack.name} icon`} className={`clickable icon-image ${this.state.activeIcon == index && 'animated bounce infinite'}`} />))}
                    </div>
                  </Col>
                  <Col md={7} style={{ height: '100%' }} className="p-md-5 aligner-container">
                    <Card style={{ background: `rgba(66, 66, 66, 0.31)`, color: '#fff', width: '100%', minHeight: '300px' }}>
                      <CardBody>
                        <CardHeader className="shadow-none border-0 fa-2x">
                          {this.state.activeIcon < this.state.stacks.length &&
                            <>
                              <img src={this.state.stacks[this.state.activeIcon].icon} className={`icon-image`} />
                              <span>{this.state.stacks[this.state.activeIcon].name}</span>
                            </>
                          }
                        </CardHeader>
                        <span id="typewriter" style={{ fontSize: 30 }}></span>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Element>
        </section>
        <section className="py-5 align-center" style={{ backgroundColor: '#010101' }}>
          <Element name="aboutMe">
            <img src={avatar4} className="avatar-image" />
            <h3 className="white-text font-weight-bold my-4">About Me</h3>
            <div className="paragraph white-text col-md-6 mx-auto">
              I am Efezino Ukpowe, but you can call me Zino. I am a confident, highly organized, and dedicated individual who has very good communication
              skills and can easily adapt to situations, is excellent at decision making and performing tasks
              efficiently with minimum supervision. I am a result-driven and goal-oriented person who thinks
              proactively and sees problems as a motivation and strives to find lasting solutions.
          </div>
          </Element>
        </section>
        <section className="bg-dark-pattern-1 pt-5">
          {/* <Particles
            params={{
              particles: {
                line_linked: {
                  color: '#c75b52'
                }
              }
            }}
            style={{
              width: '100%',
              height: '60%'
              // backgroundImage: `url(${logo})`
            }}
          /> */}
          <Element name="history">
            <WorkHistory />
          </Element>
        </section>
        <section className="py-5 align-center hidden-sm">
          <Element name="projects">
            <img src={avatar1} className="avatar-image mt-3 mr-n3" style={{ width: 80, height: 80 }} />
            <img src={avatar3} className="avatar-image" style={{ zIndex: 3 }} />
            <img src={avatar2} className="avatar-image mt-3 ml-n3" style={{ width: 80, height: 80 }} />
            <h3 className="white-text font-weight-bold my-4">Here are some of my projects</h3>
            <FeaturedProjects
              setCurrentProject={(project) => this.setState({ currentProject: project })}
            />
            {this.state.currentProject &&
              <div className="w-100" style={{ position: "absolute", marginTop: 160 }}>
                {this.state.currentProject.logo &&
                  <div>
                    <img src={this.state.currentProject.logo} style={this.state.currentProject.logoStyle} />
                  </div>
                }
                <a className="btn btn-grey btn-sm" href={this.state.currentProject.link} target="_blank">{this.state.currentProject.title} <AiOutlineArrowRight /></a>
              </div>
            }
          </Element>
        </section>
        <section className="bg-dark-pattern-1 pt-5" style={{ height: 400 }} />
        {/* <section className="bg-dark-pattern-2 pt-5" style={{ height: 200 }} /> */}
        <div className="p-2 p-md-4 bg-grey-deep">
          <Element name="contact">
            <Row>
              <Col md={3} className="mx-auto align-center">
                <a href="https://facebook.com/ukpowe" target="_blank"><img className="icon-image" src={facebookIcon} /></a>
                <a href="https://instagram.com/zheeno_rocks" target="_blank"><img className="icon-image" src={instagramIcon} /></a>
                <a href="https://twitter.com/zheeno_rocks" target="_blank"><img className="icon-image" src={twitterIcon} /></a>
                <a href="https://linkedin.com/in/efezino-ukpowe" target="_blank"><img className="icon-image" src={linkedinIcon} /></a>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mx-auto align-center py-md-4">
                <p className="white-text">Feel free to put a call through or send me a mail</p>
                <p className="m-0 white-text font-weight-bold clickable"><a href="tel:+2348147757475">+234-814 775 7475</a></p>
                <p className="m-0 white-text font-weight-bold clickable"><a href="tel:+2348179144067">+234-817 914 4067</a></p>
                <p className="m-0 white-text font-weight-bold clickable"><a href="mailto:efezinoukpowe@gmail.com">efezinoukpowe@gmail.com</a></p>
              </Col>
            </Row>
          </Element>
        </div>
      </div >
    );
  }
}

export default App;
