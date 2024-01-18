const express = require('express')
const route = express.Router();

const {AdminDepositall, AdminDepositPending, AdminDepositAccept, AdminDepositReject, AdminDepositAcceptUpdate, AdminDepositRejectUpdate, AdminDepositRejectsum, AdminDepositSingleView} = require('../../../controller/admin/Deposits/DepositsController');

route.get('/all',  AdminDepositall);
route.get('/pending',  AdminDepositPending);
route.get('/accept',  AdminDepositAccept);
route.put('/accept/:id',  AdminDepositAcceptUpdate);
route.get('/reject',  AdminDepositReject);
route.put('/reject/:id',  AdminDepositRejectUpdate);
route.get('/sum',  AdminDepositRejectsum);
route.get('/single/:id',  AdminDepositSingleView);


module.exports = route;