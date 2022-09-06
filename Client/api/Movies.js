import axios from 'axios'

export async function Movies_list() {

const instance = await axios.create({
   baseURL: 'http://localhost:8000'
});

const response2 = await instance.get("/main_movies");

return response2.data;

}




