import React from 'react';
import { Link } from 'react-router-dom';

export function List({name, img, desc, link}) {
return (<>

<div className="show_list_2">
<img src={img} /> <br/>
<Link className="text-center" to={`/movie/${link}`}>{name}</Link>
</div>



</>);



}
