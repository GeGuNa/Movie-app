import React from 'react';
import Mainp from './Main.js';
import { List } from './Lists.js';
import { Movies_list } from '../api/Movies.js'


export default class Home extends React.Component {


constructor(props) {
	
	super(props)
	
	this.state = { data: [] }
	
}


async componentWillMount(){
	
const Qmv = await Movies_list();
	
this.setState({data: Qmv});
	
document.title = 'Homepage';
	
}


render(){ 
	
return (<>

<Mainp>

<div className="show_list">

{this.state.data.map((val,index)=>
	<List key={index} img={`/tv/${val.id}.jpg`} link={val.id} name={val.name} desc={val.description} /> 
)}


<div className="mt-2"></div>
</div>

</Mainp>



   </>
    
  );
 
} 
  
}
