const db = require('./db/main.js')


async function vid_like(user, Eid){

/*
returns  @type [dislike/like]
returns  @id [integer]
*/

const qw2qzzz131zz2 = await db('likes').select('id','type').where({
author: user,
video: Eid
}).first();

return qw2qzzz131zz2;
}


function add_subs(id) {
	return null;
}


function is_number(num) {

if (num[0] == 0) {
	return false;
} else {

const qreg = /^[0-9]+$/ig

return qreg.test(num)

}

}

function i2s_number(num) {

const qreg = /^[0-9]+$/ig

return qreg.test(num)
}

function Escape(num) {

return Math.abs(parseInt(num))

}

function Test_expr() {
return 15
}

function Test_expr2() {
	return 25
}


exports.escape = Escape;
exports.is_number = is_number;
module.exports.is_num = i2s_number;
exports.vid_like = vid_like;

/*exports = {
Test_expr, Test_expr2
};*/

/*module.exports = {
Test_expr, Test_expr2
}*/

/*
module.exports = {
is_number
};
*/
