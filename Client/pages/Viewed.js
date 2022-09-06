import React from 'react';
import Mainp from './Main.js';
import { List } from './Lists.js';
import { Viewed1 } from '../api/sfuncs.js'
import { useParams, useNavigate } from 'react-router-dom'
import { is_number, Escape } from '../api/funcs.js'


export default function Viewed() {

const [Data, setData] = React.useState({status:'failed'});

const qnavig = useNavigate()

React.useEffect(() => {

async function qdataq(){
	
const Qmv = await Viewed1();

setData(Qmv)	
	
};	
	
qdataq()	
	

}, [setData])



	
return (<>

<Mainp>

<div className="show_list">

{Data.status != 'failed' && Data.count != 0 && Data.data.map((val,index)=>
	
	<List key={index} img={`/tv/${val.id}.jpg`} link={val.id} name={val.name} desc={val.description} /> 
	
)}

<div className="mt-2"></div>
</div>

</Mainp>


</>
    
);
 
 
  
}
