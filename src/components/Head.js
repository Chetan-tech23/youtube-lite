import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/redux/appSlice";
import { useEffect, useState } from "react";
import { USER_ICON, YOUTUBE_SEARCH_API } from "../utils/constant";
import { addSearchText, cacheResults } from "../utils/redux/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.searchCache.cacheResults);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestion(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClick = () => {
    dispatch(addSearchText(searchQuery));
  };

  const handleSuggestionClick = (text) => {
    setSearchQuery(text);
    dispatch(addSearchText(searchQuery));
  };

  const handleOnBlur = () => {
    setTimeout(() => setShowSuggestion(false), 200);
  };

  return (
    <div className="grid grid-flow-col p-5 mx-1 mb-2 shadow-lg bg-white sticky top-0">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"
        />
        <img
          className="h-8 ml-4"
          alt="youtube-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuE54d8krphaVP1AQ1Jd4G1uRqLcA2N81TnA&s"
        />
      </div>
      <div className="col-span-10 ml-24">
        <div>
          <input
            className="w-1/2 border py-2 px-3 border-gray-400 rounded-l-full"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => handleOnBlur()}
          />
          <button
            className="py-2 px-4 border border-gray-400 rounded-r-full bg-gray-200"
            onClick={handleSearchClick}
          >
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white px-3 w-[36rem] rounded-lg border border-gray-200">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="py-1 shadow-sm hover:bg-gray-200"
                  onClick={() => handleSuggestionClick(s)}
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
