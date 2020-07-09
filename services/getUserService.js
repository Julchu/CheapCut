"use strict";

const { User } = require("../models/Users");

let getUser = async (id) => {
    let user = await User.findOne({username: id});
    return user
}

module.exports = {getUser};