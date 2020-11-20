import { NEWS_API_OPTIONS } from './config';
const { baseUrl, from, to, pageSize, apiKey, headers } = NEWS_API_OPTIONS;

export const searchNews = (keyword) => {
  return fetch(`${baseUrl}?q=${keyword}&${from}&${to}&${pageSize}&${apiKey}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис
    });
}

export function getNews(keyword) {
  return searchNews(keyword, { headers });
}
