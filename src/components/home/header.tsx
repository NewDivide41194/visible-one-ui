import { JSX } from "react";

import MountainImg from "../assets/images/mountain.jpeg";
import HeaderNews from "./headerNews";
import "../styles/header.css";

const Header = (): JSX.Element => {
    return (
        <div className="d-flex flex-row flex-wrap">
            <div className="position-relative d-flex flex-column col-lg-8 col-12">
                <img alt="header-image" className="header-img" src={MountainImg} />
                <div className="position-absolute text-light translate-middle top-50 start-50">
                    <h4 className="fw-bold">WORLD NEWS</h4>
                    <hr className="my-3"/>
                    <span className="fw-bold">Lorem ipsum dolor sit amet</span>
                    <p className="header-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                    <button className="form-control w-50 bg-pink text-light">LEARN MORE</button>
                </div>
            </div>
            <div className="d-flex flex-column col-lg-4 col-12">
                <HeaderNews/>
                </div>
        </div>
    );
}

export default Header;