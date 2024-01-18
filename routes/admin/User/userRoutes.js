const express = require('express')
const route = express.Router();

const {AdminAllUserView, AdminUserViewById, AdminUserBanned, AdminUseEmailUnverify} = require('../../../controller/admin/User/adminUserController');

// Thrade App Store section 
route.get('/all',  AdminAllUserView);
route.get('/single/:id',  AdminUserViewById);
route.get('/banned',  AdminUserBanned);
route.get('/unverify/email',  AdminUseEmailUnverify);

module.exports = route;