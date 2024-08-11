const SocialLink = ({ id, href, icon, type }) => {
  return (
    <li key={id}>
      <a href={href} target="_blank" className={type} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
