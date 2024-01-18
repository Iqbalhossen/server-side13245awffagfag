const express = require('express')
const route = express.Router();

const {AdminKYCPendingView, AdminKYCDetailsView, AdminKYAccept, AdminKYCReject, } = require('../../../controller/admin/KYC/KYCController');

// Thrade App Store section 
route.get('/pending',  AdminKYCPendingView);
route.get('/details/:id',  AdminKYCDetailsView);
route.put('/accept/:id',  AdminKYAccept);
route.put('/reject/:id',  AdminKYCReject);

module.exports = route;