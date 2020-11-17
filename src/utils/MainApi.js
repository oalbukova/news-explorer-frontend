import { BASE_URL } from "./config";

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((res) => {
          if (res.statusCode === 400 && res.validation) {
            return res.validation.body;
          } else if (res.message || res.data) {
            return res;
          }
        });
      }
      return res.json();
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 400) {
        throw new Error("Введите валидный email-адрес");
      }
      if (res.status === 401) {
        throw new Error("Неправильные почта или пароль");
      }
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data.token;
      }
      //   return;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 400) {
        throw new Error("Токен не передан или передан не в том формате");
      }
      if (res.status === 401) {
        throw new Error("Переданный токен некорректен");
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export const getSavedNews = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => {
    return res.json();
    //  return Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис
  });
};

export const saveArticle = (article) => {
  const {
    keyword,
    title,
    description,
    publishedAt,
    source,
    url,
    urlToImage,
  } = article;
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: "include",
    body: JSON.stringify({
      keyword,
      title,
      description,
      publishedAt,
      source: source.name,
      url,
      urlToImage,
    }),
  }).then((res) => {
    //    if (res.ok) {
    return res.json();
    //    }
    // return Promise.reject(`Ошибка: ${res.status}`);
  });
};

export const deleteArticle = (id) => {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  });
  // .then((res) => {
  //   if (res.ok) {
  //     return res.json();
  //   }
  //   return Promise.reject(`error${res.status}`);
  // });
};

