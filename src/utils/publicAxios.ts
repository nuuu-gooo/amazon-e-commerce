import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

// import axios from "axios";

// export const privateAxios = axios.create({
//   baseURL: "http://localhost:3000",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RzQGdtYWlsLmNvbSIsImlkIjoiZTZlNmNkZTktZTI5Yy00YTc1LWE0MGQtNjc3NWIxMWM1NDk4IiwiZmlyc3RfbmFtZSI6Im5pa29sb3oiLCJsYXN0X25hbWUiOiJ0c2todmVkYWR6ZSIsInBob25lX251bWJlciI6IjU1NTExMjIzNiIsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcwNjk2MzkzNCwiZXhwIjoxNzA2OTY3NTM0fQ.qSVJRiyFeIHHo4dhlUkDpFvenYR235azD41awhCNkSQ",
//   },
// });
