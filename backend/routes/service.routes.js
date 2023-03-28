const express = require("express");
const router = express.Router();

const servicesControllers = require("../controllers/service.controllers");

router.route("/").get(servicesControllers.getServices);
/** 
        * @api {get} /user - All service
        * @apiDescription Get all service 
                
        * @apiSucess {Object[]}  All the service
        
        * @apiError {Unauthorization 401} Unauthorized      Only Authenticated Users can access the data. 
        * @apiError {Forbidden 403} Forbidden      Only Admin users can access the data
**/

module.exports = router;
