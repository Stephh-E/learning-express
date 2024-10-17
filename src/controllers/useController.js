const express = require("express");
const router = express.Router();

// Get all users
// but only if the admin is the one making this request!
// domainName:port/users/
router.get(
    "/",
    checkIfAdmin,
    getUsersFromDatabase,
    (request, respomnse) => {
        response.json({
            users:request.userData // use the middleware results in the endpoints response
        });
    }
);

module.exports = router;