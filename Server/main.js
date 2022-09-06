const express = require('express')
const app = express()
const db = require('./db/main.js')
const axios = require('axios')
const cors = require('cors')
const cookieparser = require('cookie-parser')
var sha256 = require("crypto-js/sha256");
const Validator = require('Validator');
//const zzz = require('./z1.js');

//const zzqqwez = require('./funcs.js');
//console.log(zzqqwez.Test_expr())


//app.use('/zur', zzz);


const moment = require('moment');

const qport = 8000
/*
function show_cats(){

return db('categories');
}
*/
app.use(cookieparser())


//app.use(cors())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.use(express.json())
app.use(express.urlencoded({extended: true})); 



/*

alter table movies add column timet text default now();

moment().format('ll')

update movies set timet = 'Sep 2, 2022';
moment().format('ll');   // Sep 2, 2022

*/

//app.use(express.urlencoded({extended:true})


//nukri@gmail.com
//123456
const qze = async(req, res, next) => {

if (req.cookies.username && req.cookies.password) {

req.user = await db('users').select("id","nickname","name","subscriptions").where({mail: req.cookies.username || "", password: req.cookies.password || ""}).first();

if (!req.user || req.user === undefined) {

res.clearCookie('username')
res.clearCookie('password')

}

} else {
	req.user = undefined;
}



/*
if (req.path === '/qqqqqzz')
console.log(req.path);
*/



next();
};



app.use(qze);



app.get('/qqqqqzz', (req,res) => {

res.write('app is working')
res.end()

});


app.get('/auth', async(req, res) => {

if (!req.user || req.user === undefined) {
	return res.status(200).send({success:'failed',text:'authorisation error'});
}


res.write('authorised')
res.end()
});

app.post('/registration', async(req, res) => {



//id | name  | surname |       register_time        | gender | last_visit | nickname  | password |        mail 
   
const qname = (req.body.qname === undefined)  ? '' : req.body.qname ;
const qsurn = (req.body.qsurn === undefined)  ? '' : req.body.qsurn ;
const qgend = (req.body.qgend === undefined)  ? '' : req.body.qgend ;
const qnick = (req.body.qnick === undefined)  ? '' : req.body.qnick ;
const qpass = (req.body.qpass === undefined)  ? '' : sha256(req.body.qpass).toString();
const qmail = (req.body.qmail === undefined)  ? '' : req.body.qmail ;



const Qmail = await db('users').where({mail: qmail}).first();
const Qnick = await db('users').where({nickname: qnick}).first();



const rules23 = {
    mail: 'required|email',
    surn: 'required|min:1|max:122225',
    surn: "regex:/^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i",
    name: 'required|min:1|max:125',
	name: "regex:/^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i",
    nick: 'required|min:1|max:125',
	nick: "regex:/^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i",	
	pass: 'required|min:3|max:1024',
    gend: 'in:male,femlae',
	gend: "regex:/^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i",
};

const data23 = {
	mail: qmail,
	surn: qsurn,
    name: qname,
    nick: qnick,
	pass: qpass,
	gend: qgend,
};



const vVldtofls = Validator.make(data23, rules23)
    
//console.log(v.passes())

if (vVldtofls.passes() == false) {
	return res.status(200).send({status:'error', text:`Something didn't go well, check fields`})
} else if (Qmail) { 
	return res.status(200).send({status:'error', text:`This email is taken already by someone`}) 
} else if (Qnick) {
	return res.status(200).send({status:'error', text:`This nickname is taken already by someone`})  
} else {
//
} 





const qadd = await db('users').insert({
name: qname,
surname:qsurn, 
gender: qgend, 
nickname: qnick, 
password: qpass, 
mail: qmail
});

if (qadd) {
	res.status(200).send({status:'ok', text:`well done`})
} else {
	res.status(200).send({status:'error', text:`something went off`})
}


res.end()
});



app.get('/login', (req,res) => {


//бвгґджзклмнпрстфхцчшщйаеєиіїоуюяь

const rules23 = {
    mail: 'required|email',
    surn: 'required|min:1|max:122225',
    surn: "regex:/^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i",
    name: 'required|min:1|max:125',
	name: "regex:/^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i",
    nick: 'required|min:1|max:125',
	nick: "regex:/^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i",	
	pass: 'required|min:1|max:125',
    gend: 'in:male,femlae',
	gend: "regex:/^([a-zA-Zа-яА-Яє-їЄ-Їა-ჰ0-9_])+$/i",
};

const data23 = {
	mail: 'qweqwe@qweq.com',
	surn: 'знову_Засвідчено',
    name: 'qweqwe',
    nick: 'qweqwe',
	pass: '12312312',
	gend: 'male',
};



const vVldtofls = Validator.make(data23, rules23)
    
    console.log(vVldtofls.passes())

res.write('login')
res.end()
});

app.post('/qzz', (req, res) => {

res.send(req.body)
res.end()
});


app.get('/', (req,res) => {

//res.cookie('username', 'nukri@gmail.com', { path: '/', maxAge: (60*60*24*30) } );
//res.cookie('password', sha256('123456').toString(), { path: '/', maxAge: (60*60*24*30) } );

if (req.query.act == 'user' && req.user) {
	return res.status(200).json({status:'success',text: req.user});
} else {
	return res.status(200).json({status:'failed',text:'authorisation error'});
}


//console.log(req.headers)

res.write('app is working')
res.end()
});

app.get('/cat_list', async(req, res) => {

//const qw22 = await db('categories').select('name').where('id','>',1).first();

const qw2222 = await db('categories').select('name','id');

//res.write(`rqweqeqweqw`)



//qw2222.map((val,index) => {
	
//console.log(val.id)	
	
//});



res.status(200).json(qw2222)

res.end()


})



/******************************/

async function add_like(id, type2, count, user) {

await db('likes').insert({
author: user,
video: id,
type: type2
});

//update movies set vlike = 0;
//update movies set dislike = 0;

if (type2 == 'like'){ await db('movies').where('id', id).update({vlike: parseInt(count+1)}); }
else if (type2 == 'dislike') {await db('movies').where('id', id).update({dislike: parseInt(count+1)}); }
else {  }

}


async function remove_likes(id, type, count, user){

if (type == 'dislike') { await db('movies').where('id', id).update({dislike: parseInt(count-1)}); } 
else if (type == 'like') { await db('movies').where('id', id).update({vlike: parseInt(count-1)}); }
else { }


await db('likes').where({
author: user,
video: id
}).del();


}


app.get('/post_unreact/:id', async(req, res) => {
	
if (!req.user || req.user === undefined) {
	return res.status(200).send({success:'failed', text:'authorisation error'});
}

const qqq = require('./funcs.js')	

const Eid = parseInt(qqq.escape(req.params.id));

const qw22z = await db('movies').select('id','vlike','dislike').where('id', Eid).first();

if (!qw22z) {
	return res.status(200).send({status: 'failed', data: 'video doesnt exists'})	
}

const qqlike = await qqq.vid_like(req.user.id, Eid)



if (qqlike !== undefined) {

if (qqlike.type == 'dislike') {

//await db('movies').where('id', qw22z.id).update({dislike: parseInt(qw22z.dislike-1)});

await remove_likes(qw22z.id, 'dislike', qw22z.dislike, req.user.id)

} else if (qqlike.type == 'like') {

//await db('movies').where('id', qw22z.id).update({vlike: parseInt(qw22z.vlike-1)});
await remove_likes(qw22z.id, 'like', qw22z.vlike, req.user.id)

}

//await db('likes').where({ author: req.user.id,video: Eid}).del();

}


const qw22z22z = await db('movies').select('id','dislike','vlike').where('id', Eid).first();

return res.status(200).send({status: 'successful', data: qw22z22z})

res.end();
});






//adding likes
app.get('/post_like/:id/:type', async(req, res) => {
	
if (!req.user || req.user === undefined) {
	return res.status(200).send({success:'failed', text:'authorisation error'});
}

const qqq = require('./funcs.js')	

const Eid = parseInt(qqq.escape(req.params.id));

const qw22z = await db('movies').select('id','vlike','dislike').where('id', Eid).first();

if (!qw22z) {
	return res.status(200).send({status: 'failed', data: 'video doesnt exists'})	
}


const qqlike = await qqq.vid_like(req.user.id, parseInt(Eid))

//console.log(qqlike)

if (!qqlike) {

if (req.params.type == 'like')add_like(Eid, 'like', qw22z.vlike, req.user.id)
else if (req.params.type == 'dislike')add_like(Eid, 'dislike', qw22z.dislike, req.user.id)
else { }


} else { 

if (qqlike.type == 'dislike') { 

await db('movies').where('id', Eid).update({

dislike: parseInt(qw22z.dislike-1), 
vlike: parseInt(qw22z.vlike+1)

});

await db('likes').where({
author: req.user.id,
video: Eid,
}).update({type: 'like'});

} else if (qqlike.type == 'like') { 


await db('movies').where('id', Eid).update({
dislike: parseInt(qw22z.dislike+1), 
vlike: parseInt(qw22z.vlike-1)
});

await db('likes').where({
author: req.user.id,
video: Eid,
}).update({type: 'dislike'});


} else {  } 


}



const qw22z22z = await db('movies').select('id','dislike','vlike').where('id', Eid).first();


return res.status(200).send({status: 'successful', data: qw22z22z})

res.end();
});




////////////












app.get('/like/:id', async(req, res) => {
	
if (!req.user || req.user === undefined) {
	return res.status(200).send({success:'failed', text:'authorisation error'});
}

const qqq = require('./funcs.js')	

const Eid = parseInt(qqq.escape(req.params.id));

const qw22z = await db('movies').select('id','vlike','dislike').where('id', Eid).first();

if (!qw22z) {
	return res.status(200).send({status: 'failed', data: 'video doesnt exists'})	
}


const qqlike = await qqq.vid_like(req.user.id, parseInt(Eid))

console.log(qqlike)

if (req.query.act == 'like' && !qqlike) {



await db('likes').insert({
author: req.user.id,
video: Eid,
type: 'like'
});

await db('movies').where('id', qw22z.id).update({vlike: parseInt(qw22z.vlike+1)});


} else if (req.query.act == 'dislike' && !qqlike) {

await db('likes').insert({
author: req.user.id,
video: Eid,
type: 'dislike'
});

await db('movies').where('id', qw22z.id).update({dislike: parseInt(qw22z.dislike+1)});



} else if (req.query.act == 'delete' && qqlike) {

if (qqlike.type == 'dislike') {

await db('movies').where('id', qw22z.id).update({dislike: parseInt(qw22z.dislike-1)});

//const ztype = 'dislike';
//const ztype2 = parseInt(qw22z.dislike-1);

} else if (qqlike.type == 'like') {

await db('movies').where('id', qw22z.id).update({vlike: parseInt(qw22z.vlike-1)});

//const ztype = 'vlike';
//const ztype2 = parseInt(qw22z.vlike-1);

}


//await db('movies').where('id', qw22z.id).update({ztype: ztype2});



await db('likes').where({
author: req.user.id,
video: Eid
}).del();

}



const qw22z22z = await db('movies').select('id','dislike','vlike').where('id', Eid).first();


return res.status(200).send({status: 'successful', data: qw22z22z})

res.end();
});



/******************************/




////////////////////check_whether_like_ornot

app.get('/wheter_liked/:id', async(req, res) => {
	
if (!req.user || req.user === undefined) {
	return res.status(200).send({success:'failed', text:'authorisation error'});
}

const qqq = require('./funcs.js')	

const Eid = parseInt(qqq.escape(req.params.id));


if (qqq.is_number(Eid) == false) {
	return res.status(200).send({success:'failed', text:'some errors occurred'});
} 


const qw22z = await db('movies').select('id').where('id', Eid).first();

if (!qw22z) {
	return res.status(200).send({status: 'failed', data: 'video doesnt exists'})	
}
	
const qw22 = await db('likes').select('id','type').where({
author: req.user.id,
video: Eid
}).first();

if (!qw22) {
 return res.status(200).send({status: 'failed', data: 'do not exists'})	
}


return res.status(200).send({status: 'success', info: qw22})


/*
CREATE TYPE vidl_type AS ENUM ('like', 'dislike');


create table likes (
id bigserial,
author bigint default '0',
type vidl_type  default 'like',
video bigint default '0',
primary key(id)
);



alter table movies add column vlike bigint default '0';
alter table movies add column dislike bigint default '0';

truncate subscription;
update users set subscriptions = 0;
*/







res.end();
});






/////////////////



///////




app.get('/details/:id', async(req, res) => {

const qqq = require('./funcs.js')	

const Eid = parseInt(qqq.escape(req.params.id));
	
const qw22 = await db('users').select('id','name','nickname','picture', 'subscriptions').where('id', Eid).first();

if (!qw22) {
	return res.status(200).send({status: 'failed', data: 'do not exists'})	
}

return res.status(200).send({status: 'succeed', data: qw22})


res.end();
});


///////////





///check if subscribed 



app.get('/chkifsubs/:id', async(req, res) => {

if (!req.user || req.user === undefined) {
	return res.status(200).send({success:'failed', text:'authorisation error'});
}

const qqq = require('./funcs.js')	

const Eid = parseInt(qqq.escape(req.params.id));
	
const qw22 = await db('users').select('id').where('id', Eid).first();

if (!qw22) {
	return res.status(200).send({status: 'failed', data: 'do not exists'})	
}


const qsbcnt = await db('subscription').where({
channel: qw22.id,
cuser: req.user.id
}).count();


if (qsbcnt[0].count == 0) {
	return res.status(200).send({success:'okay', text: 'nope'});
} else {
	return res.status(200).send({success:'okay', text: 'yes'});
}

res.end()
});




///



//subscription functions



app.get('/addsubs/:id', async(req, res) => {
	

/*await db('users').insert({
	name: 'ჟორა',
	surname: 'zauri', 
	nickname: 'zurikela', 
	password: sha256('123456').toString(), 
	mail: 'admin@gmail.com'
});	
*/
	
if (!req.user || req.user === undefined) {
	return res.status(200).send({success:'failed',text:'authorisation error'});
}

/*

insert into users (name, surname, nickname, password) values('Qniko', 'koberidze', 'FoLLeN', sha256('123456').toString()); 

*/

const qqq = require('./funcs.js')	

const Eid = parseInt(qqq.escape(req.params.id));
		
const qw22 = await db('users').select('id','subscriptions').where('id', Eid).first();

if (!qw22) {
	return res.status(200).send({status: 'failed', data: 'do not exists'})	
}

//alter table movies add subscriptions bigint default 0;
//alter table users add subscriptions bigint default 0;

const qsbcnt = await db('subscription').where({
channel: qw22.id, 
cuser: parseInt(req.user.id)
}).count();

console.log(qsbcnt)

if (qsbcnt[0].count == 0) {
	
const qadd = await db('subscription').insert({
	channel: qw22.id,
	cuser: parseInt(req.user.id), 
});

console.log(qw22)

await db('users').where('id', qw22.id).update({ subscriptions: qw22.subscriptions+1});

return res.status(200).send({status: 'success', data: 'ok', info:  parseInt(qw22.subscriptions+1) })

} else {
	
await db('subscription').where({
channel: qw22.id, 
cuser: req.user.id
}).del();


await db('users').where({id: qw22.id}).update({subscriptions: qw22.subscriptions-1});

return res.status(200).send({status: 'success', data: 'del', info:  parseInt(qw22.subscriptions-1)})
/*




CREATE TYPE vidl_type AS ENUM ('like', 'dislike');


create table likes (
id bigserial,
author bigint default '0',
type vidl_type  default 'like',
video bigint default '0',
primary key(id)
);



alter table movies add column vlike bigint default '0';
alter table movies add column dislike bigint default '0';

truncate subscription;
update users set subscriptions = 0;
*/

}





res.end();
});





///


app.get('/video/:id', async(req, res) => {
	
const qqq = require('./funcs.js')	

//if (is_number(req.params.id || "0"))


if (qqq.is_number(req.params.id) == false) {
	return res.status(200).send({status:'failed', data:''})
} else {
	
const Eid = parseInt(qqq.escape(req.params.id));
	
	
	
const qw22 = await db('movies').select('id','name','description', 'views', 'author', 'timet','vlike','dislike').where('id',Eid).first();



if (!qw22) {
	return res.status(200).send({status: 'failed', data: 'do not exists'})	
}



const qweq22w = qw22 ? qw22 : 'nope'

/*
const q1zzzqqq = {"status":"success","data":{"id":"1","name":"Matrix","description":"1111111111111111111111111111111111111111"}};
console.log(q1zzzqqq.data.id)
*/


await db('movies').where({id: qw22.id}).update({
	views: (parseInt(qw22.views)+1)
});



//if (qw22.author != 0) {

//const qvidauth = await db('users').where('id', qw22.author).select('picture','nickname').first();

/*	





alter table movies add subscriptions bigint default 0;

create table subscription (
id bigserial,
cuser bigint default 0,
channel bigint default 0, 
Primary key(id) 
);
		
const qautvidd = { 
	picture: qvidauth.picture, 
	nickname: qvidauth.nickname
}; 
*/
//return res.status(200).send({status: 'success', data: {...qweq22w, ...qvidauth} })

return res.status(200).send({status: 'success', data: qweq22w })

//} else {
	
//const qautvidd = { picture: 0, nickname:  };

//return res.status(200).send({status: 'success', data: [qweq22w, qautvidd] })


//}



	
}


res.end()

})



//id |         name          |               description                | release_time | genre | director | producer | actors | start | when_added 


/*
 insert into movies (name,description, release_time,genre, director, producer, actors,start)


 28 | Fantom                  | 
 29 | FoLLeN                  | 


insert into movies (name, description, release_time, genre, author) values('Batman vs Superman', ' "Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use. No copyright infringement intended."', 2015, 1, 28);

insert into movies (name, description, release_time, genre) values('qqqq', 'qweqweqweqweqweqwe', 2015, 1);
 
 insert into users (name, surname, nickname, password) values('Qniko', 'koberidze', 'FoLLeN', sha256('123456').toString());
 
 
 
  insert into users (name, surname, nickname, password) values('Testacc', 'QQQQQ', 'Testniki', '123456');
 sha256
 
 
insert into movies (name, description, release_time, genre, author) values('qqqq', 'qweqweqweqweqweqwe', 2015, 1, 32); 
 
 //32
 
 
 */


//movies list by category

/*

----+-------------
  1 | epic
  2 | horror
  3 | western
  4 | eastern
  5 | tales
  6 | romantic
  7 | musical
  8 | tv series
  9 | space
 10 | monsters
 11 | zombies
 12 | comedy
 13 | history
 14 | documentary
 15 | sport
(15 rows)


*/


app.get('/cat/:id', async(req, res) => {
	
const qqq = require('./funcs.js')	

//if (is_number(req.params.id || "0"))


if (qqq.is_number(req.params.id) == false) {
	return res.status(200).send({status:'failed', data:''})
} else {
	
const Eid = parseInt(qqq.escape(req.params.id));
		

const qw222 = await db('categories').where('id',Eid).first();


if (!qw222) {
	return res.status(200).send({status:'failed', data:''})
}

	
const qw22 = await db('movies').select('id','name','description').where('genre',Eid);

const qweq22w = qw22 ? qw22 : 'nope'

const qw22zcnt2 = await db('movies').where('genre',Eid).count();

console.log(qw22zcnt2)

if (qw22zcnt2[0].count != 0){ 
	return res.status(200).send({status: 'success', data: qweq22w})
} else { 
	return res.status(200).send({count: 0}) }


}


res.end()

})



app.get('/main_movies', async(req, res) => {

//const qw22 = await db('categories').select('name').where('id','>',1).first();

const Qmvlist = await db('movies').select('name','id','description').orderBy('id','desc').limit(10);

//res.write(`rqweqeqweqw`)

res.status(200).json(Qmvlist)

res.end()


})


app.post('/login', async(req, res) => {

const qpass = (req.body.pass === undefined)  ? '' : sha256(req.body.pass).toString();
const qmail = (req.body.mail === undefined)  ? '' : req.body.mail ;

const qw2222 = await db('users').where({mail: qmail, password: qpass}).first();

//Fantom
//123@abc.ge
//123456

if (qw2222) {
	return res.status(200).send(qw2222);
} else {
	return res.status(200).send("nope");
}

res.end()


})


app.get('/cat_li11st', async(req, res) => {

//const qw22 = await db('categories').select('name').where('id','>',1).first();

const qw2222 = await axios({
method:'get',
responseType: 'json',
url:'http://localhost:8000/'
});



//res.write(`rqweqeqweqw`)

console.log(qw2222.data)

res.end()


})



/* Top shows | Ongoing */


app.get('/ongoing', async(req, res) => {


//mv_type = serial|anime




const qw22zcnt2 = await db('movies').where('mv_type','serial').orWhere('mv_type','anime').select('name','id','views','vlike', 'video_typpe','mv_type').limit(5).orderBy('ongoing_time','desc');


//const qw22zcnt2 = await db('movies').whereRaw("mv_type = anime OR mv_type = serial");

return res.status(200).send({status: 'success', data: qw22zcnt2})

res.end()


});


/*********************** */


app.get('/ongoinglist', async(req, res) => {

const qw22zcnt2 = await db('movies').where('mv_type','serial').orWhere('mv_type','anime').select('name','id','views','vlike', 'video_typpe','mv_type').orderBy('ongoing_time','desc');

return res.status(200).send({status: 'success', data: qw22zcnt2})

res.end()

});

/*********************** */


app.get('/toplist', async(req, res) => {
	
const qw22zcnt2 = await db('movies').select('name','id','views','vlike').limit(5).orderBy('views','desc');

/*
qw22zcnt2.map((val,index)=> {
console.log(val)
});

CREATE TYPE mov_type AS ENUM ('anime', 'serial', 'movie', 'other');
alter table movies add column mv_type mov_type default 'movie';

alter table movies add column ongoing_time bigint default null;



CREATE TYPE vidl_trns AS ENUM ('Subbed', 'Dubbed', 'Original', 'Subbed & Dubbed');

alter table movies  add column video_typpe vidl_trns default 'Original';

*/


return res.status(200).send({status: 'success', data: qw22zcnt2})

res.end()

})

/* End of top shows */











app.get('/mostw', async(req, res) => {
	

const qw22zcnt2 = await db('movies').select('name','id','views','vlike').orderBy('views','desc');


return res.status(200).send({status: 'success', data: qw22zcnt2})

res.end()

})





app.get('/mtops/:id', async(req, res) => {
	
const qzz2t = req.params.id;

let qz = 'movie';	
	
if (qzz2t == 'anime')qz = 'anime';
else if(qzz2t == 'serial')qz = 'serial';
else if(qzz2t == 'movie')qz = 'movie';
else if(qzz2t == 'other')qz = 'other';
else qz = 'movie';

const qw22zcnt2 = await db('movies').select('name','id','views','vlike').where('mv_type',qz).limit(5).orderBy('id','desc');


return res.status(200).send({status: 'success', data: qw22zcnt2})

res.end()

})

















app.get("/qweqe", (req, res) => {

res.send(`yesss`)

res.end();
});



app.use("*", (req, res, next) => {

res.send(`page doesn't exists`)

next();

});

app.listen(qport,() => {

console.log(`server being started and it's working on the port ${qport}`)
//console.log('starting time '+ Date.now())

})
