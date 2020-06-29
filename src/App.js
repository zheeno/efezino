import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';
import { Container, Row, Col } from 'reactstrap';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stacks: [
        {
          name: "Laravel",
          icon: laravelIcon,
          desc: ""
        },
        {
          name: "React",
          icon: reactIcon,
          desc: ""
        },
        {
          name: "Java",
          icon: javaIcon,
          desc: ""
        },
        {
          name: "Javascript",
          icon: jsIcon,
          desc: ""
        },
        {
          name: "Android",
          icon: androidIcon,
          desc: ""
        },
        {
          name: "HTML 5",
          icon: htmlIcon,
          desc: ""
        },
        {
          name: "Angular",
          icon: angularIcon,
          desc: ""
        },
        {
          name: "Ionic",
          icon: ionicIcon,
          desc: ""
        },
        {
          name: "Git Version Control",
          icon: gitIcon,
          desc: ""
        },
        {
          name: "CSS",
          icon: cssIcon,
          desc: ""
        },
        {
          name: "Firebase",
          icon: firebaseIcon,
          desc: ""
        },
        {
          name: "Docker",
          icon: dockerIcon,
          desc: ""
        }
      ]
    }
  }

  render() {
    return (
      <div className="m-0">
        <section>
          <Row>
            <Col md={12} className="hero m-0 p-0">
              <Row className="overlay m-0">
                <Col md={5} className="h-100 p-5 justify-center" style={{ flexDirection: "column" }}>
                  <div>
                    <h3 className="white-text font-weight-light mb-0">Hi,<br />I am Efezino</h3>
                  </div>
                  <div className="py-2">
                    <p className="white-text fa-2x">and I&apos;m a full stack developer</p>
                    {this.state.stacks.map((stack, index) => (<img key={index} src={stack.icon} title={stack.name} alt={`${stack.name} icon`} className="icon-image" />))}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
        <section className="py-5 align-center">
          <img src={avatar4} className="avatar-image" />
          <h3 className="white-text font-weight-bold my-4">Meet Efezino</h3>
          <div className="paragraph white-text col-md-6 mx-auto">
            I am a confident, highly organized, and dedicated individual who has very good communication
            skills and can easily adapt to situations, is excellent at decision making and performing tasks
            efficiently with minimum supervision. I am a result-driven and goal-oriented person who thinks
            proactively and sees problems as a motivation and strives to find lasting solutions.
          </div>
        </section>
        <section className="bg-dark-pattern-1 pt-5">
          <WorkHistory />
        </section>
        <section className="py-5 align-center hidden-sm">
          <img src={avatar1} className="avatar-image mt-3 mr-n3" style={{ width: 80, height: 80 }} />
          <img src={avatar3} className="avatar-image" style={{ zIndex: 3 }} />
          <img src={avatar2} className="avatar-image mt-3 ml-n3" style={{ width: 80, height: 80 }} />
          <h3 className="white-text font-weight-bold my-4">Here are some of my projects</h3>
          <FeaturedProjects />
        </section>
        <footer className="p-2 p-md-4 bg-grey-deep">
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
              <p className="m-0 white-text font-weight-bold">+234-814 775 7475</p>
              <p className="m-0 white-text font-weight-bold">+234-814 775 7475</p>
              <p className="m-0 white-text font-weight-bold">efezinoukpowe@gmail.com</p>
            </Col>
          </Row>
        </footer>
      </div>
    );
  }
}

export default App;
