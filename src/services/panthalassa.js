
class PanthalassaApi {
  constructor() {
    this.host = 'http://panthalassa';
  }

  sync() {
    const endpoint = `${this.host}/v0/sync`;
    return fetch(endpoint);
  }

  getFeed(username) {
    // TODO: Add a better error handling
    // if (!username) {
    //     throw "Missing required username to get feed";
    // }

    const endpoint = `${this.host}/v0/messages/${username}`;
    return fetch(endpoint);
  }

  getMessage(username, sequence) {
    // TODO: Add a better error handling
    // if (!username || !sequence) {
    //     throw `Missing required username (${username}) or sequence to get feed (${sequence})`;
    // }

    const endpoint = `${this.host}/v0/messages/${username}/${sequence}`;
    return fetch(endpoint);
  }
}

export default new PanthalassaApi();
