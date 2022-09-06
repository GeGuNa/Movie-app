
//truncate likes;
//update movies set vlike =0;
//update movies set dislike =0;

//alter table movies add column vlike bigint default '0';
//alter table movies add column dislike bigint default '0';

//} 



/*

const qw22 = await db('likes').select('id','type').where({
author: req.user.id,
video: Eid
}).first();
*/


/*
if (req.query.act == 'like') {
const qdtype = 'like';
const qdtype2 = 'vlike';
const qztpaddif = parseInt(qw22z.vlike+1)
const qztpaddifnot = parseInt(qw22z.vlike-1)
} else if (req.query.act == 'dislike') {
const qdtype = 'dislike';
const qdtype2 = 'dislike';
const qztpaddif = parseInt(qw22z.dislike+1)
const qztpaddifnot = parseInt(qw22z.dislike-1)
}
*/



/*
await db('likes').where({
author: req.user.id,
video: Eid
}).del();

await db('movies').where('id', qw22z.id).update({vlike: parseInt(qw22z.vlike+1)});
*/



/*
if (qqlike.type == 'like') {
await db('movies').where('id', qw22z.id).update({vlike: parseInt(qw22z.vlike-1)});
}  else if (qqlike.type == 'dislike') {
await db('movies').where('id', qw22z.id).update({dislike: parseInt(qw22z.dislike-1)});
}

await db('likes').where({
author: req.user.id,
video: Eid
}).del();


*/








/*else if (req.query.act == 'dislike') {


const qqlike = await qqq.vid_like(req.user.id, Eid, 'dislike')

if (!qqlike) {

await db('likes').insert({
author: req.user.id,
video: Eid,
type: 'dislike'
});

await db('movies').where('id', qw22z.id).update({dislike: qw22z.dislike+1});

} else  {

await db('movies').where('id', qw22z.id).update({dislike: qw22z.dislike-1});

await db('likes').where({
author: req.user.id,
video: Eid
}).del();

}


} else if (req.query.act == 'del') {

const qw2qzzz2 = await db('likes').select('id','type').where({
author: req.user.id,
video: Eid
}).first();

if (qw2qzzz2.type == 'dislike') {

await db('movies').where('id', qw22z.id).update({dislike: qw22z.dislike-1});

} else if (qw2qzzz2.type == 'like') {

await db('movies').where('id', qw22z.id).update({vlike: qw22z.vlike-1});

} else {
//
}



await db('likes').where({
author: req.user.id,
video: Eid
}).del();

}

*/
	
