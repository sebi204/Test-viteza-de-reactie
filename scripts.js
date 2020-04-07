var button1 = document.querySelector(".button1");
var button2 = document.querySelector(".button2");
var button3 = document.querySelector(".button3");
var button4 = document.querySelector(".button4");
var button5 = document.querySelector(".button5");

var now, later,n, click=0;


button1.addEventListener("click", function(){
	click++;
	if(click==1)
	{
	n = Math.floor(Math.random() * 6000) + 1000; 
	button1.style.backgroundColor= "red";
	button1.innerHTML= "Așteaptă culoarea verde...";
	setTimeout(function() {document.getElementById("button1").style.display = "none";}, n);
	setTimeout(function() { document.getElementById("button3").style.display = "block";}, n);
	now = Date.now();
	}
	else
	{
		button1.style.backgroundColor = "rgb(30,144,255)";
		button1.innerHTML= "Prea repede!";
		document.getElementById("button3").style.display = "none";
	}
}, false);


button3.addEventListener("click", function(){
	document.getElementById("button3").style.display = "none";
	document.getElementById("button4").style.display = "block";
	later = Date.now();
	button4.innerHTML = later - now - n + " ms";
}, false);

button4.addEventListener("click", function(){
	document.getElementById("button4").style.display = "none";
	document.getElementById("button1").style.display = "none";
	document.getElementById("button2").style.display = "block";
	setTimeout(function() {document.getElementById("button2").style.display = "none";}, n);
	setTimeout(function() { document.getElementById("button3").style.display = "block";}, n);
	now = Date.now();
}, false);

