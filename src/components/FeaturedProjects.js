import React, { useState } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import boilerPlate from "../assets/img/projects/google-materialdesign.png"
import circuitBooking from "../assets/img/projects/circuit-booking.png"
import scorenshare from "../assets/img/projects/scorenshare.png"
import sniffer from "../assets/img/projects/sniffer.png"
import terminal from "../assets/img/projects/terminal.png"
import fastklinik from "../assets/img/projects/fastklinik.png"
import cecelia from "../assets/img/projects/cecelia.png"
import efezino from "../assets/img/projects/efezino.png"

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
            title: "Fastklinik",
            photoUrl: fastklinik,
            link: "https://fastklinik-frontend.herokuapp.com/"
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
        }
    ])

    return (
        <div style={{ position: "relative", marginTop: 160 }}>
            <ReactCardCarousel autoplay={true} autoplay_speed={5000} spread={"wide"}
            >
                {projects.map((project, index) => (
                    <div key={index} className="carousel-card">
                        <a href={project.link} target="_blank" className="btn btn-sm btn-info p-1"><span className="fa fa-angle-right" /></a>
                        <img className="carousel-img clickable" src={`${project.photoUrl || boilerPlate}`} />
                    </div>
                ))}
            </ReactCardCarousel>
        </div>
    )
}
export default FeaturedProjects;