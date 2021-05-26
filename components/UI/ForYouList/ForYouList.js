const ForYouList = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 1; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className="foryou-list">
      <h3 className="foryou-list__title">For You</h3>
      <div className="foryou-list__thumbnails">
        {loopComp(
          <div className="foryou-list__thumbnail">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nerdkungfu.com%2Frick-and-morty-poster%2F&psig=AOvVaw0DOYiPU4U2bkBJhk8sQffC&ust=1622123483311000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIi1gIK_5_ACFQAAAAAdAAAAABAR" />
            <div className="foryou-list__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default ForYouList;
