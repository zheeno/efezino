import React, { Component } from 'react';
import logo from './logo.svg';
import './assets/styles/App.css';
import { Container, Row, Col } from 'reactstrap';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stacks: [
        {
          name: "Laravel",
          icon: laravelIcon,
          desc: "I fell in love with laravel as at 2017"
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
      </div>
    );
  }
}

export default App;
