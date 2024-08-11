import logo from "../images/logo.svg";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

// const Link = () => {
//   return (
//     <li>
//       <a href="#home" className="nav-link">
//         {" "}
//         home{" "}
//       </a>
//     </li>
//   );
// };

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks type="nav" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} type="nav-icon" key={link.id} />;
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
