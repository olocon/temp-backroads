import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks type="footer" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink {...link} type="footer-icon" key={link.id} />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company{" "}
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
