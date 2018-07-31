module.exports = function (req, res, next) {
    res.header('Access-Controll-Allow-Orign', '*');
    res.header('Access-Controll-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Contenty-Type, Accept');

    next();

}