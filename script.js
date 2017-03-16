    var MaxHeight, MaxWidth, YPos, XPos, interval1, interval2, interval3, interval4, moveTo , counter = 5;
	// int counter = 0;
function init(){
	YPos = 300;
	XPos = 500;
	toMove = document.getElementById("scroller");
	toMoveChar = document.getElementById("character");
	toMoveChar.style.top = YPos + "px ";
	toMoveChar.style.left = XPos + "px";
	moveBad();
	moveBad2();
	moveGood();
}
function move(){
	if ((YPos<=0)||(YPos>=615)||(XPos<= 0)||(XPos>= 1015)) {
		stop();
		};
	toMoveChar = document.getElementById("character");
	toMoveChar.style.top = YPos + "px ";
	toMoveChar.style.left = XPos + "px";
};
function moveBx() {
	var myclass = new Array('front-right','front-stand','front-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos++;
	move();

};
function moveCm() {
	var myclass = new Array('back-right','back-stand','back-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	YPos--;
	move();
};
function moveDir() {
	var myclass = new Array('right-right','right-stand','right-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos++;
	move();
};

function moveEsq() {
	var myclass = new Array('left-right','left-stand','left-left');
	var n= Math.round(Math.random()*2);
	document.getElementById('character').setAttribute('class',myclass[n]);
	XPos--;
	move();
};

function moveB() {
	stop();
	interval1 = setInterval(moveBx, 10);
};
function moveC() {
	stop();
	interval3 = setInterval(moveCm, 10);
};
function moveD() {
	stop();
	interval2 = setInterval(moveDir, 10);
};
function moveE() {
	stop();
	interval4 = setInterval(moveEsq, 10);
};
function stop() {
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
};
window.onload =init;

function Key(e) {
    if (e.keyCode===37) moveE();
    if (e.keyCode===38) moveC();
    if (e.keyCode===39) moveD();
    if (e.keyCode===40) moveB();
	if (e.keyCode===32) stop();
}

//Mover objecto 
function moveBad() {
    var elem = document.getElementById("bad"),
        speedX = 2,
		speedY = 2,
        currentPosX = 0;
		currentPosY = 0;
    // Reset the element
    elem.style.left = 0+"px";
    elem.style.right = "auto";
    var motionInterval = setInterval(function() {
        currentPosX += speedX;
		currentPosY += speedY;
		
        if (currentPosX >= 1015) {
           currentPosX = 1015;
           speedX = -1 * speedX;
		   if(Math.random()>0.5)
		   {
			   speedY = -1 * speedY;
		   }
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
		if (currentPosX <= 0) {
           currentPosX = 0;
           speedX = -1 * speedX;
		    if(Math.random()>0.5)
		   {
			   speedY = -1 * speedY;
		   }
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
		   if (currentPosY >= 600) {
           currentPosY = 600;
           speedY = -1 * speedY;
		   if(Math.random()>0.5)
		    {
			   speedX = -1 * speedX;
		   }
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
		if (currentPosY <= 0) {
           currentPosY = 0;
           speedY = -1 * speedY;
		   if(Math.random()>0.5)
		    {
			   speedX = -1 * speedX;
		   }
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }

        elem.style.left = currentPosX+"px";
		elem.style.top = currentPosY+"px";
		if(currentPosX <= XPos + 5 && currentPosY <= YPos + 5 && currentPosX >= XPos - 5 && currentPosY >= YPos - 5)
		{	
	
			counter--;			
			document.getElementById("score").innerHTML = "PONTUAÇÃO :" + counter;
			if(counter == 0)
			{
				alert("Perdeu");
				location.reload();
			}
		}
    },20);
}

function moveBad2() {
    var elem = document.getElementById("bad2"),
        speedX = 2,
		speedY = 2,
        currentPosX = 200;
		currentPosY = 600;
    // Reset the element
    elem.style.left = currentPosY+"px";
    elem.style.top = currentPosY + "px";
    var motionInterval = setInterval(function() {
        currentPosX += speedX;
		currentPosY += speedY;
		
        if (currentPosX >= 1015) {
           currentPosX = 1015;
           speedX = -1 * speedX;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
		if (currentPosX <= 0) {
           currentPosX = 0;
           speedX = -1 * speedX;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
		   if (currentPosY >= 600) {
           currentPosY = 600;
           speedY = -1 * speedY;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
		if (currentPosY <= 0) {
           currentPosY = 0;
           speedY = -1 * speedY;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }

        elem.style.left = currentPosX+"px";
		elem.style.top = currentPosY+"px";
		if(currentPosX <= XPos + 5 && currentPosY <= YPos + 5 && currentPosX >= XPos - 5 && currentPosY >= YPos - 5)
		{
			counter--;
			document.getElementById("score").innerHTML = "PONTUAÇÃO :" + counter;
			if(counter == 0)
			{
				alert("Perdeu");
				location.reload();
			}
		}
    },20);
}

function moveGood() {
    var elem = document.getElementById("good"),
        speedX = 2,
		speedY = 2,
        currentPosX = 800;
		currentPosY = 2;
    // Reset the element
    elem.style.left = currentPosY+"px";
    elem.style.top = currentPosY + "px";
    var motionInterval = setInterval(function() {
        currentPosX += speedX;
		currentPosY += speedY;
		
        if (currentPosX >= 1015) {
           currentPosX = 1015;
           speedX = -1 * speedX;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
		if (currentPosX <= 0) {
           currentPosX = 0;
           speedX = -1 * speedX;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
		   if (currentPosY >= 600) {
           currentPosY = 600;
           speedY = -1 * speedY;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
		if (currentPosY <= 0) {
           currentPosY = 0;
           speedY = -1 * speedY;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
       
        elem.style.left = currentPosX+"px";
		elem.style.top = currentPosY+"px";
		if(currentPosX <= XPos + 10 && currentPosY <= YPos + 10 && currentPosX >= XPos - 10&& currentPosY >= YPos - 10)
		{
			counter++;
			document.getElementById("score").innerHTML = "PONTUAÇÃO :" + counter;
			if(counter == 20)
			{
				alert("Ganhou");
				location.reload();
			}
		}
    },20);
}

//pop up e blanket
function toggle(div_id) {
	var el = document.getElementById(div_id);
	if ( el.style.display == 'none' ) {	el.style.display = 'block';}
	else {el.style.display = 'none';}
}
function blanket_size(popUpDivVar) {
	if (typeof window.innerWidth != 'undefined') {
		viewportheight = window.innerHeight;
	} else {
		viewportheight = document.documentElement.clientHeight;
	}
	if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
		blanket_height = viewportheight;
	} else {
		if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
			blanket_height = document.body.parentNode.clientHeight;
		} else {
			blanket_height = document.body.parentNode.scrollHeight;
		}
	}
	var blanket = document.getElementById('blanket');
	blanket.style.height = blanket_height + 'px';
	var popUpDiv = document.getElementById(popUpDivVar);
	popUpDiv_height=blanket_height/2-200;//200 is half popup's height
	popUpDiv.style.top = popUpDiv_height + 'px';
}

function popup(windowname) {
	blanket_size(windowname);
	toggle('blanket');
	toggle(windowname);		
}

