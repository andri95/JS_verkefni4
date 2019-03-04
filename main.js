

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

 
 
let vx = 2;
let vy = 2;
 
function teikna() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ovinur1.x += vx;
    ovinur2.x += vx;
    ovinur3.x += vx;

    if (ovinur1.x === 580){
    	ovinur1.x -= vx;
    };
    if (ovinur1.x === 20){
    	ovinur1.x += vx;
    };

    ctx.fillRect(leikmadur.x, leikmadur.y, leikmadur.staerd[0], leikmadur.staerd[1]);

    ctx.fillRect(ovinur1.x, ovinur1.y, ovinur1.staerd[0], ovinur1.staerd[1]);
    ctx.fillRect(ovinur2.x, ovinur2.y, ovinur2.staerd[0], ovinur2.staerd[1]);
    ctx.fillRect(ovinur3.x, ovinur3.y, ovinur3.staerd[0], ovinur3.staerd[1]);
};
 
setInterval(teikna, 1000/60);




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
};

//document.addEventListener('keydown', hreyfing, true);

document.onkeydown = hreyfing;



