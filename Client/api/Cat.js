import axios from 'axios'
import { is_number, Escape } from './funcs.js'


export async function Ctlstq(id) {

const qid = Escape(id);

if (is_number(qid) == false) {
	return {status: 'failed', data:''}
} else {


const instance = await axios.create({
   baseURL: 'http://localhost:8000'
});

const response2 = await instance.get(`/cat/${qid}`);

return response2.data;

}

}




