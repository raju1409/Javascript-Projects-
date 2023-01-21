const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');
//DRAW TRIANGLE
// context.strokeStyle = "grey";
// context.fillStyle = "yellow";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250, 0);
// context.lineTo(0, 250);
// context.lineTo(500, 250);
// context.lineTo(250, 0);
// context.stroke();
// context.fill();

// DRAW RECTANGLE
// context.fillStyle = "lightgreen"
// context.fillRect(0, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 0, 250, 250);

// context.fillStyle = "lightcyan"
// context.fillRect(0, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(0, 250, 250, 250);

// context.fillStyle = "lightblue"
// context.fillRect(250, 250, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 250, 250, 250);

// context.fillStyle = "lightyellow"
// context.fillRect(250, 0, 250, 250);
// context.strokeStyle = "black";
// context.strokeRect(250, 0, 250, 250);

//DRAW CIRCLE
// (x,y,r,sAngle, eAngle, counterclockwise)

// context.fillStyle = "lightgreen"
// context.strokeStyle = "darkblue"
// context.lineWidth = 10;
// context.beginPath();
// context.arc(250,250,200,0,2*Math.PI, true)
// context.stroke();
// context.fill();


//DRAW TEXT
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center"
context.fillText("Porsche", canvas.width/2, canvas.height/2);
