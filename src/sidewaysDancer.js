var SidewaysDancer = function(top, left, timeBetweenSteps) {

  Dancer.apply(this, arguments);
};

SidewaysDancer.prototype = Object.create(Dancer.prototype);
SidewaysDancer.prototype.constructor = SidewaysDancer;

BlinkyDancer.prototype.step = function(timeBetweenSteps) {
  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this, timeBetweenSteps * 2);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  // var top = top + 10;
  // var left = left + 10;
  // Dancer.prototype.setPosition.call(this, top, left);
};
