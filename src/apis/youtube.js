import axios from "axios";

const KEY = process.env.REACT_APP_YT_API;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});

