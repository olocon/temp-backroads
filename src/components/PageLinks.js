import { pageLinks } from "../data";

const PageLinks = ({ type }) => {
  return (
    <ul className={`${type}-links`}>
      {pageLinks.map((link) => {
        const { id, href, text } = link;
        return (
          <li key={id}>
            <a href={href} className={`${type}-link`}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
