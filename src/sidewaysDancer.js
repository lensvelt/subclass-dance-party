var SidewaysDancer = function(top, left, timeBetweenSteps) {

  Dancer.apply(this, arguments);
  this.moveRight = true;
  this.moveRightAndLeft();
};

SidewaysDancer.prototype = Object.create(Dancer.prototype);
SidewaysDancer.prototype.constructor = SidewaysDancer;

SidewaysDancer.prototype.moveRightAndLeft = function () {
  var maxWidth = $('body').width();



  if (this.canMove) {
    if (this.left <= 0) {
      this.moveRight = true;
    } else if (this.left >= maxWidth) {
      this.moveRight = false;
    }
    if (this.moveRight) {
      this.left += 50;
    } else {
      this.left -= 50;
    }
    this.timeBetweenSteps = 1000;
    setTimeout(this.moveRightAndLeft.bind(this), this.timeBetweenSteps);
    this.$node.animate({left: this.left});
  }
};