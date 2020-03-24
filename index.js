// learned toLocaleTimeString built in function on w3school here: mhttps://www.w3schools.com/jsref/met_win_setinterval.asp
// referenced codePen for background colo: https://codepen.io/Saxo_Broko/pen/eYOWJYr

function startClock(){
	setInterval(countSeconds,1000);
}
	

function countSeconds(){
	var date = new Date();
	// var s = date.getSeconds();
	var time = date.toLocaleTimeString();
	//console.log(time)
	document.getElementById("clock").innerHTML = time;
    }

startClock()




var i = 0;
function changeColor(){
	var doc = document.getElementById("background");
	var color = ["#EB4D6D", "#FFBB2E", "#49DB62","#5C257F","#23A0D6", "#9C83D6", "#48A7B5"];
		doc.style.backgroundColor = color[i];
		i ++;

		if(i >color.length -1){
			i=0;
		}
	}

setInterval(changeColor, 1000);




//PREVIOUS NOTES/THOUGHTS BELOW - NOT USED - How I was figurinig it out:

	// var h = date.getHours();
	// var m = date.getMinutes();
	// var when = "AM";


// if (hours 12){
// when = "PM"
// hours = hours - 12
// }
//  if (hours == 0)
//  	hours =12
//  if (minutes < = 9)
//  	minutes = "0" + minutes
//  if (seconds < = 9)
//  	seconds = "0"

// function getRandomColor(){
// 		var color "#";
// 		var letters = "0123456789abcdef"
//     	setInterval(function() {
//       	for (var i = 0; i < 6; i++){
//       		}	
//       		return color;
//     	}, 1000)
    	
//     } 
// document.getElementsByClassName("clockContainer").style.backgroundColor = "#000000";
 

//  function seconds () {
//  	setInterval(function() {
//  	const date = new Date();
//  	let s = date.getSeconds();
//  	console.log(s)
//  	}, 1000)
// }

//  function minutes () {
//  	setInterval(function() {
//  	const date = new Date();
//  	let s = date.getSeconds();
//  	console.log(s)
//  	}, 1000)
// }

// var color = [ "black", "pink", "blue", "purple"]
// function hello () {
// 	setInterbal (function (){
// 		var date = mew date ();
// 		var s = date.getSeconds ();
// 		colors[s]
// 		element.style.backgroundColor = "#34545" + s
// 	} , 1000
// }


// >9 add 0 to the #
// 02:12:12

// // >12
// var date = new Date();
// var h = date.getHours();
// if (h === 13){
// 	h = 1;
// }
// if (h === 14){
// 	h = 2;
// }

// if (h === 15){
// 	h = 3;
// }

// if (h === 16){
// 	h = 4;
// }

// if (h === 17){
// 	h = 5;
// }

// if (h === 18){
// 	h = 6;
// }

// if (h === 19){
// 	h = 7;
// }

// if (h === 20){
// 	h = 8;
// }

// if (h === 21){
// 	h = 9;
// }

// if (h === 22){
// 	h = 10;
// }

// if (h === 23){
// 	h = 11;
// }

// if (h === 24){
// 	h = 12;
// }








