const MediaRow = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 1; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className={`media-row ${props.type}`}>
      <h3 className="media-row__title">{props.title}</h3>
      <div className="media-row__thumbnails">
        {loopComp(
          <div className="media-row__thumbnail">
            <img src="https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675" />
            <div className="media-row__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default MediaRow;
