import React from 'react'
import { useCookies } from 'react-cookie';
import axios from 'axios'

/*
const instance = axios.create({
   withCredentials: true,
   baseURL: 'http://localhost:8000'
});
 axios.get('some api url', {withCredentials: true});

*/

const instance = axios.create({
   baseURL: 'http://localhost:8000',
   headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
   },
   withCredentials: true
});

export default function Auth(){

const [getCookie, setCookie, removeCookie] = useCookies();


const [Rdata, setRdata] = React.useState();




instance.get("/auth").then(resp => {
	setRdata(resp);
});

const qGet = () => {
	
instance.get("/auth").then(resp => {
	setRdata(resp);
});

	
};



  React.useEffect(() => {
 
     console.log(Rdata)  
      
  }, [Rdata]);


/*
if (Rdata.id) { 
	return Rdata;
} else {
	return false;
}
*/


}




#https://codesandbox.io/s/divine-cherry-dqu40?file=/src/async-fn.js:0-352
