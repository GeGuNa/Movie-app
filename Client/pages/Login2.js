import React from 'react';
import Mainp from './Main.js';
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router';


export default function Login() {

const [cookie, setCookie, removeCookie] = useCookies();

const [username, setUsername] = React.useState();
const [password, setPassword] = React.useState();
const [Rdata, setRData] = React.useState();

const qnav = useNavigate();

const Qsetuser = e => { 
	setUsername(e.target.value);
}

const Qsetuserpass = e => { 
	setPassword(e.target.value);
}



const Qsubmitq2 = e => { 

////abc@gmail.com
//123456


axios.post('http://localhost:8000/login', {
mail: username,
pass: password
}).then(resp => {

if (resp.status === 200 && resp.data.id) { 
 
	window.localStorage.setItem('nukri', 'value');
	qnav('/login')
	
} else {

	qnav('/');
	
}

});
 

e.preventDefault(); 

};


const Qsubmqqqitq = e => { 
 
window.localStorage.removeItem('nukri') 
qnav('/login')
 
e.preventDefault(); 
};



document.title = 'login';


return (<>

<Mainp>


 <div className="col-md-12">

  <div className="phtl-title text-center mb-4">
    Login
  </div>
  {Rdata && (<> has been:    {Rdata} <br/> </>)}
  {window.localStorage.getItem('nukri') &&  (<> value of sookie:  { window.localStorage.getItem('nukri') } </>)}
  
  {window.localStorage.getItem('nukri') && (<>
  <br/> <button onClick={Qsubmqqqitq}>remove cookie</button>
  </>)}
  
  
  
  <div className="col-md-8 mx-auto">
  <form className="frmctrl" onSubmit={Qsubmitq2}>
    <p>      
    <label className=""><b>First Name</b></label>
    <input className="form-control" onInput={Qsetuser} name="first" type="text"/>
    </p>
    <p>      
    <label className=""><b>Last Name</b></label>
    <input className="form-control" onInput={Qsetuserpass} name="last" type="text"/>
    </p>
<div className="row">

<div className="col"> 
<input name="rememberme" type="checkbox" value="1" /> <label className="usselectno">Remember me</label> 
</div>

 <div className="col">
 <Link to="/password" style={{float:'right'}} className="">Forget password?</Link> 
 </div>
 
 
<div className="mt-4">

    <p>
    <button style={{width:'100%'}} className="btn btn-success">Login</button>
    </p>
    
      <p>
    <Link style={{width:'100%'}} className="btn btn-secondary" to="/registration">Create account</Link>
    </p>
      
    
 </div>  
   
 
</div>  
   
    
  </form>
  
  <div >
  

 
  </div>   
  
  
  </div>

   
</div>




  
  
</Mainp>  
      

</>);



}
