// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<div class="dancer nuke"></div>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition();
  this.collide();
  this.canMove = true;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.collide = function () {
  var diffLeft = 0;
  var diffTop = 0;
  var distance = 0;
  
  for (var i = 0; i < window.dancers.length; i++) {
    diffLeft = Math.pow((this.left - window.dancers[i].left), 2);
    diffTop = Math.pow((this.top - window.dancers[i].top), 2);
    distance = Math.sqrt(diffTop + diffLeft);

    if (distance < 30 && window.dancers[i] !== this) {
      this.destruct();
    }
  }
  setTimeout(this.collide.bind(this), 100);
};

Dancer.prototype.lineUp = function (top, left) {

  this.top = top;
  this.left = left;

  this.canMove = false;
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.animate(styleSettings);
};

Dancer.prototype.destruct = function () {

  this.canMove = false;
  var direction = Math.floor(Math.random() * 4);
  var exitDirection = [{left: +4000}, {left: -100}, {top: 4000}, {top: -100}];
  this.$node.animate(exitDirection[direction], 1000);
};

Dancer.prototype.setPosition = function() {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};