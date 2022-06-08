const { Router } = require('express');

exports.mainPageRouter = () => {
    const router = Router();

    router.get('/', (req, res) => {
        res.render('pages/index/index', {
            infura: process.env.INFURA,
            formatic: process.env.FORMATIC
        });
    });
    
    return router;
};