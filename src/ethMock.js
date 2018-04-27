// const listeners = [];

export default {
  decryptPrivateKey: key => key,
  on: (eventName, callback) => {
    setTimeout(() => {
      callback(new Promise((resolve) => {
        resolve('test');
      }));
    }, 1000);
  },
};
