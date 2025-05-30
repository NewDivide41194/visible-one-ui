import { Link } from "react-router-dom";
import "../../styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center p-2">
      <b className="color-pink">LOGO</b>
      <div className="d-flex gap-4 px-4">
        {
          pages.map((page, index) => {
            return (
              <Link to={`/${page.name.toLowerCase()}`} className="text-decoration-none text-dark" key={index}>
                {page.name.toUpperCase()}
              </Link>
            )
          }
          )
        }
        <i className="fa fa-user-circle fa-xl user-profile" />
      </div>

    </nav>
  );
};

export default Navbar;

const pages = [
  {
    name: "Home",
  },
  {
    name: "Discovery"
  },
  {
    name: "Photos"
  },
  {
    name: "Contact"
  }
]
