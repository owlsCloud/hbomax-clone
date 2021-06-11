import { useEffect, useState } from "react";
import axios from "axios";

const CastInfo = ({ updateData, mediaID, mediaType }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${
          mediaType === "movie" ? "movie" : "tv"
        }/${mediaID}/credits?api_key=e24d921b613656dd1dfa11782b7f23f3&language=en-US`
      )
      .then((res) => {
        setCredits(res.data);
        setLoadingData(false);
      })
      .catch();
  }, [updateData]);
  const showCast = () => {
    if (loadingData !== true) {
      return credits.cast.map((member, i) => {
        return (
          <ul className="cast-info__crew" key={i}>
            <li>{member.character}</li>
            <li>{member.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Cast</div>;
    }
  };
  const showCrew = () => {
    if (loadingData !== true) {
      return credits.crew.map((member, i) => {
        return (
          <ul className="cast-info__crew" key={i}>
            <li>{member.job}</li>
            <li>{member.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Crew</div>;
    }
  };
  return (
    <div className="cast-info">
      <div className="cast-info__group-title"> Cast</div>
      <div className="cast-info__list">{showCast()}</div>
      <div className="cast-info__group-title"> Crew</div>
      <div className="cast-info__list">{showCrew()}</div>
    </div>
  );
};

export default CastInfo;
