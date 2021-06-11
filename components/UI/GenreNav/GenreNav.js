import { useStateContext } from "../../HBOProvider";
import { useState } from "react";
import Link from "next/link";
const GenreNav = ({ genresData, mediaType }) => {
  //const globalState = useStateContext();
  const [activeNav, setActiveNav] = useState(false);
  setTimeout(() => {
    setActiveNav(true);
  }, 100);
  return (
    <ul className={`genre-nav ${activeNav ? "genre-nav--active" : ""}`}>
      <GenreList genresData={genresData} mediaType={mediaType} />
    </ul>
  );
};

export default GenreNav;

const GenreList = ({ genresData, mediaType }) => {
  return genresData.map((genre) => {
    return (
      <li key={genre.id}>
        <Link href={`/${mediaType}/genre/${genre.id}`}>
          <a>{genre.name}</a>
        </Link>
      </li>
    );
  });
};
