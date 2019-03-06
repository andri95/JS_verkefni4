
// Hef canvas í klasa
class Canvas{
	constructor(){
		this.canvas = document.getElementById('canvas');	
		this.canvas.width = 600;
		this.canvas.height = 400;
	}
};

// Bý til instance af Canvas klasanum sem kallar í sjálft sig
(function(){
	let cvs = new Canvas();
})();


//Context - Geri þetta útfyrir Canvas klasann útaf erfiðleikum með að kalla í ctx útfyrir Canvas
let ctx = canvas.getContext('2d');

//Leikmaður object - Eiginleikar
let leikmadur = {
	x : 280,
	y : 350,
	lif : 3,
	hradi : 5,
	staerd : [20, 20],
	minusLif : function(){
		this.lif = this.lif - 1;
	},
	aukahradi : function(){
		this.hradi = this.hradi + 3;
	}
};

//Óvinir objects
let ovinur1 = {
	x : 80,
	y : 120,
	staerd : [20, 20],
	staekka : function(){
		this.staerd[0] = this.staerd[0] * 4;
	}
};

let ovinur2 = {
	x : 280,
	y : 190,
	staerd : [20, 20],
	staekka : function(){
		this.staerd[0] = this.staerd[0] * 4;
	}
};

let ovinur3 = {
	x : 480,
	y : 260,
	staerd : [20, 20],
	staekka : function(){
		this.staerd[0] = this.staerd[0] * 4;
	}
};

let mark = {
	x : 280,
	y : 40,
	staerd : [20, 20]
};

// Bakgrunnsmynd
// let background = new Image();
// background.src = 'bak3.jpg';
// background.onload = function(){
// 	ctx.drawImage(background, 0, 0);
// };

// Hraðagildi fyrir óvini
let vx1 = 3;
let vx2 = 3;
let vx3 = 3;
let attir = 6

// Teikna leikmann, óvini og mark á skjáinn og set sjálfvirkar hreyfingar fyrir óvini
function teikna() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ovinur1.x += vx1;

    if (ovinur1.x > 560){
    	vx1 = vx1 - attir;
    } else if (ovinur1.x < 20){
    	vx1 = vx1 + attir;
    };

    ovinur2.x += vx2;

    if (ovinur2.x > 420){
    	vx2 = vx2 - attir;
    } else if (ovinur2.x < 140){
    	vx2 = vx2 + attir;
    };

    ovinur3.x -= vx3;

    if (ovinur3.x > 560){
    	vx3 = vx3  + attir;
    } else if (ovinur3.x < 20){
    	vx3 = vx3 - attir;
    };

    // Skoða hvort árekstur hafi átt sér stað, ef svo er setja leikmann á byrjunarreit og lækka líf um 1
    // Ef leikmaður rekst á óvin neðanfrá
	if(leikmadur.x >= ovinur1.x && leikmadur.x <= ovinur1.x + ovinur1.staerd[0] && leikmadur.y >= ovinur1.y && leikmadur.y <= ovinur1.y + ovinur1.staerd[1]){
		leikmadur.minusLif();
		leikmadur.x = 280;
		leikmadur.y = 350;
	};

	if(leikmadur.x >= ovinur2.x && leikmadur.x <= ovinur2.x + ovinur2.staerd[0] && leikmadur.y >= ovinur2.y && leikmadur.y <= ovinur2.y + ovinur2.staerd[1]){
		leikmadur.minusLif();
		leikmadur.x = 280;
		leikmadur.y = 350;
	};

	if(leikmadur.x >= ovinur3.x && leikmadur.x <= ovinur3.x + ovinur3.staerd[0] && leikmadur.y >= ovinur3.y && leikmadur.y <= ovinur3.y + ovinur3.staerd[1]){
		leikmadur.minusLif();
		leikmadur.x = 280;
		leikmadur.y = 350;
	};

	// Ef leikmaður rekst á óvin ofanfrá - lengsta if statement lífs míns...
	if(leikmadur.x + leikmadur.staerd[0] >= ovinur1.x && leikmadur.x + leikmadur.staerd[1] <= ovinur1.x + ovinur1.staerd[0] && leikmadur.y + leikmadur.staerd[0] >= ovinur1.y && leikmadur.y + leikmadur.staerd[1] <= ovinur1.y + ovinur1.staerd[1]){
		leikmadur.minusLif();
		leikmadur.x = 280;
		leikmadur.y = 350;
	};

	if(leikmadur.x + leikmadur.staerd[0] >= ovinur2.x && leikmadur.x + leikmadur.staerd[1] <= ovinur2.x + ovinur2.staerd[0] && leikmadur.y + leikmadur.staerd[0] >= ovinur2.y && leikmadur.y + leikmadur.staerd[1] <= ovinur2.y + ovinur2.staerd[1]){
		leikmadur.minusLif();
		leikmadur.x = 280;
		leikmadur.y = 350;
	};

	if(leikmadur.x + leikmadur.staerd[0] >= ovinur3.x && leikmadur.x + leikmadur.staerd[1] <= ovinur3.x + ovinur3.staerd[0] && leikmadur.y + leikmadur.staerd[0] >= ovinur3.y && leikmadur.y + leikmadur.staerd[1] <= ovinur3.y + ovinur3.staerd[1]){
		leikmadur.minusLif();
		leikmadur.x = 280;
		leikmadur.y = 350;
	};


	//Bakgrunnur - næ ekki að setja inn bakgrunnsmynd án þess að hún skemmi allt annað
	ctx.fillStyle = '#71a6fc';
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// Skrifa út líf og aðferðir
	ctx.font = '15px Monospace';
	ctx.fillStyle = 'White';
	ctx.fillText('Lives: ' + leikmadur.lif, 10, 20);
	ctx.fillText('Shift >> Lightspeed', 10, 50);

	// Teikna leikmann og óvini
    ctx.fillStyle = 'Green';
    ctx.fillRect(leikmadur.x, leikmadur.y, leikmadur.staerd[0], leikmadur.staerd[1]);

    ctx.fillStyle = 'Red';
    ctx.fillRect(mark.x, mark.y, mark.staerd[0], mark.staerd[1]);

    ctx.fillStyle = 'Black';
    ctx.fillRect(ovinur1.x, ovinur1.y, ovinur1.staerd[0], ovinur1.staerd[1]);
    ctx.fillRect(ovinur2.x, ovinur2.y, ovinur2.staerd[0], ovinur2.staerd[1]);
    ctx.fillRect(ovinur3.x, ovinur3.y, ovinur3.staerd[0], ovinur3.staerd[1]);

    // Ef leikmaður kemst að markinu
	if(leikmadur.x >= mark.x && leikmadur.x <= mark.x + mark.staerd[0] && leikmadur.y >= mark.y && leikmadur.y <= mark.y + mark.staerd[1]){
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#71a6fc';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		ctx.font = '90px Monospace';
		ctx.fillStyle = 'White';
		ctx.fillText('Victory!', 100, 220);
	};

	// Ef leikmaður tapar
	if(leikmadur.lif == 0){
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = '#71a6fc';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		ctx.font = '90px Monospace';
		ctx.fillStyle = 'White';
		ctx.fillText('You lost!', 70, 220);
	};
};
 
// Fallið teikna er keyrt 60x á sekúndu
setInterval(teikna, 1000/60);


// keyCode events fyrir lyklaborð/hreyfingu á leikmanni + stoppa leikmann frá því að fara out of bounds
function hreyfing(e){

	if (e.keyCode == 37){
		if(leikmadur.x > 0){
			leikmadur.x -= leikmadur.hradi;
		};
	};
	if (e.keyCode == 39){
		if(leikmadur.x + leikmadur.staerd[0] < 600){
			leikmadur.x += leikmadur.hradi;
		};
	};
	if (e.keyCode == 40){
		if(leikmadur.y + leikmadur.staerd[1] < 400){
			leikmadur.y += leikmadur.hradi;
		};
	};
	if (e.keyCode == 38){
		if(leikmadur.y > 0){
			leikmadur.y -= leikmadur.hradi;
		};
	};	

	// Leikmaður fær aukahraða en óvinir stækka
	if (e.keyCode == 16){
		leikmadur.aukahradi();
		ovinur1.staekka();
		ovinur2.staekka();
		ovinur3.staekka();
	};
};

document.onkeydown = hreyfing;



