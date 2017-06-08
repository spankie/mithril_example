var m = require("mithril");

var User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true
        })
        .then(function(result) {
            User.list = result.data
        })
    },

    current: {},
    load: function(id) {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users/:id",
            data: {id: id},
            withCredentials: true
        })
        .then(function(result) {
            User.current = result
        })
    },

    save: function() {
        // console.log("save()")
        return m.request({
            method: "PUT",
            url: "https://rem-rest-api.herokuapp.com/api/users/:id",
            data: User.current,
            withCredentials: true
        })
        .then(function(result) {
            console.log(JSON.stringify(result));
        })
    }
}

module.exports = User