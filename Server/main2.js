const express = require('express')
const app = express()
const db = require('./db/main.js')
const axios = require('axios')
const cors = require('cors')
const bodyprsr = require('body-parser')
const cookieparser = require('cookie-parser')
var sha256 = require("crypto-js/sha256");
const Validator = require('Validator');



const qport = 8000
/*
function show_cats(){

return db('categories');
}
*/
app.use(cookieparser())
app.use(bodyprsr())


//app.use(cors())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.use(express.json())

/*


*/

//app.use(express.urlencoded({extended:true})


//nukri@gmail.com
//123456
const qze = async(req, res, next) => {


if (!req.cookies.username && !req.cookies.password) {


if (req.path !== '/' && req.path !=='/registration' &&
req.path != '/cat_list/' && req.path != '/cat_list' && 
req.path != '/login/' && req.path != '/login'){ 

return res.redirect('/');

}


} else {


req.user = await db('users').where({mail: req.cookies.username || "", password: req.cookies.password || ""}).first();


if (!req.user || req.user === undefined) {

res.clearCookie('username')
res.clearCookie('password')

}

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
return res.redirect('/')
}

console.log(req.user)

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
	mail: 'qweqwe@qweq.ru',
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


console.log(req.headers)

res.write('app is working')
res.end()
});

app.get('/cat_list', async(req, res) => {

//const qw22 = await db('categories').select('name').where('id','>',1).first();

const qw2222 = await db('categories').select('name').where('id','>',0);

//res.write(`rqweqeqweqw`)

res.status(200).json(qw2222)

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
	res.status(200).send(qw2222);
} else {
	res.status(200).send("nope");
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


app.use("*", (req, res, next)=>{

res.send(`page doesn't exists`)

next();

});

app.listen(qport,() => {

console.log(`server being started and it's working on the port ${qport}`)
//console.log('starting time '+ Date.now())

})
