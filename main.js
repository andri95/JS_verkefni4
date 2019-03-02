// let canvas = document.getElementById('canvas'),
// 	ctx = canvas.getContext('2d'),
// 	breidd = 600,
// 	haed = 400,
// 	leikmadur = {
// 		x : breidd / 2,
// 		y : haed - 10,
// 		breidd : 10,
// 		haed : 10
// 	};

// canvas.width = breidd;
// canvas.height = haed;


// ctx.fillStyle = "red";
// ctx.fillRect(leikmadur.x, leikmadur.y, leikmadur.haed, leikmadur.breidd);



//Undir layer - bakgrunnsmynd
// let canvas1 = document.getElementById('canvas1');
// let	width1 = 640;
// let	height1 = 360;

// canvas1.width = width1;
// canvas1.height = height1;

// let background = new Image();
// background.src = "bak3.jpg";

// background.onload = function(){
//     ctx.drawImage(background,0,0);   
// };

// Canvas class
class Canvas{
	constructor(){
		this.canvas = document.getElementById('canvas');	
		this.canvas.width = 600;
		this.canvas.height = 400;
	}
};

// Bý til instance af Canvas klasanum
(function(){
	let cvs = new Canvas();
})();


//Context

let ctx = canvas.getContext('2d');

//Leikmaður object - Hreyfingar fyrir leikmann

let leikmadur = {
	x : 280,
	y : 350,
	lif : 3,
	hradi : 5,
	staerd : [20, 20],
	minusLif : function(){
		lif == lif - 1
	},
	aukahradi : function(){
		hradi == hradi + 3
	}
};

//Teikna leikmann

//ctx.clearRect(0,0,leikmadur.staerd[0],leikmadur.staerd[1]);
ctx.rect(leikmadur.x, leikmadur.y, leikmadur.staerd[0], leikmadur.staerd[1]);
ctx.stroke();

//Óvinir objects

let ovinur1 = {
	x : 80,
	y : 100,
	staerd : [20, 20]
};

let ovinur2 = {
	x : 280,
	y : 150,
	staerd : [20, 20]
};

let ovinur3 = {
	x : 480,
	y : 200,
	staerd : [20, 20]
};

//Teikna óvini

canvas.width = canvas.width;
ctx.rect(ovinur1.x, ovinur1.y, ovinur1.staerd[0], ovinur1.staerd[1]);
ctx.stroke();

ctx.rect(ovinur2.x, ovinur2.y, ovinur2.staerd[0], ovinur2.staerd[1]);
ctx.stroke();

ctx.rect(ovinur3.x, ovinur3.y, ovinur3.staerd[0], ovinur3.staerd[1]);
ctx.stroke();

ovinurHreyfing();

function ovinurHreyfing(){
	if (ovinur1.y > 390){
	ovinur1.y += 1;
	} else if (ovinur1 < 10){
	ovinur1.y -= 1;
	};
	requestAnimationFrame(ovinurHreyfing);
};





function hreyfing(e){

	if (e.keyCode == 37){
		leikmadur.x -= leikmadur.hradi;
	};
	if (e.keyCode == 39){
		leikmadur.x += leikmadur.hradi;
	};
	if (e.keyCode == 40){
		leikmadur.y += leikmadur.hradi;
	};
	if (e.keyCode == 38){
		leikmadur.y -= leikmadur.hradi;
	};


	canvas.width = canvas.width;
	ctx.rect(leikmadur.x, leikmadur.y, leikmadur.staerd[0], leikmadur.staerd[1]);
	ctx.stroke();
	
};

//document.addEventListener('keydown', hreyfing, true);

document.onkeydown = hreyfing;


//Teikna óvini

// ctx.clearRect(0,0,ovinur1.staerd[0], ovinur1.staerd[1]);
// ctx.fillStyle = 'yellow';
// ctx.fillRect(ovinur1.x, ovinur1.y, ovinur1.staerd[0], ovinur1.staerd[1]);

// ctx.clearRect(0,0,ovinur2.staerd[0], ovinur2.staerd[1]);
// ctx.fillStyle = 'yellow';
// ctx.fillRect(ovinur2.x, ovinur2.y, ovinur2.staerd[0], ovinur2.staerd[1]);

// ctx.clearRect(0,0,ovinur3.staerd[0], ovinur3.staerd[1]);
// ctx.fillStyle = 'yellow';
// ctx.fillRect(ovinur3.x, ovinur3.y, ovinur3.staerd[0], ovinur3.staerd[1]);

//Test



