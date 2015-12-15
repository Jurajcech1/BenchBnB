var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var _benches = [];
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants.js');

BenchStore.all = function () {
  return _benches.slice();
};

BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      BenchStore.__emitChange();
      break;
    case BenchConstants.BENCH_RECEIVED:
      addBench(payload.bench);
      BenchStore.__emitChange();
      break;
  }
};

var addBench = function(bench) {
  _benches.concat(bench);
}

var resetBenches = function(benches) {
  _benches = benches;
};
window.BenchStore = BenchStore;
module.exports = BenchStore;
