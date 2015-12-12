var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchBenches: function() {
    $.ajax({
      url: "api/benches",
      success: function(benches) {
        ApiActions.receiveAll(benches);
      }
    });
  }
};


module.exports = ApiUtil;
