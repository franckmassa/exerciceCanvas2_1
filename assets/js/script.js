var c = document.getElementById('canvas');
var ctx = c.getContext('2d');

//Boule de glace courbe quadratic
ctx.beginPath();
ctx.moveTo(140,150);
ctx.quadraticCurveTo(230,50,260,150);
ctx.fillStyle = '#8A0908';
ctx.fill();
//cône
ctx.beginPath();
ctx.moveTo(140,150);
ctx.lineTo(260,150);
ctx.lineTo(200,300);
ctx.closePath();
ctx.fillStyle = '#AA6522';
ctx.fill();
