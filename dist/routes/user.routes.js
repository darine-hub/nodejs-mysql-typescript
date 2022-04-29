"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.route('/listUsers').get(user_controller_1.getUsers);
router.route('/createUser').post(user_controller_1.createUser);
router.route('/:userId')
    .get(user_controller_1.getUser)
    .delete(user_controller_1.deleteUser)
    .put(user_controller_1.updateUser);
exports.default = router;
