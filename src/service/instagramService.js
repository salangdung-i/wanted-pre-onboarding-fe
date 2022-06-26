import axios from 'axios';

class InstagramService {
  async getData() {
    try {
      const res = await axios.get('/data/data.json').then((res) => res.data);
      return res;
    } catch (error) {
      console.log(error);
    }
  }

  async getImage() {
    try {
      const res = await axios
        .get('https://source.unsplash.com/random/600x500')
        .then((res) => res.data);
      console.log('res', res.data);
    } catch (error) {
      console.log(error);
    }
  }
}

export default InstagramService;
