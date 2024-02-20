import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "9b98914550b72ec2e16601211aef127d",
    language: "ko-KR",
  },
});

export default instance;
