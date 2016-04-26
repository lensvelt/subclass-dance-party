var SidewaysDancer = function() {

  Dancer.apply(this, arguments);
};

SidewaysDancer.prototype = Object.create(Dancer.prototype);
SidewaysDancer.prototype.constructor = SidewaysDancer;

SidewaysDancer.prototype.setPosition = function() {

  var left = $('body').width() * Math.random();
  var leftPosition = { 
    left: left 
  };
  this.$node.css(left);
  // Dancer.prototype.setPosition.call(this, ,left);

};
