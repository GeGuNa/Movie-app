import axios from 'axios'

export async function Cat_list() {

const instance = await axios.create({
   baseURL: 'http://localhost:8000'
});

const response2 = await instance.get("/cat_list");

//console.log(response2) 
return response2.data;

}




