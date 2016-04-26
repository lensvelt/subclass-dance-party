var RandomDancer = function (top, left, timeBetweenSteps) {
  BlinkyDancer.apply(this, arguments);
  this.moveRandomly(timeBetweenSteps);
  this.center = [this.top, this.left];
  
};

RandomDancer.prototype = Object.create(BlinkyDancer.prototype);
RandomDancer.constructor = RandomDancer;

RandomDancer.prototype.moveRandomly = function (timeBetweenSteps) {
  
  this.top = Math.random() * $('body').height();
  this.left = Math.random() * $('body').width();
  setTimeout(this.moveRandomly.bind(this, 500), 500);
  this.$node.animate({left: this.left, top: this.top});
};