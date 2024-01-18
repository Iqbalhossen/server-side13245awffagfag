const UserModels = require('../../../models/userModels');

const { ObjectId } = require('mongodb');

// Menu section 
const AdminAllUserView = async (req, res) => {

    try {
        const data = await UserModels.find();
        res.status(201).json({
            success: true,
            data: data,
            length: data.length
        });

    } catch (error) {
        console.log(error);
    }
};

const AdminUserViewById = async (req, res) => {

    try {
        const id =  req.params.id;
        const query = { _id: new ObjectId(id) };
        const data = await UserModels.findOne(query);
        res.status(201).json({
            success: true,
            data: data,
        });

    } catch (error) {
        console.log(error);
    }
};

const AdminUserBanned = async (req, res) => {

    try {
        const data = await UserModels.find({status:2});
        res.status(201).json({
            success: true,
            data: data,
        });

    } catch (error) {
        console.log(error);
    }
};

const AdminUseEmailUnverify = async (req, res) => {

    try {
        const data = await UserModels.find({is_verified:false});
        res.status(201).json({
            success: true,
            data: data,
        });

    } catch (error) {
        console.log(error);
    }
};





module.exports = { AdminAllUserView, AdminUserViewById, AdminUserBanned, AdminUseEmailUnverify};
