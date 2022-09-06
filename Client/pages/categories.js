import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Cat_list } from '../api/cats.js'


export default class Cats extends Component {

constructor(props) {
	
    super(props);
    
    this.state = { data:[] };	
}


async componentDidMount(){
	const Qcatlist2 = await Cat_list();
	
	this.setState({data: Qcatlist2})
}

render(){


return(<>


<div className="col-md-2">


<div className="card mb-3">
  <div className="card-header">Searching by type</div>
  <div className="/*card-body*/" id="srchtpy2">
 <div>  <Link to="/type/serial">Tv series</Link></div>
  <div> <Link to="/type/movie">Movies</Link></div>
  <div> <Link to="/type/anime">Animes</Link></div>
  <div> <Link to="/viewed">Most viewed</Link></div>
  </div>
</div>



<ul className="list-group">

{this.state.data.map((val, index) => 
<Link to={`/cat/${val.id}`} key={index}>	
<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
   {val.name}
    <span className="badge bg-primary rounded-pill">{val.id}</span>
  </li>
 </Link>
)}





</ul>

</div>


</>);

}

}


/*
export default function Cats(props){
	return <Cats2 {...props}/>
}
*/
