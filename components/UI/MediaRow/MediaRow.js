import { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "../../utilities";
const MediaRow = ({ endpoint, type, title }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${endpoint}&api_key=e24d921b613656dd1dfa11782b7f23f3&language=en-US`
      )
      .then((res) => {
        setMoviesData(shuffleArray(res.data.results));
        setLoadingData(false);
      })
      .catch();
  }, []);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 1; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  const showThumbnails = (type) => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return <Thumbnail movieData={movie} type={type} />;
        });
  };

  //MAIN COMPONENT-----------------------------|
  return (
    <div className={`media-row ${type}`}>
      <h3 className="media-row__title">{title}</h3>
      <div className="media-row__thumbnails">{showThumbnails(type)}</div>
    </div>
  );
  //MAIN COMPONENT^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/
};

const Thumbnail = ({ type, movieData: { poster_path } }) => {
  const thumbsize = (type) => {
    if (type === "large-v") {
      return "400";
    }
    if (type === "small-v") {
      return "185";
    }
    if (type === "large-h") {
      return "500";
    }
    if (type === "small-h") {
      return "342";
    }
  };
  return (
    <div className="media-row__thumbnail">
      <img
        src={`https://image.tmdb.org/t/p/w${thumbsize(type)}/${poster_path}`}
      />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="media-row__thumbnail-skeleton">
      <div className="media-row__thumbnail-skeleton-img"></div>
    </div>
  );
};
export default MediaRow;
