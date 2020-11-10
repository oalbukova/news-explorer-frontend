import {BASE_URL, API_KEY} from './config';

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({email, password, name}),
  })
    .then((res) => {
      if (!res.ok) {
        return res.json()
          .then((err) => {
            if (err.error) {
              throw new Error(err.error);
            } else {
              throw new Error(err.message);
            }
          });
      }
      return res.json();
    });
}

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Credentials': true,
    },
    credentials: 'include',
    body: JSON.stringify({email, password}),
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 400) {
        throw new Error("Не передано одно из полей");
      }
      if (res.status === 401) {
        throw new Error("Пользователь с email не найден");
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


// import {BASE_URL, API_KEY} from './config';
//
// export const register = (email, password, name) => {
//   return fetch(`${BASE_URL}/signup`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({email, password, name}),
//   })
//     .then((res) => {
//       if (res.statusCode === 400 && res.validation) {
//         return res.validation.body;
//       } else {
//         return res.json();
//       }
//     })
//     .then((res) => {
//       return res;
//     })
//     .catch((err) => {
//       return Promise.reject(err);
//     });
// };
//
// export const login = (email, password) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     credentials: 'include',
//     body: JSON.stringify({email, password}),
//   })
//
//     .then((res) => {
//       if (res.statusCode === 400 && res.statusCode === 401 && res.validation) {
//         return res.validation.body;
//       } else {
//         return res.json();
//       }
//     })
//     .then((res) => {
//       return res;
//     })
//     // .then((data) => {
//     //   if (data.token) {
//     //     localStorage.setItem("jwt", data.token);
//     //     return data;
//     //   }
//     //   return;
//     // })
//     .catch((err) => {
//       return Promise.reject(err);
//     });
// };
//
// export function getContent(token) {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     credentials: 'include'
//   })
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       }
//       if (res.status === 400) {
//         throw new Error("Токен не передан или передан не в том формате");
//       }
//       if (res.status === 401) {
//         throw new Error("Переданный токен некорректен");
//       }
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => {
//       return Promise.reject(err);
//     });
// }
