import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearSearchText } from "../utils/redux/searchSlice";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  if (!isMenuOpen) return null;

  const handleHomeClick = () => {
    dispatch(clearSearchText());
  };

  return (
    <div className="p-5 ml-2 mr-5 shadow-lg">
      <ul>
        <li>
          <Link to="/" onClick={handleHomeClick}>
            Home
          </Link>
        </li>
        <li>Subscription</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
