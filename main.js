

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
	y : 120,
	staerd : [20, 20]
};

let ovinur2 = {
	x : 280,
	y : 190,
	staerd : [20, 20]
};

let ovinur3 = {
	x : 480,
	y : 260,
	staerd : [20, 20]
};

let mark = {
	x : 280,
	y : 50,
	staerd : [20, 20]
};

 
 
let vx1 = 2;
let vx2 = 2;
let vx3 = 2;
// let vy = 2;
 
function teikna() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ovinur1.x += vx1;

    if (ovinur1.x > 560){
    	vx1 = vx1 -4;
    } else if (ovinur1.x < 20){
    	vx1 = vx1 + 4;
    };

    ovinur2.x += vx2;

    if (ovinur2.x > 420){
    	vx2 = vx2 -4;
    } else if (ovinur2.x < 140){
    	vx2 = vx2 + 4;
    };

    ovinur3.x -= vx3;

    if (ovinur3.x > 560){
    	vx3 = vx3  + 4;
    } else if (ovinur3.x < 20){
    	vx3 = vx3 - 4;
    };


    ctx.fillStyle = 'Green';
    ctx.fillRect(leikmadur.x, leikmadur.y, leikmadur.staerd[0], leikmadur.staerd[1]);

    ctx.fillStyle = 'Red';
    ctx.fillRect(mark.x, mark.y, mark.staerd[0], mark.staerd[1]);

    ctx.fillStyle = 'Black';
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



