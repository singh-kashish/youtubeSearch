import axios from "axios";
const KEY = "AIzaSyCp9iHdS8H-6DY-SUX1nAayirVsswrB03U";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type : 'video',
    key: KEY,
  }
});
