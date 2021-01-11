let pass = document.getElementById('password')
let gen = () =>{
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	const numbers = '1234567890';
	const specialChars = '!@#%?';
	let randPass = ''
	for(let i=0;i<4;i++){
		let ranNum = Math.floor(Math.random()*5)
	randPass += letters.split('')[ranNum]
	randPass += numbers.split('')[ranNum]
	randPass += specialChars.split('')[ranNum]
	}
	pass.innerText = randPass;
}
