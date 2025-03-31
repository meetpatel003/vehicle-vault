const routes = require("express").Router();
const roleController = require("../controllers/roleController");

routes.get("/roles",roleController.getAllRoles);
routes.post("/role",roleController.addRole);
routes.delete("/role/:roleId",roleController.deleteRole);
routes.get("/role/:roleId",roleController.getRoleById);

module.exports = routes;
