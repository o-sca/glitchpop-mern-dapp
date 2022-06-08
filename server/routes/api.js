const { Router } = require('express');

const contractController = require('../controllers/contractController.js');

exports.apiRouter = () => {
    const router = Router();
    
    router.get('/contract', contractController.fetchContract);
    router.get('/status', contractController.fetchStatus);
    
    return router;
};