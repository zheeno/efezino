import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const WorkHistory = (props) => {
    const [history] = useState([
        {
            title: "INTERNSHIP AT NIGERIAN CIVIL AVIATION AUTHORITY (N.C.A.A)",
            subtitle: "DEPARTMENT: MAINTENANCE",
            desc: `As an intern, I was part of the team that was responsible for the seamless operation of all digital devices in 
            the organization and repairs of faulty devices. I was able to inspire my fellow interns and some of the staff in my department, teaching
            them some computing skills like web design, basic software maintenance and troubleshooting,
            and many more. I was able to bring up proactive measures and put in place fallback measures should in case
            we ran out of some basic hardware supplies.`,
            duration: "2014 - 2015",
        },
        {
            title: "GRACIA DAVINA SCHOOLS",
            subtitle: "FIFTH GRADE CLASS TEACHER",
            desc: `During my time here, I was responsible for educating the pupils, equipping them with the required knowledge and
            preparing them for their common entrance examination. I prepared the pupils for various educational competitions in which they came out tops.
            I had good reviews from parents, my colleagues, the head teachers and the pupils. I was able
            to foster discipline and promote equality among the students.`,
            duration: "2016 - 2017",
        },
        {
            title: "NATIONAL YOUTH SERVICE CORP",
            subtitle: `P.P.A: BANODEX INTERNATIONAL LIMITED
            POSITION: TECHNICAL SUPPORT PERSONNEL`,
            desc: `After my posting to the company, I built and deployed the company’s website, created a platform which made it very easy for
            the company to manage its clientele’s subscription, send notifications and many more.
            I was able to come up with innovative ideas to automate some of their processes.
            I was also involved in the installation process of fiber optic and microwave internet service
            and some other miscellaneous activities like bring a liaison for the company with 9mobile,
            Cobranet, Kkontech engineers and operatives.`,
            duration: "2017 - 2018",
        },
        {
            title: "EFULL TECHNOLOGY NIGERIA LIMITED",
            subtitle: "POSITION: SOFTWARE DEVELOPER",
            desc: `I Built a POS application with Java for performing transactions on android POS devices by
            communicating directly with NIBSS and not through a payment gateway.
            I developed a web portal for remotely monitoring transactions in real-time as they are
            performed on the android POS devices using Laravel as the core and React JS for front-end.
            I also designed the front-end for a fuel card system application using React Native
            I worked on the front-end for a mobile wallet application using React Native.
            I headed the development team to build an e-menu application which would be used by
            restaurants, bars, lounges, etc, to automate the order taking and processing methods. We built
            this application using JAVA and also worked with the device’s SDK to target some device specific
            functions like Using the thermal printer, Smart card reader, Camera for QR code scanning, and
            so on.`,
            duration: "2018 - Present",
        },
        {
            title: "BYOLATE TECH (NETHERLANDS)",
            subtitle: `POSITION: REMOTE SOFTWARE DEVELOPER`,
            desc: `I worked on a couple of web applications, fixing some bugs and adding new functionalities.
            I was tasked with building an application to perform stress testing on other web APIs`,
            duration: "2019 - 2020",
        },
    ])
    return (
        <>
            <h3 className="white-text align-center font-weight-bold">My Work History</h3>
            <VerticalTimeline>
                {history.reverse().map((job, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: `rgba(66, 66, 66, 0.31)`, color: '#fff' }}
                        contentArrowStyle={{ borderRight: `7px solid rgba(66, 66, 66, 0.31)` }}
                        date={job.duration}
                        iconStyle={{ background: `rgb(29, 28, 28)`, color: '#fff' }}
                    >
                        <h4 className="vertical-timeline-element-title font-weight-bold">{job.title}</h4>
                        <h5 className="vertical-timeline-element-subtitle">{job.subtitle}</h5>
                        <p>{job.desc}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </>
    )
}
export default WorkHistory;