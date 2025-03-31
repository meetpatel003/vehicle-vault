const roleModel = require("../models/roleModel");

const addRole = async ( req, res) => {
    const savedRole = await roleModel.create(req.body)
    res.json({
        message : "Role create",
        data : savedRole,
    });
};

const getAllRoles = async (req, res) => {
    const allRoles = await roleModel.find()
    res.json({
        message : "Roles are fetched successfully",
        data : allRoles,
    });
};

const deleteRole = async (req, res ) => {
    const removeRole = await roleModel.findByIdAndDelete(req.params.roleId)
    res.json({
        message : "Role deleted successfully",
        data : removeRole,
    });
};

const getRoleById = async ( req, res ) => {
    const getRole = await roleModel.findById(req.params.roleId)
    res.json({
        message : "role fetched...",
        data : getRole,
    });
};

module.exports = {
    addRole, getAllRoles, deleteRole, getRoleById,
};
