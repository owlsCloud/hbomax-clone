import { useState, useEffect } from "react";

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 1; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  const showThumbnails = () => {
    setTimeout(() => setLoadingData(false), 3000);
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : loopComp(<Thumbnail />, 10);
  };
  //main component
  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">{showThumbnails()}</div>
    </div>
  );
};

const Thumbnail = () => {
  return (
    <div className="media-row__thumbnail">
      <img src="https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675" />
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
