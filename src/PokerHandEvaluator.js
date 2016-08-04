System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PokerHandEvaluator;
    return {
        setters:[],
        execute: function() {
            PokerHandEvaluator = (function () {
                function PokerHandEvaluator() {
                }
                PokerHandEvaluator.prototype.announceWinner = function (hands) {
                    return "Black wins";
                };
                return PokerHandEvaluator;
            }());
            exports_1("PokerHandEvaluator", PokerHandEvaluator);
        }
    }
});
//# sourceMappingURL=PokerHandEvaluator.js.map