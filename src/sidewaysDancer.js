var SidewaysDancer = function(top, left, timeBetweenSteps) {

  Dancer.apply(this, arguments);
  this.moveRightAndLeft(timeBetweenSteps);
};

SidewaysDancer.prototype = Object.create(Dancer.prototype);
SidewaysDancer.prototype.constructor = SidewaysDancer;

SidewaysDancer.prototype.moveRightAndLeft = function (timeBetweenSteps) {
  var maxWidth = $('body').width();
  var travelDirection = 'right';
  // if (this.left > maxWidth) {
  //   travelDirection = 'left';
  // } 
  // if (this.left < 0) {
  //   travelDirection = 'right';
  // }

  // while (travelDirection === 'left' && this.left > 0) {
  //   this.left -= 100;

  // } 
  // while (travelDirection === 'right' && this.left < maxWidth) {
  //   this.left += 100;
  // }

  setTimeout(this.moveRightAndLeft.bind(this, 500), 500);
  this.$node.animate({left: this.left});
};