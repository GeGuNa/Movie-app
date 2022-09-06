import React, { Component } from 'react';
import Mainp from './Main.js';
import { Link } from 'react-router-dom'
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Auth } from '../api/user.js'
import sha256 from 'crypto-js/sha256'



const Qcookies = new Cookies()


/*
 
 
 	
 	const QzAuth = await Auth();
    
    if (QzAuth.status == 'success') {
		return this.props.navigate('/')
	}	
	
 
 */

class Login2 extends Component {

 constructor(props) {
	
    super(props);
    
    this.state = { nick:'', pswd: '', user: '', rError:'' };	
    	
    
}

async componentWillMount(){
	 /*
	const QzAuth = await Auth();
    
    if (QzAuth.status == 'success') {
		return this.props.navigate('/')
	}	*/
}

async componentDidMount() {
	document.title = 'login';
	
	const qq2aut = await Auth();
	
	this.setState({ user: qq2aut })
	//this.props.navigate('/')
	//Qcookies.set('qweqwe','qweqwe213123')
	//Qcookies.get('qweqwe')
	//Qcookies.remove('qweqwe')
	
}


Qsubmitq2(e){

////abc@gmail.com
//123456


axios.post('http://localhost:8000/login', {
mail: this.state.nick,
pass: this.state.pswd
}).then(resp => {

if (resp.status === 200 && resp.data.id) { 
 
	Qcookies.set('username', this.state.nick, { path: '/', maxAge: (60*60*24*30) } ); 
	Qcookies.set('password', sha256(this.state.pswd).toString(), { path: '/', maxAge: (60*60*24*30) } );
	this.setState({rError:''})
	this.props.navigate('/login')
	
} else {
	this.setState({rError:'either nickname or password is incorrect'})
	//this.props.navigate('/');
	
}

});	
	
	e.preventDefault()
}


Qsetuser(e){
	this.setState({nick: e.target.value})
}

Qsetuserpass(e){
	this.setState({pswd: e.target.value})
}

render(){
return (<>

{console.log(this.state.user.status)}

   {this.state.user.status == 'success' && (<> 
	   {this.state.user.text.id}  ||  {this.state.user.text.nickname}
  </>)}
 
  

<Mainp>


 <div className="col-md-12">

  <div className="phtl-title text-center mb-4">
    Login
  </div>
  

  
 
  
  <div className="col-md-8 mx-auto">

  <form className="frmctrl" onSubmit={(e)=>this.Qsubmitq2(e)}>
    {this.state.rError && (<> <div className="alert alert-danger"> {this.state.rError} </div> </>)}
    <p>     
    <label className=""><b>First Name</b></label>
    <input className="form-control" onInput={(e)=>{this.Qsetuser(e)}} name="first" type="text"/>
    </p>
    <p>      
    <label className=""><b>Last Name</b></label>
    <input className="form-control" onInput={(e)=>this.Qsetuserpass(e)} name="last" type="text"/>
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

}



function Login(props) {


let navigate = useNavigate();	
	

	
/*	
(async() => {

const qq2131 = await Auth();
	
if (qq2131.status == 'success') {
	return navigate('/')
} else {
	*/ return <Login2 {...props} navigate={navigate} />
//}
	
//})()

    
   
}

export default Login

