import React from 'react'
import { Link } from 'react-router-dom'
//import Auth from './user.js';
import { Auth, Details } from '../api/user.js'


export default function Header(){

//Auth();

const [Qdata, setQdata] = React.useState({status:'failed', data: ''});



React.useEffect(() => {	


async function Rldtp () {

const Qzz = await Auth();
setQdata(Qzz)
}


Rldtp();

	
}, [setQdata]);






return (<>


<div className="container-fluid" style={{padding:0,borderBottom:'1px solid #c4c1c1'}}>

<nav className="navbar navbar-expand-lg" style={{background:'#fff'}}>
 
<div className="col-md-2" style={{textAlign:'center'}}>
<Link to="/">
<img src="/icons/png_popcorn_15397.png" width={40}/>
</Link>
</div>

<div className="col-md-8">
<input type="text" className="form-control" placeholder="Search" />
</div>

<div className="col-md-2" style={{textAlign:'center'}}>


{Qdata.status == 'failed' && (
<Link to="/login">
<img src="/icons/avatardefault_92824.webp" width={40}/> 
</Link>
)}

{Qdata.status == 'success' && (
<Link to="/Profile">  <span className="nckname"> {Qdata.text.nickname} </span>
<img src="/icons/avatardefault_92824.webp" width={40}/> 
</Link>
)}

</div>

</nav>

</div>
    


</>)

}
