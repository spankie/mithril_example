var m = require("mithril");

// get the userlist component...
var UserList = require("./views/UserList");
// get the userform component
var UserForm = require("./views/UserForm");
// get the layout menu
var Layout = require("./views/layout");

// m.render(document.body, "Hello world!!!");
// m.mount(document.body, UserList);
m.route(document.body, "/list", {
    "/list": {
        render: function() {
            return m(Layout, m(UserList));
        }
    },
    "/edit/:id": {
        render: function() {
            return m(Layout, m(UserForm));
        }
    }
})