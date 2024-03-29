(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  padule.Routers.Feedbacks = (function(_super) {
    __extends(Feedbacks, _super);

    function Feedbacks() {
      _ref = Feedbacks.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Feedbacks.prototype.routes = {
      'feedback': 'index'
    };

    Feedbacks.prototype.index = function() {
      return new padule.Views.FeedbackIndex({
        collection: new padule.Collections.Feedbacks
      });
    };

    return Feedbacks;

  })(Backbone.Router);

}).call(this);
