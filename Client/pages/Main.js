import React from 'react';
import { Footer } from './footer.js';
import Header from './Head.js';
import Sliding from './Slider.js';
import Login from './Login.js';
import Cats from './categories.js';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom'
import { MdRemoveRedEye } from "react-icons/md";
import { RiHeart3Fill }  from "react-icons/ri";
import { BsDot }  from "react-icons/bs";
import axios  from "axios";

//import { Toplist }  from "../api/video.js";


export default function Mainp({children}) {

const qlq = useLocation()
const [Qdata, setQdata] = React.useState({status:'failed', data: ''});
const [Ongd, setOngd] = React.useState({status:'failed', data: ''});



React.useEffect(() => {	

//const Qz = async() => {
	
//const Qzz = await Toplist();

function Rldtp () {

axios.get('http://localhost:8000/toplist').then((resp) => {
	setQdata(resp.data);
	//console.log(resp.data);
	//Qdqwe = resp.data;
});

}


function Rldtp1 () {

axios.get('http://localhost:8000/ongoing').then((resp) => {
	setOngd(resp.data);
	//console.log(resp.data);
	//Qdqwe = resp.data;
});

}

Rldtp();
Rldtp1();


//console.log('1')
	
}, [setQdata, setOngd]);

//console.log(Qdata)

return (<>

<Header />

{ qlq.pathname=='/' && <Sliding /> }



<div className="container-fluid mt-4">

<div className="row">

<Cats/>

<div className="col-md-8" style={{background:'#fff', padding:0, margin:0,boxSizing:'content-box'}}>
{children}
</div>


<div className="col-md-2">



<div className="card">
  <div className="card-header">
  
    <div className="row">
    
    
<div className="col-sm">
  Top shows
</div> 


<div className="col-sm">  <Link to="/viewed" style={{float:'right'}}>View all</Link> </div>
  
   </div>
  </div>
  
  
  <div className="card-body">
  
{Qdata.status != 'failed' && 
Qdata.data.map((val,index) => 
<div key={index}>
<div className="qz22q">

<span>
<img src={`/tv/${val.id}.jpg`} width={50} />
</span>

<span className="chlds2">
<span> <Link to={`/movie/${val.id}`}>{val.name}</Link> </span>
<span>  <MdRemoveRedEye/> {val.views} <BsDot/> <RiHeart3Fill/> {val.vlike}  </span>
</span>

</div>

</div>  
)}


{/*Qdata.data.map((val,index) =>

<div className="qz22q">

<span>
<img src={`/tv/${val.id}.jpg`} width={50} />
</span>

<span className="chlds2">
<span> <a href="/movie/{val.id}">{val.name}</a> </span>
<span>  <MdRemoveRedEye/> {val.views} <BsDot/> <RiHeart3Fill/> {val.vlike}  </span>
</span>

</div>

	
)*/}






</div>
</div>









<div className="card mt-4">
  <div className="card-header">
  
    <div className="row">
    
<div className="col-sm">
  ONGOING SERIES  
</div> 

<div className="col-sm">  <Link to="/ongoing" style={{float:'right'}}>View all</Link> </div>
  
   </div>
  </div>
  
  
  <div className="card-body">
  

 
<div className="col-sm"> 


{Ongd.status != 'failed' && Ongd.data.map((val,index) => 
<div key={index}>

<div className="qz22q">

<span>
<img src={`/tv/${val.id}.jpg`} width={80} />
</span>

<span className="chlds2">
<span> <Link to={`/movie/${val.id}`}>{val.name}</Link> </span>
<span>  <MdRemoveRedEye/> {val.views} <BsDot/> <RiHeart3Fill/> {val.vlike}  </span>
<span> {val.video_typpe} </span>
</span>

</div>

</div>

)}
 
 
 </div>


  </div>
</div>







</div>


</div>
</div>

  <Footer name={'developed by nukri ;)'}></Footer>  


</>)


}
