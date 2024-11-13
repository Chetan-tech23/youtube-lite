import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/redux/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <div className="px-3 md:px-5 flex w-full">
        <div>
          <iframe
            width="1200"
            height="600"
            className="w-[23.5rem] md:w-[1200px] md:h-[600px] h-[300px]"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?&autoplay=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            access-control-allow-origin="true"
          ></iframe>
        </div>
        <div className="w-full md:block hidden">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
