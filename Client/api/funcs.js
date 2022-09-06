function i2s_number(num) {

const qreg = /^[0-9]+$/ig

return qreg.test(num)
}

function is_number(num) {

if (num[0] == 0) {
	return false;
} else {

const qreg = /^[0-9]+$/ig

return qreg.test(num)

}

}


function Escape(num) {

return Math.abs(parseInt(num))

}



export {
	i2s_number,
	is_number,
	Escape
};
