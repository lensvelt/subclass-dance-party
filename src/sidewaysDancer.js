var SidewaysDancer = function(top, left, timeBetweenSteps) {

  Dancer.apply(this, arguments);
};

SidewaysDancer.prototype = Object.create(Dancer.prototype);
SidewaysDancer.prototype.constructor = SidewaysDancer;

SidewaysDancer.prototype.setPosition = function(top, left) {
  
  this.top = this.top + 20;
  Dancer.prototype.setPosition.call(this, this.top, this.left);  
};
