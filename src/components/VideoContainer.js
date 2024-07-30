import { useEffect, useState } from "react";
import {
  YOUTUBE_SEARCH_VIDEOS_API,
  YOUTUBE_VIDEOS_API,
} from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const searchText = useSelector((store) => store.searchCache.searchText);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [searchText]);

  const getVideos = async () => {
    if (searchText) {
      const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API + searchText);
      const json = await data.json();
      setVideos(json.items);
    } else {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => {
        const videoId = video.id.videoId || video.id.playlistId || video.id;

        return (
          <Link key={videoId} to={"watch?v=" + videoId}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
