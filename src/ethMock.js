const listeners = [];

export default {
  decryptPrivateKey: (key, reason, topic) => {
    return key;
  },
  on: (eventName, callback) => {
    setTimeout(() => {
      callback(new Promise((resolve, reject) => {
        resolve('test');
      }));
    }, 1000);
  },
};
