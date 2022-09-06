import React from 'react';

export function Footer({name}) {

const qstyle = {
padding:'10px',
margin:0,
background:'#fff',
textAlign:'center'
}


return (<>

<div className="container-fluid mt-4" style={qstyle}>
<div className="col-md-12">
{name}
</div>
</div>


</>);



}
