import axios from "axios";
export default class FakeYoutube {
  constructor() {}
  async info(id) {
    return axios.get(`/videos/channel.json`).then((res) => res.data.items);
  }
  async related(id) {
    return axios.get(`/videos/related.json`).then((res) => res.data.items);
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  async #searchByKeyword(keyword) {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }
  async #mostPopular(keyword) {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
