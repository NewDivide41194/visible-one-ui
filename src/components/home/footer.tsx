import { JSX } from "react";
import { FooterMenuList } from "./footerMenuList";

const Footer = (): JSX.Element => {
    return (
        <footer className="bg-secondary text-light">
            <div className="container p-4">
                <div className="row row-wrap">
                    <b className="col-lg-1 mb-4">LOGO</b>
                    <p className="col-lg-1"><FooterMenuList linkArr={["Home", "Directory", "Contact", "Photo"]} /></p>
                    <p className="col-lg-1" ><FooterMenuList linkArr={["Home", "Directory", "Contact", "Photo"]} /></p>
                    <p className="col-lg-1"><FooterMenuList linkArr={["Home", "Directory", "Contact", "Photo"]} /></p>

                    <div className="col-lg-4">
                        <form className="form px-5">
                            <input type="text" className="form-control mb-2" id="" placeholder="Text me" value="" />
                            <label>Lorem ipsum dolor sit amet. </label>
                        </form>
                    </div>
                    <div className="col-lg-4 text-end">
                        {contactIcons.map((item) => (
                            <a key={item.id} href={item.link} className="text-light ms-4">
                                <i className={item.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;

const contactIcons = [
    {
        id: 1,
        icon: "fab fa-instagram",
        link: "https://www.instagram.com/"
    },
    {
        id: 2,
        icon: "fab fa-facebook-f",
        link: "https://www.facebook.com/"
    },
    {
        id: 3,
        icon: "fab fa-twitter",
        link: "https://twitter.com/"
    },

    {
        id: 4,
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/"
    }]