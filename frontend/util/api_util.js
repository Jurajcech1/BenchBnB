var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchBenches: function(bounds) {
    $.ajax({
      url: "api/benches",
      data: {bounds},
      success: function(benches) {
        ApiActions.receiveAll(benches);
      }
    });
  }
};


module.exports = ApiUtil;
