import React from 'react';
import Mainp from './Main.js';
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router';
import sha256 from 'crypto-js/sha256'
//import sha1 from 'crypto-js/sha1'


export default function Register() {

const [getCookie, setCookie, removeCookie] = useCookies();

const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");
const [firstname, setfirstname] = React.useState("");
const [lastname, setlastname] = React.useState("");
const [gender, setgender] = React.useState('male');
const [mail, setmail] = React.useState("");

const [rError, setRerror] = React.useState("");


const qnav = useNavigate();


  const optionsG = [
    {value: 'male', text: 'Male'},
    {value: 'female', text: 'Female'},
  ];
  
  
//set gender to male   


//set username

const Qsetuser = e => { 

const specialChars = /^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i;

const qval = e.target.value.trim()	

if (specialChars.test(qval)) {
	setUsername(qval);
	setRerror(``)
} else {
	setRerror(`Special symbols cannot be used in nickname`)
}

}


//set pass
const Qsetuserpass = e => { 
	
const qval = e.target.value.trim()	

if (qval.length<3) {
	setRerror(`Password cannot be lesser than 3 symbol`)
} else if (qval.length>1024) {
	setRerror(`Password cannot be greather than 1024 symbol`)
} else {
	setPassword(qval);
	setRerror(``)
}	

}


//set mail
const Qsetmail = e => { 
	
var re = /^\S+@\S+\.\S+$/;

if (re.test(e.target.value)) {
	setmail(e.target.value)
	setRerror(``)
} else {
	setRerror(`Ener email correctly please`)
}

}

//set gender 
const Qgender2 = e => { 
	
const qqq = /^(male|female)$/

if (qqq.test(e.target.value)) {
	setgender(e.target.value)
	setRerror(``)
} else {
	setRerror(` HTML xacker ? :D `)
}

}

//set first name
const Qfirstname = e => { 
	
  const specialChars = /^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i;


const qval = e.target.value.trim()	

if (qval.length<1) {
	setRerror(`First name cannot be empty`)
} else if (qval.length>125) {
	setRerror(`First name cannot have more than 125 symbol`)
} else if (specialChars.test(qval)) {
	setfirstname(qval)
	setRerror(``)
} else {
		
}

}

const Qlastname = e => { 
	
const specialChars = /^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i;

const qval = e.target.value.trim()


if (qval.length<1 || qval.length>125) {
	setRerror(`Last name cannot be empty a`)
} else if (qval.length>125) {
	setRerror(`Last name cannot have more than 125 symbol`)
}  else if (specialChars.test(e.target.value)) {
	setlastname(e.target.value)
	setRerror(``)
} else {
	setRerror(`Last name cannot have special characters`)
}

}



const Qsubmitq21 = e => { 

/*
if (firstname.length == 0) { 
	setRerror('Field "First name" cannot be empty')
}
else if (!lastname)setRerror('Field "Last name" cannot be empty')
else if (!username)setRerror('Field "Username" cannot be empty')
else if (!password)setRerror('Field "Password" cannot be empty')
else if (!mail)setRerror('Field "Mail" cannot be empty')
else if (gender.length<1)setRerror('uups')
else { 
	// 
}
*/

if (!rError) {
	
////abc@gmail.com
////123456


axios.post('http://localhost:8000/registration', {
qname: firstname,
qsurn: lastname,
qgend: gender,
qnick: username,
qpass: password,
qmail: mail,
}).then(resp => {


console.log(resp)

if (resp.status === 200 && resp.data.status == 'error') { 

setRerror(resp.data.text)

} else if (resp.status === 200 && resp.data.status == 'ok') { 
	setCookie('username', username, { path: '/', maxAge: (60*60*24*30) } ); 
	setCookie('password', sha256(password).toString(), { path: '/', maxAge: (60*60*24*30) } );
	qnav('/')
	setRerror('')
	
} else {
	//
}


});
 
}

e.preventDefault(); 

};


const Qsubmqqqitq = e => { 

removeCookie('nukri'); 
 
e.preventDefault(); 
};



document.title = 'login';


return (<>

<Mainp>


 <div className="col-md-12">

  <div className="phtl-title text-center mb-4">
    Registration
  </div>  
  
  
  <div className="col-md-8 mx-auto">
  <form className="frmctrl">
  
    {rError && (<> <div className="alert alert-danger"> {rError} </div> </>)}
    {  }
    <p>      
    <label className=""><b>First Name</b></label>
    <input className="form-control" onInput={Qfirstname} type="text"/>
    </p>
    <p>      
    <label className=""><b>Last Name</b></label>
    <input className="form-control" onInput={Qlastname}  type="text"/>
    </p>
    
    
   <p>      
    <label className=""><b>Nickname</b></label>
    <input className="form-control" onInput={Qsetuser}  type="text"/>
    </p> 
    
    <p>      
    <label className=""><b>Password</b></label>
    <input className="form-control" onInput={Qsetuserpass}  type="text"/>
    </p> 
   
	<p>      
    <label className=""><b>Mail</b></label>
    <input className="form-control" onInput={Qsetmail}  type="text"/>
    </p> 
   
       <p>     
    <label className=""><b>Gender</b></label>
    
    <select className="form-control" onChange={Qgender2}>
    {optionsG.map(val=>(
	       <option key={val.value} value={val.value}>
            {val.text}
          </option>	
	))}
    </select>
    </p> 
    
    <p>
		<button style={{width:'100%'}} onClick={Qsubmitq21} className="btn btn-secondary">Create account</button>
    </p>
           
      
        
<div className="row">
 
 
<div className="mt-4">

    <p>
	   <Link style={{width:'100%'}} className="btn btn-success" to="/login">Login</Link>
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
