var SidewaysDancer = function(top, left, timeBetweenSteps) {

  Dancer.apply(this, arguments);
  this.moveRightAndLeft();
};

SidewaysDancer.prototype = Object.create(Dancer.prototype);
SidewaysDancer.prototype.constructor = SidewaysDancer;

SidewaysDancer.prototype.moveRightAndLeft = function () {
  var maxWidth = $('body').width();
  var travelDirection = 'right';

  if (this.left <= 0) {
    travelDirection = 'right';
  } else if (this.left >= maxWidth) {
    travelDirection = 'left';
  }

  if (this.canMove) {
    while (travelDirection === 'left' && this.left > 0) {
      this.left -= 10;
    } 
    while (travelDirection === 'right' && this.left < maxWidth) {
      this.left += 10;
    }
  }
  this.timeBetweenSteps = 300;
  setTimeout(this.moveRightAndLeft.bind(this), this.timeBetweenSteps);
  this.$node.animate({left: this.left});
};