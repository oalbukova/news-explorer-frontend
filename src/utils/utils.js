let date = new Date();
const WEEK = 7;
date.setDate(date.getDate() - WEEK);
export let dateFrom = date.toISOString().split('T')[0];
export let dateTo = new Date().toISOString().split('T')[0];

export const getSavedArticlesText = (number) => {
  let text = 'сохранённых статей';
  if (number.toString().endsWith('1') && !number.toString().endsWith('11')) {
    text = 'сохранённая статья';
  } else if (number.toString().endsWith('2') && !number.toString().endsWith('12')) {
    text = 'сохранённые статьи';
  } else if (number.toString().endsWith('3') && !number.toString().endsWith('13')) {
    text = 'сохранённые статьи';
  } else if (number.toString().endsWith('4') && !number.toString().endsWith('14')) {
    text = 'сохранённые статьи';
  }
  return text;
}

export const getKeywordsText = (number) => {
  let text = '-и другим';
  if (number.toString().endsWith('1') && !number.toString().endsWith('11')) {
    text = '-му другому';
  } else if (number.toString().endsWith('2') && !number.toString().endsWith('12')) {
    text = '-м другим';
  } else if (number.toString().endsWith('3') && !number.toString().endsWith('13')) {
    text = '-м другим';
  } else if (number.toString().endsWith('4') && !number.toString().endsWith('14')) {
    text = '-м другим';
  }
  return text;
}
