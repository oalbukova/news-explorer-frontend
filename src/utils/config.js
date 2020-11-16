export const BASE_URL = 'https://api.albnews.students.nomoreparties.xyz';
export const NEWS_IN_ROW = 3;
let date = new Date();
const WEEK = 7;
date.setDate(date.getDate() - WEEK);
let dateFrom = date.toISOString().split('T')[0];
let dateTo = new Date().toISOString().split('T')[0];

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
console.log(dateFrom);
console.log(dateTo);
