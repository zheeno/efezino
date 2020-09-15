import React, { useEffect, useState } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import boilerPlate from "../assets/img/projects/google-materialdesign.png"
import circuitBooking from "../assets/img/projects/circuit-booking.png"
import scorenshare from "../assets/img/projects/scorenshare.png"
import sniffer from "../assets/img/projects/sniffer.png"
import terminal from "../assets/img/projects/terminal.png"
import fastklinik from "../assets/img/projects/fastklinik.png"
import fastklinikWeb from "../assets/img/projects/fastklinik_web.png"
import cecelia from "../assets/img/projects/cecelia.png"
import efezino from "../assets/img/projects/efezino.png"
import dispatch_z from "../assets/img/projects/dispatch_z.jpg"

const carouselRef = React.createRef();

const FeaturedProjects = (props) => {
    const [projects] = useState([
        {
            title: "Circuit Booking",
            photoUrl: circuitBooking,
            link: "https://circuit-booking.com"
        },
        {
            title: "Score N Share",
            photoUrl: scorenshare,
            link: "https://scorenshare.com"
        },
        {
            title: "Covid-19 Sniffer",
            photoUrl: sniffer,
            link: "https://covid19sniffer.com"
        },
        {
            title: "Terminal Manager",
            photoUrl: terminal,
            link: "https://terminal.efulltech.com.ng"
        },
        {
            title: "Fastklinik HMS",
            photoUrl: fastklinik,
            link: "https://fastklinik-v1.herokuapp.com/"
        },
        {
            title: "Cecelia",
            photoUrl: cecelia,
            link: "https://cecelia.com.ng"
        },
        {
            title: "My Bio Web Page",
            photoUrl: efezino,
            link: "https://efezino.com"
        },
        {
            title: "Fastklinik Web",
            photoUrl: fastklinikWeb,
            link: "https://fastklinik-web.herokuapp.com/"
        },
        {
            title: "Dispatch-Z",
            photoUrl: dispatch_z,
            link: "https://play.google.com/store/apps/details?id=com.dispatch_z"
        }
    ])

    const carouselChange = () => {
        props.setCurrentProject(projects[carouselRef.current.getCurrentIndex()])
    }

    useEffect(() => {
        props.setCurrentProject(projects[0])
    }, []);

    return (
        <div style={{ position: "relative", marginTop: 160 }}>
            <ReactCardCarousel ref={carouselRef} afterChange={carouselChange} autoplay={true} autoplay_speed={5000} spread={"wide"}
            >
                {projects.map((project, index) => (
                    <div key={index} className="carousel-card">
                        <img className="carousel-img clickable" src={`${project.photoUrl || boilerPlate}`} />
                    </div>
                ))}
            </ReactCardCarousel>
        </div>
    )
}
export default FeaturedProjects;