export const BASE_URL = 'https://api.albnews.students.nomoreparties.xyz';
export const NEWS_IN_ROW = 3;
let date = new Date();
const WEEK = 7;
date.setDate(date.getDate() - WEEK);
let dateFrom = date.toISOString().split('T')[0];
let dateTo = new Date().toISOString().split('T')[0];
// const DATE_LOCALES = "fr-CA";
// const DATE_OPTIONS = { year: "numeric", month: "2-digit", day: "2-digit" };
// const dateFrom = new Intl.DateTimeFormat(DATE_LOCALES, DATE_OPTIONS).format(Date.now() - WEEK);
// const dateTo = new Intl.DateTimeFormat(DATE_LOCALES, DATE_OPTIONS).format(Date.now());

export const NEWS_API_OPTIONS = {
  baseUrl: 'https://newsapi.org/v2/everything',
  from: `from=${dateFrom}`,
  to: `to=${dateTo}`,
  pageSize: 'pageSize=100',
  apiKey: 'apiKey=0f2f907ab713461f8cdafc37174b4a2a',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

export const articlesDeclension = (array) => {
  return ['статья', 'статьи', 'статей'][
    array.length === 0 && 0
    && array.length % 10 === 1 && array.length % 100 !== 11
      ? 0
      : array.length % 10 >= 2
      && array.length % 10 <= 4 && (array.length % 100 < 10 || array.length % 100 >= 20)
      ? 1
      : 2];
}

export const numberDeclension = (array) => {
  return ['му', 'м', 'и'][
    array.slice(3).length % 10 === 1
    && array.slice(3).length % 100 !== 11
      ? 0
      : array.slice(3).length % 10 >= 2
      && array.slice(3).length % 10 <= 4
      && (array.slice(3).length % 100 < 10 || array.slice(3).length % 100 >= 20)
      ? 1
      : 2];
}

export const adjectiveDeclination = (array) => {
  return ['другому', 'другим'][
    array.slice(3).length % 10 === 1
    && array.slice(3).length % 100 !== 11
      ? 0
      : 1];
}
