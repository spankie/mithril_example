var m = require("mithril");

var User = require("../models/User");

// create a component:
module.exports = {
    oninit: User.loadList,
    view: function() {
        // return a div of .user-list
        return m(".user-list", User.list.map(function(user) {
            return m("a.user-list-item", {href: "/edit/" + user.id, oncreate: m.route.link}, user.firstName + " " + user.lastName);
        }));

    }
}