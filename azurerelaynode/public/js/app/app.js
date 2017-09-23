"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tweetViewModel_1 = require("./tweetViewModel");
var ko = require("knockout");
var tweetViewModel = new tweetViewModel_1.TweetViewModel();
ko.applyBindings(tweetViewModel);
var ws = new WebSocket("wss://relaymalaga.servicebus.windows.net:443/$hc/relay01?\n    sb-hc-action=connect&sb-hc-token=" + relayToken);
ws.onmessage = function (event) {
    tweetViewModel.addTweet(JSON.parse(event.data));
};
//# sourceMappingURL=app.js.map