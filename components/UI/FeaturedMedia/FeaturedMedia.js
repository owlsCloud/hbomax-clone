import { useRouter } from "next/router";
import { useStateContext } from "../../HBOProvider";
const FeaturedMedia = ({
  mediaUrl,
  title,
  location,
  type,
  linkUrl,
  mediaId,
}) => {
  const globalState = useStateContext();
  const router = useRouter();
  const clickedPlay = () => {
    router.push(linkUrl);
  };
  const clickedAdd = (type, mediaUrl, mediaId) => {
    globalState.addToList({
      mediaId: mediaId,
      mediaType: type,
      mediaUrl: mediaUrl,
    });
  };

  const showMedia = () => {
    if (type === "front") {
      return (
        <iframe
          className="featured-media__video"
          width="100%"
          height="100%"
          src={mediaUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      );
    } else {
      console.log(mediaUrl);
      return <img src={mediaUrl} className="featured-media__img" />;
    }
  };
  return (
    <div
      className={`featured-media ${
        type === "single" ? "featured-media--single" : ""
      }`}
    >
      {showMedia()}
      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title" onClick={clickedPlay}>
            {title}
          </div>
          <div
            className={`featured-media__playing ${
              type === "single" ? "hide-comp" : ""
            }`}
          >
            NOW PLAYING
          </div>
          <div
            className={`featured-media__location ${
              type === "single" ? "hide-comp" : ""
            }`}
          >
            {location}
          </div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn" onClick={clickedPlay}>
              <i className="fas fa-play" />
            </div>
            <div
              className={`featured-media__add-btn ${
                type !== "single" ? "hide-comp" : ""
              }`}
              onClick={() => clickedAdd(type, mediaUrl, mediaId)}
            >
              <i className="fas fa-plus" />
            </div>
            <div
              className={`featured-media__info-btn ${
                type === "single" ? "hide-comp" : ""
              }`}
              onClick={clickedPlay}
            >
              MORE INFO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMedia;
