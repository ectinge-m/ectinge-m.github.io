var canvas;
var w;

var ranges;
let seed = Math.random() * 1241;

let colors1 = "534fa3-537382-87b0a8-7288ad".split("-").map((a) => "#" + a);
let colors2 = "ec2029-b7695f-c08c76-b98d9a-877fa4".split("-").map((a) => "#" + a);
var plus;

var date, dd, mm, yy, time, hh, mi, ss;

let locationCheck, dateCheck, timeCheck, nameCheck = false;
let fnameValue, lnameValue;

var rectWidth = 0;

var speed0, div0;

var count1, count2, count3;


function setup() {

  w = document.getElementById("mid-width").clientWidth;
  canvas = createCanvas(w, w);
  canvas.parent('diag-canvas');
  document.getElementById("placeholder").height = w;
  const element = document.getElementById('submit');


  randomSeed(seed);
  ranges = 10;
  strokeWeight(random(1,5));
  plus = 0;

  background('#e8e8e8');

  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
  noFill();
  strokeWeight(1);
  stroke('#cccccc');
  line(w / 2, 0, w / 2, w);
  line(0, w / 2, w, w / 2);
  line(0, 0, w, w);
  line(0, w, w, 0);
  ellipse(w / 2, w / 2, w / 4);
  ellipse(w / 2, w / 2, w / 2);
  ellipse(w / 2, w / 2, w);

  noLoop();

}

function windowResized() {
  w = document.getElementById("mid-width").clientWidth;
  canvas = resizeCanvas(w, w);
  document.getElementById("placeholder").height = w;

  stop = document.getElementById("location").value;

  background('#e8e8e8');
  rectWidth = 0;

  background('#e8e8e8');
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
  strokeWeight(1);
  stroke('#cccccc');
  noFill();
  line(w / 2, 0, w / 2, w);
  line(0, w / 2, w, w / 2);
  line(0, 0, w, w);
  line(0, w, w, 0);
  ellipse(w / 2, w / 2, w / 4);
  ellipse(w / 2, w / 2, w / 2);
  ellipse(w / 2, w / 2, w);



}

function checkSubmit() {

  randomSeed(seed);
  ranges = 10;
  strokeWeight(random(1,5));
  plus = 0;

  rectWidth = 0;

  background('#e8e8e8');

  fnameValue = document.getElementById('fname').value;
  lnameValue = document.getElementById('lname').value;
  if (fnameValue && lnameValue) {
    nameCheck = true;
  }

  if((locationCheck) && (dateCheck) && (timeCheck) && (nameCheck)) {
    loop();
  } else {
  alert('Form no completed!');
  }
}


function draw() {

  randomSeed(seed);
 	noiseSeed(seed);

 	noFill();
	let H1 = random(0.25, 0.75);

 	for (let i = 0; i < ranges; i++) {
 		stroke(random(colors2));
    noFill();
 		drawingContext.shadowColor = random(colors1);
 		drawingContext.shadowOffsetX = 1;
 		drawingContext.shadowOffsetY = 1;
 		drawingContext.shadowBlur = 0;
 		beginShape();
    var tempPlus = div0 + 1;
    plus = map(tempPlus, 1, 142, 1, 10);

 		for (let x = 0; x < w; x += plus) {
 			let n = noise(x * 0.01, i * 0.01, frameCount * 0.01);
 			let y = map(n, 0, 1, 0, -w * H1);
      var px = x + 1 * sin(plus + 5);
      var py = y + plus;
      var a = map(px, 0, w, 0, 1.96 * PI);
      var r = py;
      var dx = r * cos(a);
      var dy = r * sin(a);


 			// vertex(x + 2*sin(plus+10), y + plus);
 			// curveVertex(xp, yp);
      curveVertex(dx + w * 0.5, dy + w * 0.5);
 		}
    endShape(CLOSE);

  }

  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
  strokeWeight(1);
  stroke('#cccccc');
  line(w / 2, 0, w / 2, w);
  line(0, w / 2, w, w / 2);
  line(0, 0, w, w);
  line(0, w, w, 0);
  ellipse(w / 2, w / 2, w / 4);
  ellipse(w / 2, w / 2, w / 2);
  ellipse(w / 2, w / 2, w);


  noStroke();
  fill('#ec2029');
  rect(0, 0, rectWidth, 4);
  var speedX = map(speed0, 2, 43, w / 2000, w / 1000);

  if (rectWidth > 0) {
    textStyle(NORMAL);
    textSize(12);
    textAlign(RIGHT);
    textFont('Helvetica');
    text('in progress..', w - 12, 24)
  }

  rectWidth = rectWidth + speedX;

  if (rectWidth > w) {
    textAlign(RIGHT);
    textFont('Helvetica');
    textStyle(BOLD);
    text('finished.', w - 12, 40);

    if (fnameValue.length > lnameValue.length) {
      if ((speed0 > 24) && (div0 > 71)) {
        count1 = 1; count2 = 1; count3 = 0;
      } else if ((speed0 > 24) && (div0 < 71)) {
        count1 = 1; count2 = 2; count3 = 1;
      } else if ((speed0 < 24) && (div0 < 71)) {
        count1 = 2; count2 = 2; count3 = 1;
      } else {
        count1 = 2; count2 = 1; count3 = 1;
      }
    } else {
      if ((speed0 > 24) && (div0 > 71)) {
        count1 = 2; count2 = 2; count3 = 0;
      } else if ((speed0 > 24) && (div0 < 71)) {
        count1 = 2; count2 = 3; count3 = 1;
      } else if ((speed0 < 24) && (div0 < 71)) {
        count1 = 3; count2 = 3; count3 = 1;
      } else {
        count1 = 3; count2 = 2; count3 = 1;
      }
    }

    text('Your prescription:', w - 12, 64);
    text('Bian stone x ' + count1, w - 12, 80);
    text('Magnet patch x ' + count2, w - 12, 96);
    text('Water dispenser x ' + count3, w - 12, 112);
    noLoop()




  }

}






function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("location").value = "Geolocation is not supported by this device."
  }

  locationCheck = true;
}

function showPosition(position) {
  document.getElementById("location").value = position.coords.latitude + "/" + position.coords.longitude;
}

function getDateAll() {
  date = new Date();
  mm = date.getMonth() + 1;
  dd = date.getDate();
  yy = date.getFullYear();
  document.getElementById("date").value = mm + "/" + dd + "/" + yy;
  dateCheck = true;

  speed0 = mm + dd;

}

function getTime() {
  time = new Date();
  hh = time.getHours();
  mi = time.getMinutes();
  ss = time.getSeconds();
  document.getElementById("time").value = hh + ":" + mi + ":" + ss;
  timeCheck = true;

  div0 = ss + mi + hh;
}
