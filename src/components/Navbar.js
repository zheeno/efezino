import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import avatar4 from "../assets/img/avatars/myAvatar_4.png";
import * as Scroll from 'react-scroll';
import { AiOutlineContacts, AiOutlineInfoCircle } from 'react-icons/ai';
import { IoMdGitNetwork } from 'react-icons/io';
import { RiStackFill } from 'react-icons/ri';

var { Link } = Scroll

const DemoNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar expand="md" className="fixed-top py-0" style={{ backgroundColor: '#101010' }}>
                <NavbarBrand>
                    <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
                        <img src={avatar4} className="icon-image m-0" style={{ borderRadius: 50, boxShadow: '0 0rem 2rem rgba(165, 136, 136, 0.377)' }} />
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <Link activeClass="active" to="aboutMe" spy={true} smooth={true} offset={-100} duration={500}>
                            <NavItem>
                                <NavLink href="/components/">About Me&nbsp;<AiOutlineInfoCircle /></NavLink>
                            </NavItem>
                        </Link>
                        <Link activeClass="active" to="history" spy={true} smooth={true} offset={-100} duration={500}>
                            <NavItem>
                                <NavLink href="/components/">Career&nbsp;<IoMdGitNetwork /></NavLink>
                            </NavItem>
                        </Link>
                        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                            <NavItem>
                                <NavLink href="/components/">Projects&nbsp;<RiStackFill /></NavLink>
                            </NavItem>
                        </Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                            <NavItem>
                                <NavLink href="/components/">Contact&nbsp;<AiOutlineContacts /></NavLink>
                            </NavItem>
                        </Link>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default DemoNavbar;