"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var TweetViewModel = /** @class */ (function () {
    function TweetViewModel() {
        this.tweets = ko.observableArray([]);
    }
    TweetViewModel.prototype.addTweet = function (tweet) {
        var tweetCollection = this.tweets();
        tweetCollection.unshift(tweet);
        this.tweets(tweetCollection);
    };
    return TweetViewModel;
}());
exports.TweetViewModel = TweetViewModel;
//# sourceMappingURL=tweetViewModel.js.map