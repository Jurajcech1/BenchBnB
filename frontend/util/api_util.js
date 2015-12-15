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
  },

  createBench: function(bench) {
    $.ajax({
      url: "api/benches",
      method: "POST",
      data: {bench: bench},
      success: function(bench) {
        ApiActions.receiveSingleBench(bench)
      }
    });
  }
};


module.exports = ApiUtil;
