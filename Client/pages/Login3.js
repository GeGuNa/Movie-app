import React from 'react';
import Mainp from './Main.js';
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Auth } from './user.js'
import sha256 from 'crypto-js/sha256'


export default function Login() {

const [getCookie, setCookie, removeCookie] = useCookies();

const [username, setUsername] = React.useState();
const [password, setPassword] = React.useState();
const [Rdata, setRData] = React.useState();
const [rError, setRerror] = React.useState();
const [Autho, setAutho] = React.useState();





const qnav = useNavigate();

const Qsetuser = e => { 
	setUsername(e.target.value);
}

const Qsetuserpass = e => { 
	setPassword(e.target.value);
}



const Qsubmitq2 = e => { 

////123@abc.ge
//123456


axios.post('http://localhost:8000/login', {
mail: username,
pass: password
}).then(resp => {


if (resp.status === 200 && resp.data != 'nope') { 

	setCookie('username', username, { path: '/', maxAge: (60*60*24*30) } ); 
	setCookie('password', sha256(password).toString(), { path: '/', maxAge: (60*60*24*30) } );
	setRerror('')
	
} else {

setRerror('username or password is incorrect')
	//qnav('/login');
}

});
 

e.preventDefault(); 

};


const Qsubmqqqitq = e => { 

removeCookie('nukri'); 
 
e.preventDefault(); 
};



document.title = 'login';


console.log(Autho);



// {qAuth2.data && (<>Authorised</>)}

return (<>


<Mainp>


 <div className="col-md-12">

  <div className="phtl-title text-center mb-4">
    Login
  </div>
  
 
  {getCookie.nukri &&  (<> value of sookie:  { getCookie.nukri } </>)}
  
  {getCookie.nukri && (<>
  <br/> <button onClick={Qsubmqqqitq}>remove cookie</button>
  </>)}
  
  
  
  <div className="col-md-8 mx-auto">
  <form className="frmctrl" onSubmit={Qsubmitq2}>
    {rError && (<> <div className="alert alert-danger"> {rError} </div> </>)}
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
