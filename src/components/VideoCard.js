import { timeAgo, viewCountFormat } from "../utils/helper";

const VideoCard = ({ info }) => {
  if (!info) return;

  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="p-2 m-2 w-[25rem] md:w-72 shadow-lg">
      <img
        className="rounded-lg w-96"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="text-sm md:text-lg font-bold py-1 line-clamp-2 hover:block">
          {title}
        </li>
        <li className="text-gray-500 text-sm md:text-lg">{channelTitle} ✔</li>
        <li className="text-gray-500 text-sm md:text-lg">
          {viewCountFormat(statistics?.viewCount)} views •{" "}
          {timeAgo(publishedAt)}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
