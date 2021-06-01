import { useState, useEffect } from "react";
import axios from "axios";
const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [movies, setMoviesData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?with_genre=28&primary_release_year=2-21&api_key=e24d921b613656dd1dfa11782b7f23f3&language=en-US"
      )
      .then((res) => {
        setMoviesData(res.data.results);
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
  const showThumbnails = () => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => {
          return <Thumbnail movieData={movie} />;
        });
  };
  //MAIN COMPONENT---------------|
  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">{showThumbnails()}</div>
    </div>
  );
};

const Thumbnail = ({ movieData: { poster_path } }) => {
  return (
    <div className="media-row__thumbnail">
      <img src={`https://image.tmdb.org/t/p/original${poster_path}`} />
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
