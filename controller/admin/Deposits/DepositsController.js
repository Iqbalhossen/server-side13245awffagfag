const DepositModels = require('../../../models/Deposit/DepositModels');

const { ObjectId } = require('mongodb');


const AdminDepositall = async (req, res) => {
    try {
        const data = await DepositModels.find();
        res.status(201).json({
            success: true,
            data: data,
            length: data.length
        });

    } catch (error) {
        console.log(error);
    }
};
const AdminDepositPending = async (req, res) => {
    try {
        const data = await DepositModels.find({ Status: 0 });
        res.status(201).json({
            success: true,
            data: data,
            length: data.length
        });

    } catch (error) {
        console.log(error);
    }
};
const AdminDepositAccept = async (req, res) => {
    try {
        const data = await DepositModels.find({ Status: 1 });
        res.status(201).json({
            success: true,
            data: data,
            length: data.length
        });

    } catch (error) {
        console.log(error);
    }
};
const AdminDepositReject = async (req, res) => {
    try {
        const data = await DepositModels.find({ Status: 2 });
        res.status(201).json({
            success: true,
            data: data,
            length: data.length
        });

    } catch (error) {
        console.log(error);
    }
};
const AdminDepositAcceptUpdate = async (req, res) => {
    try {
        const old_id = req.params.id;
        const query = { _id: new ObjectId(old_id) };
        const option = { upsert: true };
        const results = await DepositModels.findByIdAndUpdate(query, { Status: 1 }, option);
        res.status(201).json({
            success: true,
            message: "Deposts accept successfully",
            data: results,
        });

    } catch (error) {
        console.log(error);
    }
};
const AdminDepositRejectUpdate = async (req, res) => {
    try {
        const old_id = req.params.id;
        const query = { _id: new ObjectId(old_id) };
        const option = { upsert: true };
        const results = await DepositModels.findByIdAndUpdate(query, { Status: 2 }, option);
        res.status(201).json({
            success: true,
            message: "Deposts reject successfully",
            data: results,
        });

    } catch (error) {
        console.log(error);
    }
};
const AdminDepositRejectsum = async (req, res) => {
    try {
        // ObjectId('6599aec53bfcec4e90943ff2'),
        const results = await DepositModels.aggregate([
            { $match: { Status: 1, user_id: '655f050cc50ed357a73003c1' } },
            { $group: { _id: {}, sum: { $sum: "$Amount" } } }
        ]);

        const pending = await DepositModels.aggregate([
            { $match: { Status: 0, user_id: '655f050cc50ed357a73003c1' } },
            { $group: { _id: {}, sum: { $sum: "$Amount" } } }
        ]);

        const reject = await DepositModels.aggregate([
            { $match: { Status: 2, user_id: '655f050cc50ed357a73003c1' } },
            { $group: { _id: {}, sum: { $sum: "$Amount" } } }
        ]);

        const resultes = await DepositModels.aggregate([
            { $match: { Status: 1, user_id: '655f050cc50ed357a73003c1' } }
        ]);

        // const results = await DepositModels.aggregate([{$group:{_id:{}, sum:{$sum:"$Amount"}}}]);

        console.log(results[0].sum - pending[0].sum - reject[0]?.sum)
        res.status(201).json({
            success: true,
            message: "Deposts reject successfully",
            data: resultes.length,
            sum: results
        });

    } catch (error) {
        console.log(error);
    }
};
const AdminDepositSingleView = async (req, res) => {
    try {
        // ObjectId('6599aec53bfcec4e90943ff2'),
        
        const old_id = req.params.id;
        const query = { _id: new ObjectId(old_id) };
        const results = await DepositModels.findOne(query);


        res.status(201).json({
            success: true,
            message: "Deposts  successfully",
            data: results,
        });

    } catch (error) {
        console.log(error);
    }
};



module.exports = { AdminDepositall, AdminDepositPending, AdminDepositAccept, AdminDepositReject, AdminDepositAcceptUpdate, AdminDepositRejectUpdate, AdminDepositRejectsum,AdminDepositSingleView };
