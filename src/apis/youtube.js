import axios from "axios";

const KEY = "AIzaSyCel_IRHqeMDBx-ugmjJ9C_304aVHVogVQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
