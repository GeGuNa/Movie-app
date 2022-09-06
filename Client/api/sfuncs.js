import axios from 'axios'

export async function Sdbrfns(type) {

const instance = await axios.create({
   baseURL: 'http://localhost:8000'
});

const response2 = await instance.get(`/mtops/${type}`);

return response2.data;

}



export async function Viewed1() {

const instance = await axios.create({
   baseURL: 'http://localhost:8000'
});

const response2 = await instance.get(`/mostw/`);

return response2.data;

}


export async function Ongngs() {

const instance = await axios.create({
   baseURL: 'http://localhost:8000'
});

const response2 = await instance.get(`/ongoinglist/`);

return response2.data;

}


