export const SET_NAME = (name) => ({
  type: 'SET_NAME',
  payload: new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  }),
});

export const SET_AGE = (age) => ({
  type: 'SET_AGE',
  payload: age,
});
