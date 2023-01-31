import axios from "axios";

// 서버 주소
export const BASE_URL = "http://3.37.86.108:8000";

export const customAxios = axios.create({
  baseURL: BASE_URL,
});
