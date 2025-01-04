var {expressjwt: jwt} = require("express-jwt");

function authjwt(){
const secret = process.env.JSON_WEB_TOKEN_SECRET_KEY;

    return jwt({
        secret: secret,
        algorithms: ["HS256"],
    }).unless({
        path: [
            { url: /\/api\/user\/signin/, methods: ['POST'] },
            { url: /\/api\/user\/signup/, methods: ['POST'] },
        ],
    });
}

module.exports = authjwt;