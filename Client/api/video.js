import axios from 'axios'
import { is_number, Escape } from './funcs.js'

const Qurl = 'http://localhost:8000';


export const areqs = axios.create({
   baseURL: Qurl,
   withCredentials: true
});


export async function Ongoing() {

const instance = await axios.create({
   baseURL: Qurl,
});
	
const response2 = await instance.get(`/ongoing`);

return response2.data;

}





export async function Toplist() {

const instance = await axios.create({
   baseURL: Qurl,
});
	
const response2 = await instance.get(`/toplist`);

return response2.data;

}


export async function Movid(id) {

if (is_number(id) == false) {
	return {status: 'failed', data:''}
} else {


const instance = await axios.create({
   baseURL: Qurl,
});

const response2 = await instance.get(`/video/${id}`);

return response2.data;
}


}



export async function Chkifsubs(id) {

if (is_number(id) == false) {
	
	return {status: 'failed', data:''}
	
} else {


const instance = await axios.create({
   baseURL: Qurl,
   withCredentials: true
});

const response2 = await instance.get(`/chkifsubs/${id}`);

return response2.data;

}


}



export async function Subscript(id) {

if (is_number(id) == false) {
	
	return {status: 'failed', data:''}
	
} else {


const instance = await axios.create({
   baseURL: Qurl,
   withCredentials: true
});

const response2 = await instance.get(`/addsubs/${id}`);

return response2.data;

}


}



export async function Details(id) {


if (is_number(id) == false) {
	
	return {status: 'failed', data:''}
	
}


const instance = await axios.create({
   baseURL: Qurl,
   headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
   },
   withCredentials: true
});


	
const response2 = await instance.get(`/details/${id}`);

return response2.data;

}


export async function Wheter_liked(id) {

if (is_number(id) == false) {
	return {status: 'failed', data:''}
} else {

const instance = await axios.create({
   baseURL: Qurl,
   headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
   },
   withCredentials: true
});

const response2 = await instance.get(`/wheter_liked/${id}`);

return response2.data;
}

}
