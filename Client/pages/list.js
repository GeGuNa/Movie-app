import React from 'react';
import Mainp from './Main.js';
import { List } from './Lists.js';
import { Ctlstq } from '../api/Cat.js'
import { useParams, useNavigate } from 'react-router-dom'
import { is_number, Escape } from '../api/funcs.js'



class CatMovie extends React.Component {

constructor(props){

super(props)

this.state = {
data: [],
blabla: ''
};

}

async componentDidMount(){
	
const Qmv = await Ctlstq(this.props.id);

this.setState({data: Qmv});	

}

async componentDidUpdate(prevProps) {
	
if (prevProps.id !== this.props.id) {
	
const Qmv = await Ctlstq(this.props.id);

this.setState({data: Qmv});	

}

	
}


PrintData() {
	return this.state.data
}



render(){
	

const qzid = this.PrintData();

if (qzid.length != 0) {
	
}

	
return (<> 
<Mainp>

<div className="show_list">

{qzid.length != 0 && qzid.count != 0 && qzid.data.map((val,index)=>
	
	<List key={index} img={`/tv/${val.id}.jpg`} link={val.id} name={val.name} desc={val.description} /> 
	
)}


{qzid.count == 0 && (
	<div className="mx-auto mt-4">
	<div className="alert alert-danger"> this category is empty </div>
	 </div>
	)}

<div className="mt-2"></div>
</div>

</Mainp> </>);	
	
}

}



export default function Cat(props){

const { id } = useParams();

const qdn = useNavigate()

return <CatMovie {...props} id={Escape(id)} nav={qdn} />
	
}


function Cat2() {

const { id } = useParams();

const [qdata, setqdata] = React.useState();

//const [qdata, setqdata]  = React.useState();

const qdn = useNavigate()


React.useEffect(() => {

	
if (is_number(id) == false) {
	return qdn('/')
}
	
	
async function qdataq(){
	
const Qmv = await Ctlstq(id);

setqdata(Qmv)	
	
};	
	
qdataq()	
	
document.title = 'Movies in the cat';

console.log(id)	


}, [setqdata])


//console.log(qdata)		
	
	
return (<>

<Mainp>

<div className="show_list">



<div className="mt-2"></div>
</div>

</Mainp>


</>
    
);
 
 
  
}
