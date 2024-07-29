const GOOGLE_API_KEY = "AIzaSyBxXtVLf8HRzeqMkSxtGnxm9E6qOFCzeKU";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const YOUTUBE_SEARCH_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${GOOGLE_API_KEY}&q=`;

export const USER_ICON =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s";
