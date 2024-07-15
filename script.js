const element = document.querySelector("#cham");
// DRY : Don't Repeat Yourself
function applyGrayScale(){
	const percentage = prompt("PERCENTAGE: ")
	element.style.filter = `grayscale(${percentage}%)`;
}

function colorize(){
	element.style.filter = `grayscale(0%)`;	
}

function roundBorder(){
	const radius = prompt("RADIUS: ")
	element.style.borderRadius = `${radius}%`;
}

function boxShadow(){
	const x = prompt("x:")
	const y = prompt("y:")
	const b = prompt("BLUR:")
	element.style.boxShadow = `${x}px ${y}px ${b}px rgba(0,0,0,0.6)`
}

function scaleImage(){
	const s = prompt("SCALE VALUE:");
	element.style.transform = `scale(${s})`;
}

function rotateImage(){
	const d = prompt("DEGREE:");
	element.style.transform = `rotate(${d}deg)`;
}

function changeImage(){
	const url = prompt("URL: ");
	if(url!==null && url!==""){
		element.src = url;
	}
}

function resetStyle(){
	element.style = {};
}