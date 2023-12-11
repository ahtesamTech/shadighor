import axios from 'axios'


const myAxios =  axios.create ({
    baseURL: 'https://backendserver.shadighor.com'
  });

  export default myAxios;