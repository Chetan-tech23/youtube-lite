import { timeAgo, viewCountFormat } from "../utils/helper";

const VideoCard = ({ info }) => {
  if (!info) return;

  console.log(info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-lg"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-1 line-clamp-2 hover:block">{title}</li>
        <li className="text-gray-500">{channelTitle} ✔</li>
        <li className="text-gray-500">
          {viewCountFormat(statistics?.viewCount)} views •{" "}
          {timeAgo(publishedAt)}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
