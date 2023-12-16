var canvas = document.querySelector("canvas");

// set size in the JS in order to make the canvas seize the whole browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context
var c = canvas.getContext("2d");

var mouse = {
  x: undefined,
  y: undefined,
};
// set enlarge and shrink radius size
var maxRadius = 40;
var minRadius = 2;
var colorArray = ["#FC8DCA", "#C37EDB", "#B7A6F6", "#88A3E2", "#AAECFC"];
// get the mouse position
window.addEventListener("mousemove", function (event) {
  //console.log(event);
  mouse.x = event.x;
  mouse.y = event.y;
});
// when resize the window, canvas will be resized as well
window.addEventListener("resize", function (event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// create a circle object
function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)]; // get a random color
  this.draw = function () {
    var gradient = c.createRadialGradient(
      this.x,
      this.y,
      0,
      this.x,
      this.y,
      this.radius
    );
    gradient.addColorStop(0.025, this.color);
    gradient.addColorStop(0.1, "hsl(" + 217 + ", 61%, 33%)");
    gradient.addColorStop(0.25, "hsl(" + 217 + ", 64%, 6%)");
    gradient.addColorStop(1, "transparent");

    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // give circle a stroke
    //c.strokeStyle = "green";
    //c.stroke();
    // fill the circle with color
    c.fillStyle = gradient;
    c.fill(); // fill black if no fillStyle
  };

  this.update = function () {
    // when positon.x beyond the screen right or the left, then backward the circle
    // the circle bounds between the screen
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    // bounds off the y direction too
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    // iterate to change the position (move the circle)
    this.x += this.dx;
    this.y += this.dy;

    //interactivity
    // circle follow the mouse
    var disX = mouse.x - this.x;
    var disy = mouse.y - this.y;
    var distance = Math.sqrt(disX * disX + disy * disy);
    if (distance < 100) {
      // Calculate the angle between the circle and the mouse position
      var angle = Math.atan2(disy, disX);

      // Calculate the new velocity of the circle based on the angle
      this.disX = Math.cos(angle) * 0.5;
      this.disy = Math.sin(angle) * 0.5;
      this.x += this.disX;
      this.y += this.disy;
    }

    // when the distance between mouse position and circle position < 50px, then enlarge the radius
    // when the distance between mouse position and circle position
    if (
      mouse.x - this.x < 50 && // right side of the mouse is always growing
      mouse.x - this.x > -50 && // let the right side follow the rule above
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      // this.minRadius to ensure shrink to original size
      // when circle leave the mouse, then shrink the radius
      this.radius -= 1;
    }

    this.draw();
  };
}

var circleArray = [];
for (var i = 0; i < 800; i++) {
  // circle's initial position
  var radius = Math.random() * 8 + 1;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  // position change speed
  var dx = Math.random() - 0.5;
  var dy = Math.random() - 0.5;

  // add new random circle to the array
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

// 'animate' loop function
function animate() {
  // call the loop function(drawing all the time)
  requestAnimationFrame(animate);
  // clear the whole canvas after every draw
  c.clearRect(0, 0, innerWidth, innerHeight);
  // draw a circle with iterations of x position
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
