import { dateFrom, dateTo } from "./utils";

export const BASE_URL = "https://api.news.oalbukova.nomoredomains.work";
export const NEWS_IN_ROW = 3;
export const NEWS_API_OPTIONS = {
  baseUrl: "https://nomoreparties.co/news/v2/everything",
  from: `from=${dateFrom}`,
  to: `to=${dateTo}`,
  pageSize: "pageSize=100",
  apiKey: "apiKey=0f2f907ab713461f8cdafc37174b4a2a",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
