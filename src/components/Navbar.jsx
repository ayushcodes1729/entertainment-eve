import React from "react";
import "./Navbar.css";
import logo from "../assets/ECell.jpg";

const Navbar =()=>{
    return (
        <div>
            <nav id="navbar">
                <div id="logo">
                    <a href="#home">
                        <img src={logo} alt="logo" />
                    </a>
                </div>
                <div className="butbox">
                    <ul>
                        <li className="navb">
                            <a href="">
                                Discover
                            </a>
                        </li>
                        <li className="navb"><a href="">Initiatives</a></li>
                        <li className="navb"><a href="">Learn</a></li>
                        <li className="navb"><a href="">Endeavour'24</a></li>
                        <li className="navb"><a href="">Incubator</a></li>
                        <li className="navb"><a href="">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar