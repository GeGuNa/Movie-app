import React, { Component } from 'react';
import Mainp from './Main.js';
import { Link, useNavigate } from 'react-router-dom'
import { Auth, Details } from '../api/user.js'
import axios from 'axios'
//import { RiThumbDownFill,RiThumbDownLine,RiThumbUpFill,RiThumbUpLine } from "react-icons/ri";
import { MdLogout, MdCircleNotifications, MdSecurity, MdSettings } from "react-icons/md";
import { RiMapPinUserFill, RiHome2Fill } from "react-icons/ri";

class Profile2 extends Component {

constructor(props) {
	super(props)	
}

async componentDidMount() {
document.title = 'Profile';
	
//const Qauth = await Auth();

//console.log(Qauth)
	
/*if (Qauth.status == 'success') {

	this.setState({ data: Qauth.text })		
						
} else {
		this.setState({ data: {status: 'failed'} })
}*/

}




render() {


console.log(this.props.quser)

return (<>


<Mainp>


 <div className="col-md-12">
 
 
 

<div className="flx2">


<div className="div1">

<div className="flx2img"><img src="/icons/images (2).jpeg" width={100} /></div>
<div className="flx2n">{this.props.quser.nickname} </div>

<div className="flx2menu flx2menuactv"> <RiHome2Fill/> Account</div>
<div className="flx2menu"> <RiMapPinUserFill/> Profile</div>
<div className="flx2menu"> <MdSettings/> Settings</div>
<div className="flx2menu"> <MdSecurity/> Password</div>
<div className="flx2menu"> <MdCircleNotifications/> Notifications</div>
<div className="flx2menu"> <MdLogout/> Logout</div>

</div>


<div className="flx2brd"> </div>


<div className="div2">









<div className="flx2div">

<div className="flx2n2">
<h1> Account details </h1>
</div>


<div className="cxz22">
<div> id: {this.props.quser.id} </div>
<div> Name: {this.props.quser.name} </div> 
<div> Nickname: {this.props.quser.nickname} </div>
<div> Subscriptions: {this.props.quser.subscriptions} </div>
</div>

</div>
















</div>







</div>
 
 
 
 
 

   
</div>



  
</Mainp>  
      

</>);

}

}


function Profile(props) {

const qnav = useNavigate();
const [Qzd, setQzd] = React.useState("11");

React.useEffect(() => {


async function geTusr() {

const Qauth = await Auth();

if (Qauth.status == 'failed') {

setQzd(0)

} else {

setQzd(Qauth.text)

}

}



geTusr();


},[setQzd]);




if (Qzd != 'failed' && Qzd != '11') {
	return <Profile2 {...props} nav={qnav} quser={Qzd} /> 
} else {
	qnav('/')
}

}


export default Profile

