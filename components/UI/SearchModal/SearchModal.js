import { useStateContext } from "../../HBOProvider";
import { useEffect } from "react";
const SearchModal = (props) => {
  const globalState = useStateContext();
  // const loopComp = (comp, digit) => {
  //   let thumbnails = [];
  //   for (let i = 1; i < digit; i++) {
  //     thumbnails.push(comp);
  //   }
  //   return thumbnails;
  // };
  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.searchOpen]);
  return (
    <div
      className={`search-modal ${
        globalState.searchOpen ? "search-modal--active" : ""
      }`}
    >
      <div className="search-modal__input-group ">
        <input
          className="search-modal__input"
          type="text"
          placeholder="Search for title"
        />
        <div
          className="search-modal__close-btn"
          onClick={() =>
            globalState.setSearchOpenAction(!globalState.searchOpen)
          }
        >
          <i className="fas fa-times" />
        </div>
      </div>
      <h3 className="search-modal__title">Popular Searches</h3>
      <div className="search-modal__thumbnails">
        <div className="search-modal__thumbnail">
          <img src="https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675" />
          <div className="search-modal__top-layer">
            <i className="fas fa-play" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
