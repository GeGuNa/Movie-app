import axios from 'axios'
import { is_number, Escape } from './funcs.js'



export async function Auth() {

const instance = await axios.create({
   baseURL: 'http://localhost:8000',
   headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
   },
   withCredentials: true
});


	
const response2 = await instance.get("/?act=user");

if (response2.data.status != 'failed'){
	return response2.data;
} else {
	return {status: 'failed'};
}




}



function qzqwe(){
	
	
const instance = axios.create({
   baseURL: 'http://localhost:8000',
   headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
   },
   withCredentials: true
});



return new Promise((res, rej) => {

instance.get("/?act=user").then(resp => {
	if (resp.status != 200) {
		return rej('error')
	} else {
		return res(resp.data);
	}
});

});
	
}




export async function Details(id) {


if (is_number(id) == false) {
	
	return {status: 'failed', data:''}
	
}


const instance = await axios.create({
   baseURL: 'http://localhost:8000',
   headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
   },
   withCredentials: true
});


	
const response2 = await instance.get(`/details/${id}`);

if (response2.data.status != 'failed'){
	return response2.data.data;
} else {
	return {status: 'failed'};
}


}

