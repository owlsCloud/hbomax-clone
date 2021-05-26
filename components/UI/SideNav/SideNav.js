const SideNav = (props) => {
  return (
    <div className="side-nav">
      <div className="side-nav__close-btn">
        <i className="fas fa-times" />
      </div>
      <ul className="side-nav__main">
        <li>
          <a href="/" className="active">
            Home
          </a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/">Originals</a>
        </li>
        <li>
          <a href="/">Just Added</a>
        </li>
        <li>
          <a href="/">Last Chance</a>
        </li>
        <li>
          <a href="/">Coming Soon</a>
        </li>
        <li>
          <a href="/">Trending Now</a>
        </li>
      </ul>
      <div className="side-nav__divider" />
      <ul className="side-nav__main">
        <li>
          <a href="/">Music</a>
        </li>
        <li>
          <a href="/">Series</a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
