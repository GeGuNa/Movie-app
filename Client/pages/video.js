import React, { Component } from 'react';
import Mainp from './Main.js';
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { Movid, Chkifsubs, Wheter_liked, areqs } from '../api/video.js'
import { is_number, Escape } from '../api/funcs.js'
import { Auth, Details } from '../api/user.js'
import axios from 'axios'
import { RiThumbDownFill,RiThumbDownLine,RiThumbUpFill,RiThumbUpLine } from "react-icons/ri";



class Vfunct extends Component {

constructor(props) {
	
    super(props);
    
    this.state = { 
		data: '', 
		user: '', 
		ifsubs: '', 
		profile: '', 
		subs: '', 
		vidlike: '', 
		viddislike: '',
		wheter_liked: '',
		like_type: ''
	};	
 
}



async componentDidMount() {
	document.title = 'Video';
	
	const qq2vid = await Movid(this.props.id);

	const Qauth = await Auth();
    const Qprofile = await Details(qq2vid.data.author);
	
	
this.setState({subs: Qprofile.subscriptions})
	
this.setState({
vidlike: qq2vid.data.vlike,
viddislike: qq2vid.data.dislike
});

	
	//vidlike
	//console.log(Qauth)
	
if (Qauth.status == 'success'){
	
	
	const whlkg = await Wheter_liked(this.props.id);
	
	
if (whlkg.status == 'success') {
	
this.setState({like_type: whlkg.info.type})

} else {
	
this.setState({like_type: 'unliked'})
		
}	
	
	
	
	//console.log(whlkg)
	this.setState({ wheter_liked: whlkg })		
		
	
	const qsubs = await Chkifsubs(Qprofile.id);
	
	this.setState({ user: Qauth })		
		
		

		
		if (qsubs.text == 'yes') {
			this.setState({ifsubs: 'subs'})
		} else {
			this.setState({ifsubs: 'notsubs'})
		}
				
		
} else {
		this.setState({ user: {status: 'failed'} })
}
	
	//console.log(Qauth)
	
	if (qq2vid.status!='failed')
		this.setState({ 
			data: qq2vid.data,
			profile: Qprofile
		})
	else 
		this.setState({ data: 'failed' })

}

Qsubmitq2(e) {
	
	e.preventDefault()
}


getDtt(){
	return this.state.data;	
}


getDttzz(){
	return this.state.ifsubs;	
}



///////////////////////////////////////////////////////////////////////////////////////////

Remove_like() {

// post_unreact/1

areqs.get(`/post_unreact/${this.props.id}`).then(resp => {
	console.log(`was removed`)
});
	
}



Add_like(type){
		
	if (type == 'dislike') {
		// post_like/1/dislike
	areqs.get(`/post_like/${this.props.id}/dislike`).then(resp => {
			//this.setState({like_type: 'dislike'})	
			//this.setState({viddislike: parseInt(this.state.viddislike+1)})
			console.log(`dislike`)
	});
	} else if (type == 'like') { 
	// post_like/1/like
	areqs.get(`/post_like/${this.props.id}/like`).then(resp => {
		//this.setState({like_type: 'like'})
		//this.setState({vidlike: parseInt(this.state.vidlike+1)})	
		console.log(`like`)
	});	
	
	}
	
}


////////////


Liking(e, type) {


	
if (this.state.like_type == 'like') {
	
this.setState({like_type: 'unliked', vidlike: parseInt(this.state.vidlike-1)})
//this.Remove_like()

console.log('like 1')
} else if (this.state.like_type == 'dislike') {
	
this.setState({like_type: 'unliked', viddislike: parseInt(this.state.viddislike-1)})
//this.Remove_like()
console.log('dislike 1')
} 
  

  

if (type == 'like') {
	
	this.setState({like_type: 'like'})
	this.setState({vidlike: parseInt(this.state.vidlike+1)})
	
	//console.log('like')
	this.Add_like('like')
} else if (type == 'dislike') {
	
	
	this.setState({like_type: 'dislike'})	
	this.setState({like_type: 'dislike', viddislike: parseInt(this.state.viddislike+1)})
	
	
	this.Add_like('dislike')
	//console.log('dislike')
}
	
	

e.preventDefault();
}



Rmvlk(e, type) {
	
if (type == 'like') {

this.setState({like_type: 'unliked', vidlike: parseInt(this.state.vidlike-1)})
this.Remove_like()

} else if (type == 'dislike') {

this.setState({like_type: 'unliked', viddislike: parseInt(this.state.viddislike-1)})	
this.Remove_like()

} else {
	//
}

	
e.preventDefault();	
}



///////////////////////////////////////////////////////////////////////////////////////////


AddSubs(e) {
	
const instance = axios.create({
   baseURL: 'http://localhost:8000',
   withCredentials: true
});
	

instance.get(`/addsubs/${this.state.profile.id}`).then(resp => {



this.setState({subs: resp.data.info})
	
		if (resp.data.data == 'ok') {
			this.setState({ifsubs: 'subs'})
		} else {
			this.setState({ifsubs: 'notsubs'})
		}	
	
});
	
	

		
e.preventDefault();
		
}







render() {
	
const qq2 = this.getDtt();
const qzd1if = this.getDttzz();		
	
	if (this.state.data == 'failed') {
		return (<> video do not exists </>)
	}

//console.log(this.state.ifsubs)
//console.log(this.state.like_type)
//console.log(this.state.ifsubs)	


if (this.state.user.status == 'success' && this.state.wheter_liked.status == 'success') {

const qz22 = this.state.wheter_liked;	

//console.log(qz22.info)
		
}


return (<>


	

<Mainp>


 <div className="col-md-12">
 
  
  <div className="vidd">
	<video className="video" src="/movies/180607_A_101_preview.mp4" controls />
  <div>
  
  
  
  
  <div className="viddesch">
  
  
  
   <div className="viddesflx">
  
  <div className="viddesc">
  
  <div className="ctq2211">

  <div className="fntq">
  {this.state.data.name}   
  
  
 {this.state.user.status == 'success' && this.state.like_type && (
	 <>
	 
<span className="cl_like" onClick={(event) => { 
this.state.like_type == 'like' ? this.Rmvlk(event, 'like') : this.Liking(event, 'like') }
}>
	
	{this.state.like_type == 'like' ? <RiThumbUpFill/> : <RiThumbUpLine/>  } 
	
	
	 </span> {this.state.vidlike}    |  
	 
	 
    <span className="cl_like" onClick={(event) => {
		this.state.like_type == 'dislike' ? this.Rmvlk(event, 'dislike') : this.Liking(event, 'dislike')
		 } }>
    
    {this.state.like_type == 'dislike' ? <RiThumbDownFill/> : <RiThumbDownLine/>  } 
        
    </span>  {this.state.viddislike} 
 
	</>
	)} 
	
	
	
	
   {this.state.user.status == 'failed' && (<>
	 <span className="cl_like"> <RiThumbUpLine/> </span> {this.state.vidlike}    |  
     <span className="cl_like"> <RiThumbDownLine/> </span> {this.state.viddislike}
	</>)} 
  
  
   
   
   
  </div>
  
  <div className="fntq2">
  {this.state.data.views} views,  {this.state.data.timet}
  </div>
  
  </div>
  
  </div>
 
   <div className="viddesc">
  
 <div className="ctq22">

 <div style={{paddingRight:'6px'}}>
 
<a href="/"> 
<img width={40} src={`/icons/${this.state.profile.id == 0 ? '0' : this.state.profile.picture}.png`} /> 
</a>
 
 </div>

 <div className="ctq2211">
  <div><a href="/"> {`${this.state.profile.nickname ?  this.state.profile.nickname : 'Just an user'}`}  </a></div>
  <div> {this.state.subs} subscribers</div>
 </div>

 
{this.state.user.status == 'success' &&  
 <div style={{paddingLeft:'10px'}}>
  <button onClick={(e) => this.AddSubs(e)} className="btn btn-danger">
  {`${this.state.ifsubs == "subs" ? 'UNSUBSCRIBE' : 'SUBSCRIBE' } `}
  </button>
  </div>	
} 

  
  
</div>  
  
  </div>
 
  
    </div>
  
  
 
 <div className="viddesct">
   
  </div>
  
 <div className="viddesctext">
{this.state.data.description}
  </div> 
  
 
  
</div>   
  
 
  </div>   
  
  
  </div>

   
</div>




  
  
</Mainp>  
      

</>);

}

}



function Video(props) {

let navigate = useNavigate();	
let locat = useLocation();
/*
const [qq2, setqq2] = React.useState();
const [details, setdetails] = React.useState();
const [ifsubs, setifsubs] = React.useState();
const [ifauth, setifauth] = React.useState();
*/

const { id } = useParams();	
	

React.useEffect(() => {	
	
if (is_number(id) == false || is_number(id) == NaN ) {
 navigate('/')	
} 

})


return 	<Vfunct {...props} location={locat} navigate={navigate} id={Escape(id)} />	
   

}


export default Video

